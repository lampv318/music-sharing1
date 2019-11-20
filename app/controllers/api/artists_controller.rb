module Api
  class ArtistsController < Api::ApiController
    before_action :set_artist, only: :show

    def index
      @artists = Artist.all
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
    def set_artist
      @artist = Artist.find_by id: params[:id]
      present_or_not_found @artist
    end
  end
end
