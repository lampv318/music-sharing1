module Api
  class SearchController < Api::ApiController
    before_action :search_all, only: :index

    def index
      respond_to do |format|
        format.json
      end
    end

    private
    def search_artists
      @artists = Artist.ransack(name_cont: @q).result
    end

    def search_albums
      @albums = Album.ransack(
          name_cont: @q,
          artist_name_cont: @q,
          m: "or"
      ).result
    end

    def search_songs
      @songs = Song.ransack(
          name_cont: @q,
          artist_name_cont: @q,
          album_name_cont: @q,
          m: "or"
      ).result
    end

    def search_all
      @q = params[:q]
      search_artists
      search_albums
      search_songs
    end
  end
end
