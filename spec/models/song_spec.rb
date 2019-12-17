require 'rails_helper'

RSpec.describe Song, type: :model do

  context 'database' do
    describe 'check column' do
      it { is_expected.to have_db_column(:name).of_type :string }
      it { is_expected.to have_db_column(:artist_id).of_type :integer }
      it { is_expected.to have_db_column(:album_id).of_type :integer }
      it { is_expected.to have_db_column(:year).of_type :integer }
      it { is_expected.to have_db_column(:track_no).of_type :integer }
      it { is_expected.to have_db_column(:duration).of_type :float }
      it { is_expected.to have_db_column(:bit_rate).of_type :integer }
      it { is_expected.to have_db_column(:save_file).of_type :string }
      it { is_expected.to have_db_column(:file_in_ws).of_type :string }
    end
  end

  context 'association' do
    it { is_expected.to belong_to :artist }
    it { is_expected.to belong_to :album }
    it { is_expected.to have_many(:playlist_songs).dependent :destroy }
    it { is_expected.to have_many :playlists }
    it { is_expected.to have_many(:song_categories).dependent :destroy }
    it { is_expected.to have_many :categories }
  end

end