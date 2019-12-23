require "rails_helper"

RSpec.describe AlbumArtist, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:album_id).of_type :integer }
      it { is_expected.to have_db_column(:artist_id).of_type :integer }
    end

    describe 'association' do
      it { is_expected.to belong_to :album }
      it { is_expected.to belong_to :artist }
    end
  end

end