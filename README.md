# FriendFinder

This is a Node/Express server with HTML and API routes and a database file. 

The app asks the user for a name and an image.

![](/images/friendRequiredInputs.png)

The user responds to several survey questions designed to specifically measure personality. 

![](/images/friendQuestions.png)

When the user clicks "Submit", the inputs are gathered, sent to the post req, and compared to the 'database' of friends. The friend with the lowest difference in score total is returned. 

A model pops up showing the 'Friends' name and image.

![](/images/friendFinder.png)

And that's it! A straightforward exercise in using express to provide routing services in a node app. 