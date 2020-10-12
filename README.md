# MVC Launchpad

## Docker - Postgresql 12 - Rails 6 - Typescript React - ActionCable - NGINX

boilerplate project for MVPs using MVC

# How To Use

- Fork dis!
- create database schema in `backend/schema.yml` (make sure you follow the guidelines in the file, check your spleling, I'm not gonna baby you if you make mistakes)

- run `docker-compose run --rm backend bash`
- run (in container) `rails app:scaffold:all`
- run (in container) `rails db:create`
- run (in container) `rails db:migrate`

# Stack Details

## Backend

- postgresql
- rails
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
