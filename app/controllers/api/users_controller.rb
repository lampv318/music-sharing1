module Api
  class UsersController < Api::ApiController
    skip_before_action :verify_authenticity_token
    before_action :set_user, only: [:show, :destroy]

    def index
      @users = User.all
      respond_to do |format|
        format.json
      end
    end

    def show
      respond_to do |format|
        format.json
      end
    end

    def create
      @user = User.new user_params
      if @user.save
        respond_to do |format|
          format.json
        end
      end
    end

    def destroy

    end

    private
      def set_user
        @user = User.find_by id: params[:id]
        present_or_not_found @user
      end

      def user_params
        params.permit User::USER_PARAMS
      end
  end
end
