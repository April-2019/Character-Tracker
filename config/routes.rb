Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :characters, :charclasses, :races,  only: [:index, :update]
    end
  end
end
