module Api
  class CategoriesController < Api::ApiController
    before_action :set_category, only: :show

    def index
      @categories = Category.all
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
    def set_category
      @category = Category.find_by id: params[:id]
      present_or_not_found @category
    end
  end
end