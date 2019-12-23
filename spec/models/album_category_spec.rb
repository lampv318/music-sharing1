require "rails_helper"

RSpec.describe AlbumCategory, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:album_id).of_type :integer }
      it { is_expected.to have_db_column(:category_id).of_type :integer }
    end

    describe 'association' do
      it { is_expected.to belong_to :album }
      it { is_expected.to belong_to :category }
    end
  end

end