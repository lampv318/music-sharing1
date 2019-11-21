module Api
  class ApiController < ApplicationController

    def present_or_not_found object
      return if object.present?
      render body: nil, status: :not_found
    end
  end
end