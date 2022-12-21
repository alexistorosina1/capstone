class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :exercise_completed
      t.integer :sets
      t.integer :reps
      t.integer :time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
