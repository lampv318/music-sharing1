require 'rails_helper'

RSpec.describe User, type: :model do

  context 'database' do
    describe 'check column' do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:email).of_type :string }
      it { is_expected.to have_db_column(:password_digest).of_type :string }
    end

    describe 'association' do
      it { is_expected.to have_many(:user_artists).dependent :destroy }
      it { is_expected.to have_many :artists }
      it { is_expected.to have_many(:playlists).dependent :destroy }
    end
  end

end