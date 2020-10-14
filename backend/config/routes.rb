Rails.application.routes.draw do
  post 'login', to: 'authentication#login'
end
