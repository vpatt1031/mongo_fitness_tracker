const db = require("../models");
const path = require("path");
let aggregate = 0
module.exports = (serverApp) => {

    // Used by api.js 
    serverApp.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workouts => {
            // console.log(workouts)
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    serverApp.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
    })

    serverApp.post("/api/workouts", (req, res) => {
        aggregate=0;
        db.Workout.create({})
            .then(newWorkout => {
                res.json(newWorkout)
            })
    })

    serverApp.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        aggregate += req.body.duration
        db.Workout.update({_id: req.params.id}, {
            $push: {exercises: req.body},
            totalDuration: aggregate
        }).then(dbUpdate => {
            res.json(dbUpdate)
        })
    })

    serverApp.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, `../public/stats.html`));
    });

    serverApp.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, `../public/exercise.html`));
    }); 
    
    
            
    };

    