module Api
  class SongsController < ApplicationController
    before_action :set_song, only: :show
    def index
      @songs = Song.all
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
    def set_song
      @song = Song.find_by id: params[:id]
    end
  end
end