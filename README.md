# MVC Launchpad

## Docker - Postgresql 12 - Rails 6 - Typescript React - ActionCable - NGINX

boilerplate project for MVC MVPs

# TODO LIST

### now-ish

- switch moment to https://www.npmjs.com/package/luxon or date-fns

- nginx: add headers to api proxy
- nginx: add react hot reload proxy
- web/nginx: create different route for actioncable

### Data Model Plan and Exec

- generate react forms & routes (agnostic maybe) / some sort of admin panel a-la django
- add administrage gem in favor above todo - would be cool to roll it up in he frontend, but that is a good first iteration
- move schema to base directory
- create script to generate scaffold commands

### Misc

- host live version somewhere

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

- make your frontend

## Running The Beast!

1. run (in root folder) docker-compose down && docker-compose up
2. go to localhost, see your creation!
3. Become Millionaire!

## Issues

- hot reloading does not work becasue nginx needs an addtl config

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
