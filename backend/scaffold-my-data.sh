# you can use the schema template, or edit this file with your schemas, and you are good to go!
# all scaffolds include id and timestamps

rails g scaffold users username:string name:string email:string password:string thumbs:integer wins:integer
rails g scaffold chats user_id:string jam_id:string message:string