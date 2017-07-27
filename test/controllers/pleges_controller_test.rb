require 'test_helper'

class PlegesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get pleges_create_url
    assert_response :success
  end

end
