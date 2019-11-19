ActiveAdmin.register Song do
  before_action :validate_file, only: [:create, :update]
  permit_params :track_no, :name, :artist_id, :album_id, :year, :file,
                category_ids: []

  config.sort_order = "name_asc"

  controller do
    def scoped_collection
      super.includes :album, :artist, :categories
    end

    def validate_file
      file = params[:song][:file]
      return if file.blank?
      validate_size file
      validate_contenttype file
    end

    def validate_size file
      return if file.size <= 100000000
      flash[:danger] = "file large", 100000000
      redirect_back fallback_location: request.original_url
      return
    end

    def validate_contenttype file
      return if file.content_type.start_with? "audio/"
      flash[:danger] =  "Wrong Format"
      redirect_back fallback_location: request.original_url
      return
    end
  end

  filter :name
  filter :artist, collection: ->{Artist.order :name}
  filter :album, collection: ->{Album.order :name}
  filter :categories

  form partial: "form"

  index do
    selectable_column
    column :name do |songs|
      best_in_place songs, :name, as: :input, url: [:admin, songs]
    end
    column :album
    column :artist
    column :duration
    column :listen do |song|
      if song.file.attached?
        link_to "Listen", song_attachment_url(song) if song.file.present?
      end
    end
    column :download do |song|
      if song.file.attached?
        link_to "Download", rails_blob_path(song.file, disposition: "attachment")
      end
    end
    actions
  end

  show do
    attributes_table do
      row :name
      row :artist
      row :album
      row :listen do |song|
        if song.file.attached?
          link_to "Listen", rails_blob_path(song.file, disposition: "preview")
        end
      end
      row :download do |song|
        if song.file.attached?
          link_to "Download", rails_blob_path(song.file, disposition: "attachment")
        end
      end
      row :genres do
        song.categories.map do |category|
          raw link_to(category.name, admin_category_path(category))
        end.join(", ").html_safe
      end
    end
  end
end