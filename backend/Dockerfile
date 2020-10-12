FROM ruby:2.7.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn
RUN mkdir /usr/src/backend
WORKDIR /usr/src/backend
COPY Gemfile /usr/src/backend/Gemfile
COPY Gemfile.lock /usr/src/backend/Gemfile.lock
RUN bundle install
RUN rails webpacker:install

COPY . /usr/src/backend

EXPOSE 3000

# 6379 for redis server (actioncable)
EXPOSE 6379

CMD ["rails", "server", "-b", "0.0.0.0"]
