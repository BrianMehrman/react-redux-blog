source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'

gem 'pg'
gem 'thin'
gem "font-awesome-rails"
gem 'font-awesome-sass'
gem 'devise'
gem 'cancancan'
gem 'rolify'
gem "browserify-rails"

group :development do
  gem "rubocop", require: false
  gem "better_errors"
  gem "binding_of_caller"
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

group :development, :test do
  gem 'pry'
  gem 'requirejs-rails'
  gem 'metric_fu'
  gem 'simplecov', require: false
  gem 'simplecov-rcov', require: false
  gem 'railroady'
  gem 'guard'
  gem 'guard-rspec', require: false
  gem 'guard-bundler'
end

gem 'bootstrap-sass', '~>3.3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'therubyracer', platforms: :ruby
gem 'react-rails', '~> 1.6.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'capistrano'
gem 'paper_trail', '~> 4.0.0.beta'
# gem 'paperclip'
gem 'rmagick'
gem 'carrierwave'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  gem 'ffaker'
  gem 'faker'
  gem 'factory_girl_rails'
  gem "rspec", ">= 1.2.7"
  gem "rspec-rails", ">= 1.2.7"
  gem 'cucumber-rails', :require => false
  gem "capybara", :group => :test
  gem "email_spec"
  # database_cleaner is not required, but highly recommended
  gem 'database_cleaner'
  gem 'webrat'
  gem "vcr"
  gem 'webmock', "1.15.2"
  gem 'jasmine'
  gem 'guard-jasmine', :git => 'https://github.com/guard/guard-jasmine', :branch => 'jasmine-2'
end
