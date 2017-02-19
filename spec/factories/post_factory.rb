require 'ffaker'

FactoryGirl.define do
  factory :post do
    title { FFaker::HipsterIpsum.words.join(' ') }
    body { FFaker::HipsterIpsum.paragraphs(5).join("\n") }
    author { create(:user) }
  end
end
