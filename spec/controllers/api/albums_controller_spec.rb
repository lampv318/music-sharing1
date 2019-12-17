require "rails_helper"

RSpec.describe Api::AlbumsController, type: :controller do
  describe "GET #index" do
    let!(:albums) { FactoryBot.create_list(:album, 2) }
    before(:each) { get :index, format: "json" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @artists" do
      expect(assigns(:albums)).to eq(albums)
    end

    it "renders the index template" do
      expect(response).to render_template(:index)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

  describe "GET #show" do
    let(:album) { FactoryBot.create(:album) }
    before(:each) { get :show, params: {id: album.id, format: "json"} }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @album" do
      expect(assigns(:album)).to eq(album)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end
end