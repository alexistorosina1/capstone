class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
