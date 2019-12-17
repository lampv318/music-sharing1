require "rails_helper"

RSpec.describe Category, type: :model do

  context "database" do
    describe "check column" do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:tag).of_type :integer }
    end
  end

end