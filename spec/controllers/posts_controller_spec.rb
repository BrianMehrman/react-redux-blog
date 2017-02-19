require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  let(:user) { create(:admin_user) }
  let(:body) { JSON.parse(response.body) }
  let!(:post1) { create(:post) }
  let!(:post2) { create(:post, public: true) }

  before(:each) do
    @request.env["devise.mapping"] = Devise.mappings[:admin]
    user.confirm
    sign_in user
  end

  describe 'GET #index' do
    before { get :index, format: :json }

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    describe "as an admin user"  do
      it "returns all posts" do
        expect(body.size).to  eq(2)
      end
    end

    describe "as a non admin user" do
      let(:user) { create(:user) }

      it "returns only posts that are public" do
        expect(body.size).to  eq(1)
      end
    end
  end

  describe "GET #show" do
    before(:each) do
      get :show, id: post1.id
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns the post" do
      expect(body['title']).to eq(post1.title)
    end
  end

  describe "GET #create" do
    before(:each) do
      get :create, post: { title: "abc", body: "something" }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns the created post" do
      expect(body["title"]).to eq("abc")
      expect(body["body"]).to eq("something")
    end
  end

  describe "GET #update" do
    before(:each) do
      get :update, id: post1.id, post: { title: "changed" }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "updates the post" do
      expect(body["title"]).to eq("changed")
    end
  end

  describe "GET #destroy" do
    it "returns http success" do
      get :destroy, id: post1.id
      expect(response).to have_http_status(:success)
    end

    it "removes the post from the database" do
      expect {
        get :destroy, id: post1.id
      }.to change {
        Post.count
      }.by(-1)
    end

    describe 'as a non admin user' do
      let(:user) { create(:user) }

      it "returns 401" do
        expect{
          get :destroy, id: post1.id
        }.to raise_error(CanCan::AccessDenied)
      end
    end
  end

end
