class Rapper < ApplicationRecord
    has_many :songs, :dependent => :delete_all
    #this built in validation validates this attribute 
    validates :name, presence: true
    validates :name, uniqueness: true
    #validate this instace with this method
    validate :validate_age
    
    def validate_age
        if self.age >= 40
            errors.add(:age, "get a new hobby")
        end
    
    end
end
