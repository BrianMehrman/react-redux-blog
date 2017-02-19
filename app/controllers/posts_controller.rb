class PostsController < ApplicationController
  load_and_authorize_resource

  def index
    render json: filtered_posts
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

  def filtered_posts
    limit > 0 ? @posts[0..limit-1] : @posts
  end

  def limit
    params.permit(:limit)[:limit]&.to_i
  end

  def post_params
    params.require(:post).permit(:title, :body, :public)
  end
end
