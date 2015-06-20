var express = require('express');
var router = express.Router();
var contactsdb=[]
var i=0;
/* GET contacts */
router.get('/:id', function(req, res, next) {
	//res.send("http yyyy");
	var id1 = req.params.id;
	res.json(contactsdb[parseInt(id1)]);
	res.statusCode(200);
});

router.post('/', function(req, res, next) {
	var obj= new Object();
	obj.firstName=req.body.firstName;
	obj.lastName=req.body.lastName;
	obj.phone=req.body.phone;
	contactsdb[i]=obj;
	res.send(''+i);
	res.statusCode(200);+
     i++;
});

router.put('/:id', function(req, res, next) {
	contactsdb[req.params.id].firstName=req.body.firstName;
	res.send(contactsdb[req.params.id]);
  console.log(req.body);

});

module.exports = router;
