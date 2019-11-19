ActiveAdmin.register Song do
  before_action :validate_file, only: [:create, :update]

  controller do
    def validate_file
      file = params[:song][:file]
      if file.size > Settings.file_size
        flash[:danger] = "error"
        redirect_back fallback_location: request.original_url
        return
      end

      if !file.content_type.start_with?("audio/") && file.present?
        flash[:danger] = "Wrong Format"
        redirect_back fallback_location: request.original_url
        return
      end
    end
  end

  permit_params :name, :artist_id, :album_id, :file

  filter :name
  filter :artist
  filter :album
  filter :categories

  form do |f|
    f.inputs do
      f.input :name
      f.input :artist
      f.input :album
      if f.object.file.attached?
        file_hint = "Exitting"
        file_hint << link_to(f.object.file.attachment.filename, url_for(f.object.file.attachment))
        file_hint << "&nbsp;" + link_to("Delete Attachment", attachment_path(f.object.file.signed_id), method: :delete, data: {confirm: "Confirm"})
        f.input :file, as: :file, input_html: {"data-direct-upload-url": rails_direct_uploads_url}, hint: file_hint.html_safe
      else
        f.input :file, as: :file, input_html: {"data-direct-upload-url": rails_direct_uploads_url}
      end
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :artist
      row :album
      row :file do |song|
        if song.file.attached?
          link_to song.file.filename, url_for(song.file)
        end
      end
    end
  end
end