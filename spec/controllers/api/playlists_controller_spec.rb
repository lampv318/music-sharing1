require "rails_helper"

RSpec.describe Api::PlaylistsController, type: "request" do
  describe "GET #index" do
    let!(:playlist_song) { FactoryBot.create_list(:playlist_song, 2) }

    describe "have not user in route" do
      before(:each) { get "/api/playlists" }

      it "returns a success response" do
        expect(response).to be_successful
      end

      it "assigns @playlists" do
        expect(json.count).to eq(Playlist.count)
      end

      it "renders the index template" do
        expect(response).to render_template(:index)
      end

      it "response json" do
        expect(response.content_type).to eq "application/json; charset=utf-8"
      end
    end

    describe "have user in route" do
      before(:each) { get "/api/users/1/playlists" }

      it "returns a success response" do
        expect(response).to be_successful
      end

      it "assigns @playlists" do
        expect(json.first["name"]).to eq(User.first.playlists.first.name)
      end

      it "renders the index template" do
        expect(response).to render_template(:index)
      end

      it "response json" do
        expect(response.content_type).to eq "application/json; charset=utf-8"
      end
    end

  end

  describe "GET #show" do
    let!(:playlist_song) { FactoryBot.create_list(:playlist_song, 2) }
    before(:each) { get "/api/playlists/1" }

    it "returns a success response" do
      expect(response).to be_successful
    end

    it "assigns @playlist" do
      expect(json["name"]).to eq(Playlist.first.name)
    end

    it "renders the index template" do
      expect(response).to render_template(:show)
    end

    it "response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

end