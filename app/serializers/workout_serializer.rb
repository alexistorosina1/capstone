class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :exercise_completed, :sets, :reps, :time
  has_one :user
end
