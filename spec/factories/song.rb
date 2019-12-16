FactoryBot.define do
  factory :song do
    name {"name song test"}
    album_id {FactoryBot.create(:album).id}
    artist_id {FactoryBot.create(:artist).id}
  end
end