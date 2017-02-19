require 'rails_helper'

describe User do
  let(:user) { build(:user) }

  it "has an access_token" do 
    expect(user.access_token).not_to be_present
    user.save
    expect(user.access_token).to be_present
  end
end
