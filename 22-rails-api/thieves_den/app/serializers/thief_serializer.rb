class ThiefSerializer < ActiveModel::Serializer
  attributes :id, :name, :code_name, :specialty, :score

  has_many :marks
end
