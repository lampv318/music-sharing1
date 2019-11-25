module Api
  class SessionsController < Api::ApiController
    skip_before_action :verify_authenticity_token

    def new
    end

    def destroy
      log_out
      render json: { status: 200, logged_out: true }
    end
  end
end