require "rails_helper"

RSpec.describe SongCategory, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:song_id).of_type :integer }
      it { is_expected.to have_db_column(:category_id).of_type :integer }
    end

    describe 'association' do
      it { is_expected.to belong_to :category }
      it { is_expected.to belong_to :song }
    end
  end

end