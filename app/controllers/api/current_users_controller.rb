module Api
  class CurrentUsersController < Api::ApiController
    def index
      respond_to do |format|
        format.json
      end
    end
  end
end