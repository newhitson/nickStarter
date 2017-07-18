Rails.application.routes.draw do


  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/create'

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
