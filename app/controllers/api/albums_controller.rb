module Api
  class AlbumsController < Api::ApiController
    before_action :set_category, only: :index
    before_action :set_artist, only: :index
    before_action :set_album, only: :show

    def index
      @albums =
          if @category
            @category.albums
          else
            @artist ? @artist.albums : Album.all
          end
      respond_to do |format|
        format.json
      end
    end

    def show
      respond_to do |format|
        format.json
      end
    end

    private
    def set_category
      return if params[:category_id].blank?
      @category = Category.find_by id: params[:category_id]
      present_or_not_found @category
    end

    def set_artist
      return if params[:artist_id].blank?
      @artist = Artist.find_by id: params[:artist_id]
      present_or_not_found @artist
    end

    def set_album
      @album = Album.find_by id: params[:id]
      present_or_not_found @album
    end
  end
end