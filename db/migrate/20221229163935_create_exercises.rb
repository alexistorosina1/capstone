class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :video
      t.string :instructions
      t.references :muscle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
