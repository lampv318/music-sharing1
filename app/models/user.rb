class User < ApplicationRecord
  VALID_EMAIL_REGEX = Settings.validate.valid_email
  USER_PARAMS = %i(name email).freeze

  has_many :user_artists, dependent: :destroy
  has_many :artists, through: :user_artists
  has_many :playlists, dependent: :destroy

  validates :email, presence: true, format: {with: VALID_EMAIL_REGEX}, uniqueness: {case_sensitive: false}
end
