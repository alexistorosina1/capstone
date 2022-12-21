class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :exercise_completed, :sets, :reps, :time, :created_at
  has_one :user
end
