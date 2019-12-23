require 'rails_helper'

RSpec.describe Api::SearchController, type: "request" do
  let!(:songs) { FactoryBot.create_list(:song, 2) }

  describe "GET #index" do
    before { get '/api/search/' }

    it "should be success" do
      expect(response).to have_http_status(200)
    end

    it "should render index page" do
      expect(response).to render_template(:index)
    end

    it "should response json" do
      expect(response.content_type).to eq "application/json; charset=utf-8"
      expect(json).to have_key('artists')
      expect(json).to have_key('songs')
      expect(json).to have_key('albums')
    end
  end

  describe "GET #index when params is 'song' " do
    before { get '/api/search/', params: {q: "song"} }

    it "should return count of songs is 2" do
      expect(json["songs"].count).to eq(2)
    end

    it "should return count of artists is 0" do
      expect(json["artists"].count).to eq(0)
    end

    it "should return count of albums is 0" do
      expect(json["albums"].count).to eq(0)
    end
  end

  describe "GET #index when params is 'artist' " do
    before { get '/api/search/', params: {q: "artist"} }

    it "should return count of songs is 2" do
      expect(json["songs"].count).to eq(2)
    end

    it "should return count of artists is 2" do
      expect(json["artists"].count).to eq(2)
    end

    it "should return count of albums is 0" do
      expect(json["albums"].count).to eq(0)
    end
  end

  describe "GET #index when params is 'album' " do
    before { get '/api/search/', params: {q: "album"} }

    it "should return count of songs is 2" do
      expect(json["songs"].count).to eq(2)
    end

    it "should return count of artists is 0" do
      expect(json["artists"].count).to eq(0)
    end

    it "should return count of albums is 2" do
      expect(json["albums"].count).to eq(2)
    end
  end

  describe "GET #index when params is 'name test' " do
    before { get '/api/search/', params: {q: "name"} }

    it "should return count of songs is 2" do
      expect(json["songs"].count).to eq(2)
    end

    it "should return count of artists is 0" do
      expect(json["artists"].count).to eq(2)
    end

    it "should return count of albums is 2" do
      expect(json["albums"].count).to eq(2)
    end
  end
end