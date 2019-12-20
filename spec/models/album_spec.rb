require "rails_helper"

RSpec.describe Album, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:year).of_type :integer }
      it { is_expected.to have_db_column(:disc_no).of_type :integer }
      it { is_expected.to have_db_column(:picture).of_type :string }
      it { is_expected.to have_db_column(:picture_in_ws).of_type :string }
    end

    describe 'association' do
      it { is_expected.to have_many(:songs).dependent :destroy }
      it { is_expected.to have_many(:album_artists).dependent :destroy }
      it { is_expected.to have_many :artists }
      it { is_expected.to have_many(:album_categories).dependent :destroy }
      it { is_expected.to have_many :categories }
    end
  end

end