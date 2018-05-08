
module.exports = function(app) {
    app.post("/api/questions", function(req, res) {

        console.log(req.body.userInfo);
        console.log(req.body.questionAnswers);
    });
}