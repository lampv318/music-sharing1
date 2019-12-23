require "rails_helper"

RSpec.describe Api::AlbumsController, type: "request" do
  describe "GET #index" do
    let!(:albums) { FactoryBot.create_list(:album, 2) }
    before(:each) { get "/api/albums" }

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
    before(:each) { get "/api/albums/#{album.id}" }

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

  describe "should return song of album when categories present " do
    let!(:category) { FactoryBot.create(:category) }
    let!(:album) { FactoryBot.create(:album) }
    let!(:album_category) { FactoryBot.create(:album_category)}

    before { get "/api/categories/1/albums" }

    it "should return success with song" do
      expect(json.first["name"]).to eq(album.name)
    end
  end

  describe "should return song of album when artist present " do
    let!(:artist) { FactoryBot.create(:artist) }
    let!(:album) { FactoryBot.create(:album) }
    let!(:album_artist) { FactoryBot.create(:album_artist)}

    before { get "/api/artists/1/albums" }

    it "should return success with song" do
      expect(json.first["name"]).to eq(album.name)
    end
  end

end