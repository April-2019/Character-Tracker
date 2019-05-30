class Api::V1::RacesController < ApplicationController
    before_action :find_race, only: [:update, :show]
    def index
      @races = Race.all
      render json: @races
    end

    def show
      render json: @race
    end

    def update
      @race.update(race_params)
      if @race.save
        render json: @race, status: :accepted
      else
        render json: { errors: @race.errors.full_messages }, status: :unprocessible_entity
      end
    end

    private

    def race_params
      params.permit(:names)
    end

    def find_race
      @race = Race.find(params[:id])
    end
end
