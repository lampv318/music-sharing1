require "rails_helper"

RSpec.describe Api::SessionsController do
  describe "#DELETE destroy" do
    before do
      @user = FactoryBot.create :user
      log_in @user
      delete :destroy, params: {id: @user.id}
    end

    it "return current_user = nil when logout" do
      expect(assigns(:current_user)).to eq(nil)
    end

    it "return success when logout" do
      expect(json["status"]).to eq(200)
    end

    it "return logged_out = true when logout" do
      expect(json["logged_out"]).to eq(true)
    end
  end
end