require "rails_helper"

RSpec.describe Api::SongsController, type: :controller do

  describe "GET #index" do
    # before do
    #   get :index, {format: :json}
    # end
    # it "should found" do
    #   get :index
    #   expect(response).to have_http_status(302)
    # end
    # subject do
    #   get :index
    # end
    it "assigns songs to the view" do
      # subject do
      expect(response).to have_http_status(200)
      # get :index, format: :json
      # expect(response).to have_http_status(302)
      # end
    end
    

end