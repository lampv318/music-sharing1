FactoryBot.define do
  factory :playlist_song do
    playlist_id { FactoryBot.create(:playlist).id}
    song_id { FactoryBot.create(:song).id}
  end
end