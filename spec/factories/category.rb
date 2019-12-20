FactoryBot.define do
  factory :category do
    name { FFaker::Name.unique.name }
    tag { 0 }
  end
end