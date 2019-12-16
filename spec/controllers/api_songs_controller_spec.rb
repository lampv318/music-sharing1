require "rails_helper"

RSpec.describe Api::SongsController, type: :controller do

  describe "GET #index" do
    let!(:songs) { FactoryBot.create_list(:song, 2) }
    before(:each) { get :index, format: "json" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @songs" do
      expect(assigns(:songs).count).to eq(songs.count)
    end

    it "renders the index template" do
      expect(response).to render_template(:index)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end

  end

  describe "GET #show" do
    let(:song) { FactoryBot.create(:song)}
    before(:each) { get :show, params: { id: song.id, format: "json"} }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @song" do
      expect(assigns(:song)).to eq(song)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

end