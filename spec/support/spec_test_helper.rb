module SpecTestHelper
  def log_in user
    request.session[:user_id] = user.id
  end

  def current_user
    User.find_by id: request.session[:user_id]
  end
end
