FactoryBot.define do
  factory :song do
    name { "test name song" }
    album_id { FactoryBot.create(:album).id }
    artist_id { FactoryBot.create(:artist).id }
  end
end