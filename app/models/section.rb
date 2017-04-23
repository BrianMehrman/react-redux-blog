class Section < ActiveRecord::Base
  enum content_type: [ :default, :feature ]

  belongs_to :post
end
