require 'ffaker'

FactoryGirl.define do
  factory :user do
    username { FFaker::HipsterIpsum.words.join(' ') }
    email { FFaker::Internet.email }
    password "password"
    password_confirmation "password"

    factory :admin_user do
        after(:create) {|user| user.add_role(:admin)}
    end
  end
end
