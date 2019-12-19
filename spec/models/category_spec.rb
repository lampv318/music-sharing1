require "rails_helper"

RSpec.describe Category, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:tag).of_type :integer }
    end

    describe 'association' do
      it { is_expected.to have_many(:song_categories).dependent :destroy }
      it { is_expected.to have_many :songs }
      it { is_expected.to have_many(:album_categories).dependent :destroy }
      it { is_expected.to have_many :albums }
    end
  end

end