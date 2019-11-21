class AttachmentsController < ApplicationController
  before_action :set_attachment, only: :destroy

  def destroy
    @attachment.purge
    respond_to do |format|
      format.html do
        flash[:danger] = "attachment deleted"
        redirect_back fallback_location: root_url
      end
    end
  end

  private
  def set_attachment
    blob = ActiveStorage::Blob.find_signed params[:id]
    @attachment = ActiveStorage::Attachment.find_by blob_id: blob.id
  end
end