var friendsData = require("../data/friends.js")

module.exports = function(app) {
    
    //display the available friends data 
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/questions", function(req, res) {
        
        //total up the scores submitted by the new user
        var new_user_total = 0;

        for(i = 0; i < req.body.scores.length; i++) {
            var e = parseInt(req.body.scores[i]);
            new_user_total += e;
        }
        
        
        var total_difference = [0];
        for (var outer = 0; outer < friendsData.length; outer++) {
            var total = 0;
            for (var inner = 0; inner < friendsData[outer].scores.length; inner++) {
                total += parseInt(friendsData[outer].scores[inner]);
            }
            total_difference[outer] = Math.abs(new_user_total - total);
        }
        //console.log("apiRoutes.js here. this is the 'total difference datatotal_difference \n" + total_difference);

        // loop thru differences, find the lowest diff - thats the match
        var matchFriend = null; 
        var lowest = 100;
        for (var i = 0; i < total_difference.length; i++) {
            if ( total_difference[i] < lowest ) {
                matchFriend = friendsData[i];
            }
        }

        friendsData.push(req.body);
        // return name and picture
        res.json(matchFriend);
      
    });
}