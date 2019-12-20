require 'rails_helper'

feature "Home page" do

  scenario "visit" do
    visit "/"
    expect(page).to have_title "Hyper Top1"
    # expect(page).to have_link "player"
    # expect(page).to have_css ".header"
    # expect(page).to have_content "MAIN"
  end

end