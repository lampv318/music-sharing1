require "rails_helper"

RSpec.describe Api::SongsController, type: "request" do

  describe "GET #index" do
    let!(:songs) { FactoryBot.create_list(:song, 2) }
    before(:each) { get "/api/songs" }

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
    let(:song) { FactoryBot.create(:song) }
    before(:each) { get "/api/songs/#{song.id}" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @song" do
      expect(json["name"]).to eq(song.name)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

  describe "should return song of album when album present " do
    let!(:song) { FactoryBot.create(:song) }

    before { get "/api/albums/1/songs" }

    it "should return success with song" do
      expect(json.first["name"]).to eq(song.name)
    end
  end

  describe "#present_or_not_found in set_songs" do
    before { get "/api/songs/999" }

    it "should return status: 404" do
      expect(json["status"]).to eq(404)
      expect(json["error"]).to eq("not found")
    end
  end

  describe "#present_or_not_found in set_albums" do
    before(:each) { get "/api/albums/1/songs" }

    it "should return status: 404" do
      expect(json["status"]).to eq(404)
      expect(json["error"]).to eq("not found")
    end
  end

  describe "#present_or_not_found in set_artist" do
    before(:each) { get "/api/artists/1/songs" }

    it "should return status: 404" do
      expect(json["status"]).to eq(404)
      expect(json["error"]).to eq("not found")
    end
  end

end