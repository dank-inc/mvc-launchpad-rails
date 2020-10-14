# MVC Launchpad

## Docker - Postgresql 12 - Rails 6 - Typescript React - ActionCable - NGINX

boilerplate project for MVPs using MVC

# How To Use

## Setup

- Fork dis!
- (optional) edit `backend/scaffold-my-data.sh`
- add your dev data to `backend/db/seeds.rb`

- run `docker-compose run --rm backend bash`
- run (in container) `./scaffold-my-data`
- run (in container) `rails db:create`
- run (in container) `rails db:migrate`
- run (in container) `rails db:seed`

TODO: generate react forms?

- make your frontend

## Running The Beast!

1. run (in root folder) docker-compose down && docker-compose up
2. go to localhost, see your creation!

NOTE: frontend hot reloading is a pain in the ass in docker so it works _sometimes_.

3. Become Millionaire!

# Stack Details

## Backend

- postgresql
- rails
  - api only
  - jbuilder
  - JWT
  - bcrypt
- actioncable

## Frontend

- React (TSX)
  - antd
  - axios
  - react-router
  - sass
  - ActionCable library (from dank-inc)
  - useGet hook (discount react-query)

## Misc

- nginx
