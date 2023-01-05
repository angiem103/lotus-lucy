class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorized

  def authorized
    retunr render json:{ error: "Not Authorized" }, status: :unauthorized unless
    session.include? :customer_id
  end

end
