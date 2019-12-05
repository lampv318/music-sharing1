ActiveAdmin.register Song do
  permit_params :track_no, :name, :artist_id, :album_id, :year, :save_file,
                category_ids: []

  config.sort_order = "name_asc"

  controller do
    def create
      @song = Song.new
      @song.track_no = params[:song][:track_id]
      @song.name = params[:song][:name]
      @song.year = params[:song][:year]
      @song.duration = params[:song][:duration]
      @song.file_in_ws = params[:song][:file_in_ws]

      @album = Album.new
      @album.name = params[:song][:album][:name]
      @album.picture_in_ws = params[:song][:album][:picture_in_ws]

      @artist = Artist.new
      @artist.name = params[:song][:artist][:name]
      @artist.info = params[:song][:artist][:info]
      @artist.picture_in_ws = params[:song][:artist][:picture_in_ws]

      @category = Category.find_or_create_by(name: params[:song][:category][:name])
      @category.tag = 0 if @category.tag.blank?
      unless @category.save
        flash[:notice] = "something went wrong"
        render "new"
      end

      unless @artist.save
        flash[:notice] = "something went wrong"
        render "new"
      end

      unless @album.save
        flash[:notice] = "something went wrong"
        render "new"
      end

      @song.artist = @artist
      @song.album = @album
      if @song.save
        flash[:notice] = "Create successfully"
        render "index"
      else
        render "new"
      end

      SongCategory.find_or_create_by(song: @song, category: @category)
      AlbumArtist.find_or_create_by(album: @album, artist: @artist)
      AlbumCategory.find_or_create_by(album: @album, category: @category)

    end

    def scoped_collection
      super.includes :album, :artist, :categories
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
    column :album_disc_no do |songs|
      songs.album.disc_no
    end
    column :artist
    column :duration
    column :file_in_ws do |song|
      link_to "Listen",  song.file_in_ws if song.file_in_ws.present?
    end
    column :file do |song|
      link_to "Listen", song_attachment_url(song) if song.save_file.present?
    end
    column :genres do |song|
      song.categories.map do |category|
        raw link_to(category.name, admin_category_path(category))
      end.join(", ").html_safe
    end
    actions
  end

  show do
    attributes_table do
      row :name
      row :artist
      row :album
      row :save_file do |song|
        link_to "Listen", song_attachment_url(song) if song.save_file.present?
      end
      row :genres do
        song.categories.map do |category|
          raw link_to(category.name, admin_category_path(category))
        end.join(", ").html_safe
      end
    end
  end
end