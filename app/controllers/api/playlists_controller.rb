module Api
    class PlaylistsController < ApplicationController
      before_action :set_user, only: [:index, :show]
      before_action :set_playlist, only: :show

      def index
        @playlists = @user ? @user.playlists : Playlist.all
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
      def set_user
        return if params[:user_id].blank?
        @user = User.find_by id: params[:user_id]
      end

      def set_playlist
        @playlist = Playlist.find_by id: params[:id]
      end
    end
end
