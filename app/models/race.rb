class Race < ApplicationRecord
    has_many :characters
    has_many :charclasses, through: :characters
end
