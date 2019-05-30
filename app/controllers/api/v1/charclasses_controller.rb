class Api::V1::CharclassesController < ApplicationController
    before_action :find_charclass, only: [:update, :show]
    def index
      @charclasses = Charclass.all
      render json: @charclasses
    end

    def show
      render json: @charclass
    end

    def update
      @charclass.update(race_params)
      if @charclass.save
        render json: @charclass, status: :accepted
      else
        render json: { errors: @charclass.errors.full_messages }, status: :unprocessible_entity
      end
    end

    private

    def charclass_params
      params.permit(:names)
    end

    def find_charclass
      @charclass = Charclass.find(params[:id])
    end
end
