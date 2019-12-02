source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.5"

gem "rails", "~> 6.0.0"
gem "puma", "~> 3.11"
gem "sass-rails", "~> 5"
gem "webpacker", "~> 4.0"
gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.7"
gem "streamio-ffmpeg"
gem "bootsnap", ">= 1.4.2", require: false
gem "activeadmin"
gem "jquery-rails"
gem "materialize-sass"
gem "best_in_place"
gem "coffee-rails"
gem "font-awesome-rails"
gem "font-awesome-sass"
gem "toastr-rails"
gem "carrierwave"
gem "ransack"
gem "config"
gem "bcrypt"
gem "figaro"
gem "cloudinary"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "sqlite3", "~> 1.4"
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "listen", ">= 3.0.5 ", "< 3.2"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  gem "webdrivers"
end

group :production do
  gem 'pg', '0.20.0'
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
