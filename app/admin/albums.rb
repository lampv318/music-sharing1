ActiveAdmin.register Album do
  permit_params :name, :picture

  filter :name
  filter :created_at

  form partial: "form"

  controller do
    def create
      @album = Album.new
      @album.name = params[:album][:name]
      file_name= "import/" + params[:file]
      @upload = Cloudinary::Uploader.upload(file_name, :folder => "image/")
      if @upload.present?
        @album.picture_in_ws = @upload["url"]
      end
      if @album.save
        flash[:notice] = "Song have been created"
        render :index
      else
        render :new
      end
    end
  end
end