ActiveAdmin.register Artist do
  permit_params :name, :info, :picture

  filter :name
  filter :info
  filter :created_at

  form partial: "form"

  controller do
    def create
      @artist = Artist.new
      @artist.name = params[:artist][:name]
      @artist.info = params[:artist][:info]
      file_name= "import/" + params[:file]
      @upload = Cloudinary::Uploader.upload(file_name, :folder => "image/")
      if @upload.present?
        @artist.picture_in_ws = @upload["url"]
      end
      if @artist.save
        flash[:notice] = "Artist have been created"
        render :index
      else
        render :new
      end
    end
  end
end