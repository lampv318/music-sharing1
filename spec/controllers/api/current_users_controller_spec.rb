require "rails_helper"

RSpec.describe Api::CurrentUsersController do
  before do
    @user = FactoryBot.create :user
    log_in @user
  end

  describe "#GET index" do

    before(:each) { get :index, format: "json" }

    it "return current_user is @user" do
      expect(current_user).to eq(@user)
    end
  end
end