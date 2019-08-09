class Artifact < ApplicationRecord
  has_many :marks
  has_many :thiefs, through: :marks
end
