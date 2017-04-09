class PostsController < ApplicationController
  load_and_authorize_resource

  def index
    render json: paginated_posts
  end

  def show
    render json: @post
  end

  def create
    if @post.save
      render json: @post
    else
      render json: @post.errors
    end
  end

  def update
    if @post.update_attributes!(post_params)
      render json: @post
    else
      render json: @post.errors
    end
  end

  def destroy
    if @post.destroy
      render json: "Post destroyed"
    else
      render json: @post.errors
    end
  end

  private

  def paginated_posts
    @posts.paginate(page: page, per_page: per_page)
  end

  def page
    params.permit(:page)[:page] || 1
  end

  def per_page
    params.permit(:per_page)[:per_page] || 10
  end

  def post_params
    params.require(:post).permit(:title, :body, :public)
  end
end
