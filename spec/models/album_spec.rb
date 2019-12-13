require "rails_helper"

RSpec.describe Album, type: :model do

  context "database" do
    describe "check column" do
      it {is_expected.to have_db_column(:name).of_type :string}
      it {is_expected.to have_db_column(:year).of_type :integer}
      it {is_expected.to have_db_column(:disc_no).of_type :integer}
      it {is_expected.to have_db_column(:picture).of_type :string}
      it {is_expected.to have_db_column(:picture_in_ws).of_type :string}
    end
  end

end