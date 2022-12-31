class ExercisesController < ApplicationController
    def index
        # user = User.find_by(id: session[:user_id])
        # exercises = user.exercises.all
        exercises = Exercise.all
        render json: exercises
    end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     exercise = user.exercises.find(session[:user_id])
    #     render json: exercise
    # end
end
