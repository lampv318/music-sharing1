FactoryBot.define do
  factory :user do
    name { FFaker::Name.unique.name }
    email { FFaker::Internet.email }
    password { FFaker::InternetSE.password }
  end
end