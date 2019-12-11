module Api
  class SongsController < Api::ApiController
    before_action :set_artist, only: :index
    before_action :set_album, only: :index
    before_action :set_song, only: :show

    def index
      @songs =
          if @album
            @album.songs.all
          else
            @artist ? @artist.songs : Song.all.shuffle
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
    def set_artist
      return if params[:artist_id].blank?
      @artist = Artist.find_by id: params[:artist_id]
      present_or_not_found @artist
    end

    def set_album
      return if params[:album_id].blank?
      @album = Album.find_by id: params[:album_id]
      present_or_not_found @album
    end

    def set_song
      @song = Song.find_by id: params[:id]
      present_or_not_found @song
    end
  end
end