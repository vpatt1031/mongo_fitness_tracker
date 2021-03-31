const db = require("../models")
const path = require("path");

module.exports = (app) => {
// Index 
  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"))
  });  
  // Exercise
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Stats graphs
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
}