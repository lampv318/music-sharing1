module Api
    class PlaylistsController < Api::ApiController
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
        present_or_not_found @user
      end

      def set_playlist
        @playlist = Playlist.find_by id: params[:id]
        present_or_not_found @playlist
      end
    end
end
