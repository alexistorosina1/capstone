class User < ApplicationRecord
    has_many :workouts
    
    validates :username, presence: true, uniqueness: true

    has_secure_password
end
