# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  url_image       :string
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
validates :username, :email, :password_digest, :session_token, presence: true
validates :username, :email, uniqueness: true
validates :password, length: { minimum: 6 }, allow_nil: :true

after_initialize :ensure_session_token

attr_reader :password

def password= password
  self.password_digest = BCrypt::Password.create(password)
  @password = password
end

def self.find_by_credentials username, password
  user = User.find_by(username: username)
  return nil unless user
  user.password_is?(password) ? user : nil
end

def password_is? password
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def reset_session_token!
  self.session_token = new_session_token
  self.save
  self.session_token
end

private

def ensure_session_token
  self.session_token ||= new_session_token
end

def new_session_token
  SecureRandom.base64
end

end
