class MusclesController < ApplicationController
    def index 
        muscle = Muscle.all
        render json: muscle
    end

    def show        
        muscle = Muscle.find(params[:id])
        # exercise = muscle.exercises.all
        render json: muscle
    end
end
