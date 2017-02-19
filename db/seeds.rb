# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

User.create(
  username: 'Admin',
  email: 'admin@test.test',
  password: 'password',
  password_confirmation: 'password'
)

author = User.create(
  username: 'Captain Shakespear',
  email: 'thecaptain@shakespear.io',
  password: 'password',
  password_confirmation: 'password'
)
# PLANETS = [Faker::StarWars, Faker::Space]
QUOTES = [Faker::HarryPotter, Faker::StarWars, Faker::Friends, Faker::TwinPeaks]
100.times do |i|
  Post.create({
    title: QUOTES[i%QUOTES.size].quote,
    body: Faker::Hipster.paragraphs(4).join("\r"),
    public: (i % 3) != 0, # 1/3 of post will private
    author: author
  })
end

