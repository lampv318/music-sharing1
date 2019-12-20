require 'rails_helper'

RSpec.describe "check routes", type: :routing do
  it "routes get /login to the session controller with action new " do
    expect(get("/login")).to(route_to("sessions#new"))
  end

  it "routes /logout to the session controller with action destroy" do
    expect(delete("/logout")).to(route_to("sessions#destroy"))
  end

  it "routes post /login to the session controller with action create" do
    expect(post("/login")).to(route_to("sessions#create"))
  end

  it "routes root to player controller with action index" do
    expect(get("/")).to(route_to("player#index"))
  end
end