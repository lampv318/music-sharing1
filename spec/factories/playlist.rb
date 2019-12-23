FactoryBot.define do
  factory :playlist do
    name { FFaker::Name.unique.name }
    user_id { FactoryBot.create(:user).id }
  end
end