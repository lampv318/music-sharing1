require "rails_helper"

RSpec.describe "check routes song api", type: :routing do
  it "routes get /api/songs/1 to the Api::SongsController with action show" do
    expect(GET: "api/songs/1").to route_to(controller: 'api/songs', action: 'show', id: "1", format: 'json')
  end

  it "routes get /api/songs to the Api::SongsController with action index" do
    expect(GET: "api/songs").to route_to(controller: 'api/songs', action: 'index', format: 'json')
  end

  it "not POST method in routes /api/songs" do
    expect(POST: "api/songs").not_to route_to(controller: 'api/songs')
  end

  it "not DELETE method in routes /api/songs" do
    expect(DELETE: "api/songs").not_to route_to(controller: 'api/songs')
  end
end