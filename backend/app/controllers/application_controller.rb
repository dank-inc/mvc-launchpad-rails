class ApplicationController < ActionController::API
  def get_logged_in_user
    header = request.headers['Authorization']&.split(' ')&.last
    begin 
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
      puts "SETTING CURRENT USER => #{@current_user}"
    rescue
      @current_user = nil
      puts "NO CURRENT USER"
    end
  end

  def authorize_request
    header = request.headers['Authorization']&.split(' ')&.last

    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound =>  e
      render json: { errors: e.message }, status: :unauthorized 
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
