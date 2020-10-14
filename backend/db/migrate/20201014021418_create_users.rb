class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    # NOTE: if you edit this file, remember to change the presenters and the tests :)
    create_table :users, id: :uuid do |t|
      t.string :username
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
