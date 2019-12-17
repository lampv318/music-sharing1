require "rails_helper"

RSpec.describe Api::ArtistsController, type: :controller do
  describe "GET #index" do
    let!(:artists) { FactoryBot.create_list(:artist, 2) }
    before(:each) { get :index, format: "json" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @artists" do
      expect(assigns(:artists)).to eq(artists)
    end

    it "renders the index template" do
      expect(response).to render_template(:index)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

  describe "GET #show" do
    let(:artist) { FactoryBot.create(:artist) }
    before(:each) { get :show, params: {id: artist.id, format: "json"} }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @artist" do
      expect(assigns(:artist)).to eq(artist)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end
end