class Post < ActiveRecord::Base
  include ActiveModel::Serializers::JSON


  belongs_to :author, class_name: "User"
  has_many :sections

  def attributes
    { author_id: nil, body: nil, title: nil, id: nil, public: nil, sections: [] }
  end

  # author

  # sections are pieces of a blog post
  # a section can be an image, a text area, or a feature
  # features are areas that can have some text with an image behind it.


end
