require "rails_helper"

RSpec.describe Api::CategoriesController, type: :controller do
  describe "GET #index" do
    let!(:categories) { FactoryBot.create_list(:category, 2) }
    before(:each) { get :index, format: "json" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @categories" do
      expect(assigns(:categories)).to eq(categories)
    end

    it "renders the index template" do
      expect(response).to render_template(:index)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

  describe "GET #show" do
    let(:category) { FactoryBot.create(:category) }
    before(:each) { get :show, params: {id: category.id, format: "json"} }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @artist" do
      expect(assigns(:category)).to eq(category)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end
end