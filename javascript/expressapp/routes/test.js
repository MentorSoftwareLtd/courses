var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('test',
        { title: 'Express',
          name : 'Name' });
});
router.post('/', function(req, res) {

    res.format({
        json: function () {
            res.json({ title: 'Express',
                name : 'Name' });
        }

    });
});


module.exports = router;
