Rails.application.routes.draw do
  resources :sections


  namespace :ui do
    get 'pages/index'
  end

  resources :posts

  devise_for :users

  namespace :api do
  end

  root controller: 'ui/pages', action: 'index'

  get '*path', controller: 'ui/pages', action: 'index'

end
