require "rails_helper"

RSpec.describe Playlist, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:user_id).of_type :integer }
    end

    describe 'association' do
      it { is_expected.to belong_to :user }
      it { is_expected.to have_many(:playlist_songs).dependent :destroy }
      it { is_expected.to have_many :songs }
    end
  end

end