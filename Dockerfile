FROM ruby:2.6.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs ntp yarn

RUN mkdir /music-sharing
WORKDIR /music-sharing

COPY Gemfile Gemfile.lock package.json yarn.lock ./

RUN gem install bundler
RUN bundle install --without production

COPY . /music-sharing

