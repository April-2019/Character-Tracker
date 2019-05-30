class Api::V1::CharactersController < ApplicationController
    before_action :find_character, only: [:update, :show, :delete]
    def index
      @characters = Character.all
      render json: @characters
    end

    def create 
      
      @character = Character.create(character_params)
      render json: @character, status: 201
    end

    def show
      render json: @character
    end

    def update
      @character.update(character_params)
      if @character.save
        render json: @character, status: :accepted
      else
        render json: { errors: @character.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def delete
      @character.destroy
    end
   
    private

    def character_params
      params.permit(:name, :gender, :race_id, :class_value, :skill, :inventory, :exp, :strength, :intelligence, :dexterity, :constitution, :wisdom, :charisma, :hitpoints, :level, :image_url)
    end

    def find_character
      @character = Character.find(params[:id])
    end
end
