class ApplicationController < ActionController::Base
  include SessionsHelper
  # before_action :authenticate_admin_user!

  def authenticate_admin_user!
    if current_user.nil?
      redirect_to login_url
    end
  end
end
