require "rails_helper"

RSpec.describe Artist, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:info).of_type :string }
      it { is_expected.to have_db_column(:picture).of_type :string }
      it { is_expected.to have_db_column(:picture_in_ws).of_type :string }
    end

    describe 'association' do
      it { is_expected.to have_many(:user_artists).dependent :destroy }
      it { is_expected.to have_many :users }
      it { is_expected.to have_many(:songs).dependent :destroy }
      it { is_expected.to have_many(:album_artists).dependent :destroy }
      it { is_expected.to have_many :albums }
    end
  end

end