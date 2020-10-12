# MVC Launchpad

## Docker - Postgresql 12 - Rails 6 - Typescript React - ActionCable - NGINX

boilerplate project for MVPs using MVC

# How To Use

- Fork dis!
- (optional) edit `backend/scaffold-my-data.sh`
- add your dev data to `backend/db/seeds.rb`

- run `docker-compose run --rm backend bash`
- run (in container) `./scaffold-my-data`
- run (in container) `rails db:create`
- run (in container) `rails db:migrate`
- run (in container) `rails db:seed`

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

- React
  - Typescript
  - ActionCable library (from dank-inc)
  - useGet library (from dank-inc)

## Devops

- nginx
