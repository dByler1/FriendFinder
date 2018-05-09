var friendsData = require("../data/friends.js")

module.exports = function(app) {
    app.post("/api/questions", function(req, res) {
        friendsData.push(req.body);
        var newScores = []
        for(i = 0; i < req.body.scores.length; i++) {
            var e = parseInt(req.body.scores[i])
            newScores.push(e);
        }
        
        
        

        for (var outer = 0; outer < friendsData.length; outer++) {
            var total = 0;
            for (var inner = 0; inner < friendsData[outer].scores.length; inner++) {
                total += Math.abs(newScores[inner] - friendsData[outer].scores[inner]);
            }
            total_difference[outer] = total;
        }
       
      
    });

    app.get("/api/friendData", function(req, res) {
        res.json(friendsData);
    })
}