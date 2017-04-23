json.array!(@sections) do |section|
  json.extract! section, :id, :body, :content_type, :post_id
  json.url section_url(section, format: :json)
end
