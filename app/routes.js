module.exports = function (router) {

var Asshole = require('./models/asshole');

// BEGIN ASSHOLES
// on routes that end in /bears
// ----------------------------------------------------

router.route('/asshole')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        console.log("in here");
        var asshole = new Asshole();      // create a new instance of the Bear model
        asshole.firstName = req.body.firstName;  // set the bears name (comes from the request)
        asshole.lastName = req.body.lastName;
        asshole.reason = req.body.reason;

        // save the bear and check for errors
        asshole.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Asshole created!' });
        });

    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        console.log("fuck you, asshole");
        Asshole.find(function(err, assholes) {
            if (err)
                res.send(err);

            res.json(assholes);
        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/asshole/:asshole_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    /*.get(function(req, res) {
        Asshole.findById(req.params.asshole_id, function(err, asshole) {
            if (err)
                res.send(err);
            res.json(asshole);
        });
    })*/

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Asshole.findById(req.params.asshole_id, function(err, asshole) {

            if (err)
                res.send(err);

            asshole.firstName = req.body.firstName; // update the asshole's info
            asshole.lastName = req.body.lastName;
            asshole.reason = req.body.reason;

            // save the bear
            asshole.save(function(err) {
                if (err)
                    res.send(err);

                res.json({message: 'Asshole updated!'});
            })

        })
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Asshole.remove({
            _id: req.params.asshole_id
        }, function(err, asshole) {
            if (err)
                res.send(err);

            res.json({ message: 'Asshole Successfully deleted' });
        });
    });
// END ASSHOLES
    
}