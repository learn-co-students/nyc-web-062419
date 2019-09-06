class User < ApplicationRecord
  has_many :favorite_members
  has_many :members, through: :favorite_members

  validates :username, presence: true, uniqueness: true
  has_secure_password
end
