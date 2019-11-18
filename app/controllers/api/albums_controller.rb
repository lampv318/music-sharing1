module Api
  class AlbumsController < ApplicationController
    before_action :set_album, only: :show

    def index
      @albums = Album.all
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
    def set_album
      @album = Album.find_by id: params[:id]
    end
  end
end