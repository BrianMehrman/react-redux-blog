class Ui::PagesController < ApplicationController
  def index
    @presenter = {
      form: {
        action: ui_pages_index_path
      }.merge(base_form_presenter)
    }
  end
end
