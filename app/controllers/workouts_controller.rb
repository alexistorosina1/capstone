class WorkoutsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        workouts = user.workouts.all
        render json: workouts
    end

    def show
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.find(session[:user_id])
        render json: workout
    end

    def create
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.create!(workout_params.merge(:user_id => user.id))
        render json: workout, status: :created
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        workout = user.workouts.find(params[:id])
        workout.destroy
        head :no_content
    end


    private

    def workout_params
        params.permit(:exercise_completed, :sets, :reps, :time, :user_id, :date)
    end
end
