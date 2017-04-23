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

feature_image = "http://lorempixel.com/g/800/200/"


def new_section(quoter)
  is_feature = (rand <= 0.25)
  body = is_feature ? Faker::Hipster.paragraphs(4).join("\r") : quoter.quote
  Section.create({
      body: body,
      content_type: is_feature ? :feature : :default
    })
end

def generate_sections(quoter)
  # create list of sections
  sections = []
  # number of sections
  number_of_sections = rand(3..12)
  # section pattern
  number_of_sections.times do |i|
    sections << new_section(quoter)
  end
  sections
end

# PLANETS = [Faker::StarWars, Faker::Space]
QUOTES = [Faker::HarryPotter, Faker::StarWars, Faker::Friends, Faker::TwinPeaks]
100.times do |i|
  quoter = QUOTES[i%QUOTES.size]
  sections = generate_sections(quoter)

  Post.create({
    title: quoter.quote,
    body: Faker::Hipster.paragraphs(4).join("\r"),
    public: (i % 3) != 0, # 1/3 of post will private
    sections: sections,
    author: author
  })
end


# TODO:
# 1) Add rich text editor
# 2) create images for posts
#    http://lorempixel.com/g/400/200/
#    a) section break
#    b) inline
