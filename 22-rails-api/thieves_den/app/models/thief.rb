class Thief < ApplicationRecord
  has_many :marks
  has_many :artifacts, through: :marks
end
