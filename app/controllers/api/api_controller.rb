module Api
  class ApiController < ApplicationController

    def present_or_not_found object
      return if object.present?
      render json: { error: "not found", status: 404 }
    end
  end
end