class Character < ApplicationRecord
    belongs_to :race, required: false
    belongs_to :charclass, required: false
end
