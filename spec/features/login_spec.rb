require 'rails_helper'

feature "Login" do
  scenario "with correct details" do
    create(:user, email: "test@test.com", password: "password")

    visit "/login"
    expect(current_path).to eq login_path
    expect(page).to have_css("h4", text: "Log in")
    expect(page).to have_button("Log in")
    expect(page).to have_content("Email")
    expect(page).to have_field("Remember me")
    expect(page).to have_unchecked_field("Remember me")

    login("test@test.com", "password")

    expect(current_path).to eq admin_root_path
    expect(page).to have_content("Dashboard")
  end

  scenario "with incorrect details" do
    create(:user, email: "test@test.com", password: "password")

    visit "/login"
    expect(current_path).to eq login_path
    expect(page).to have_css("h4", text: "Log in")
    expect(page).to have_button("Log in")
    expect(page).to have_content("Email")
    expect(page).to have_field("Remember me")
    expect(page).to have_unchecked_field("Remember me")

    login("t@test.com", "password")

    expect(current_path).to eq login_path
    expect(page).not_to have_content("Dashboard")
    expect(page).to have_content("Log in")
  end

  private

  def login(email, password)
    fill_in "Email", with: email
    fill_in "Password", with: password
    click_button "Log in"
  end
end
