# README

This is a Tracker for various Character sheets used in tabletop gaming. A user can use this particular application
to track stats, levels, gold, inventory, skills, and is open ended enough to be able to add extra info depending 
on the specific needs of the game

Currently, this program does not work on Windows, and only currently works on Mac OSX. This should also be able to
run on Linux operating systems, but it has not been tested. 



##############
Getting started:
First, after cloning down the program, use your terminal to navigate into the Character-Tracker folder and type the following
into your terminal in this order:
  "rails db: migrate"
  "rails db: seed" 
  "rails s"

This creates the SQLite database and populates the DB with some information pre- made.
As well, this starts up a local database in SLQlite on http://localhost:3000. 
If you find that the terminal is spitting out errors when you run "rails db:seed" then do not continue, there is possibly
something wrong with the seed file or the database migrations. Check those files before running "rails s"


Finally, change directory into the frontend folder (should just be cd frontend) and run the following commands: 
  "npm install"
  "npm start"
  you could also run these in sequence with "npm install && npm start" 
If all goes well, the program will load up in your default browser (Chrome or Firefox is reccomended)
When you run "npm start" it will probably ask you if you want to run it on another port, since localhost:3000 is
in use. Go ahead and type in y and hit enter, this should start the program on http://localhost:3001 

From here, you can browse our characters from the seed, or make your own character! The plus and minus button
for health will NOT persist upon refresh, and neither will notes. To save any progress (level ups/downs, 
gaining equipment, etc) press edit to edit what you need to. For your image, any image URL should work (even animated
.gif images!) so be creative!


