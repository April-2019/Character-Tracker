Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :characters, :charclasses, :races

      # custom handler
      post '/characters', to: 'characters#create'
    end
  end
end
