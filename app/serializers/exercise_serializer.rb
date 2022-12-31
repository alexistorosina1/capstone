class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :video, :instructions
  has_one :muscle
end
