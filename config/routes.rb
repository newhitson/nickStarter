Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :projects, only: [:index, :show, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
