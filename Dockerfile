FROM ruby:2.6.5

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -qq -y build-essential nodejs yarn \
    libpq-dev

RUN mkdir /music-sharing
COPY . /music-sharing
WORKDIR /music-sharing
COPY Gemfile Gemfile.lock package.json yarn.lock ./

RUN gem install bundler
RUN bundle install --without production

RUN npm rebuild node-sass --force
RUN yarn install
