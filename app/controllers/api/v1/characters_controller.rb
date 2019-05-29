class Api::V1::CharactersController < ApplicationController
    before_action :find_character, only: [:update]
    def index
      @characters = Character.all
      render json: @characters
    end

    def update
      @character.update(character_params)
      if @character.save
        render json: @character, status: :accepted
      else
        render json: { errors: @character.errors.full_messages }, status: :unprocessible_entity
      end
    end
   
    private

    def character_params
      params.permit(:name, :gender, :race, :class_value, :skill, :inventory, :exp, :strength, :dexterity, :constitution, :wisdom, :charisma, :hitpoints, :level)
    end

    def find_character
      @character = Character.find(params[:id])
    end
end
