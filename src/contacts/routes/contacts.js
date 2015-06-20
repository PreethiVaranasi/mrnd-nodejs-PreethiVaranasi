var express = require('express');
var router = express.Router();
var i=0;
var contactsdb=[];
var path="../../data/" + i + "-Contact.json";
/* GET contacts */
router.get('/:id', function(req, res, next) {
	//res.send("http yyyy");
	var id1 = req.params.id;
	res.json(contactsdb[parseInt(id1)]);
});

router.post('/', function(req, res, next) {
	var fs=require('fs');
	var obj= new Object();
	obj.firstName=req.body.firstName;
	obj.lastName=req.body.lastName;
	obj.phone=req.body.phone;
	obj.msgs=[];
	contactsdb[i]=obj;
	var id = contactsdb.length-1;
	fs.writeFileSync("../../data/"+id+"-Contact.json",JSON.stringify(obj));
	res.send(id+'');
     i++;
});

router.put('/:id', function(req, res, next) {
	var fs=require('fs');
	//var obj=new Object();
	var path2="../../data/" + req.params.id + "-Contact.json";
	var obj = JSON.parse(fs.readFileSync(path2));
    obj.firstName=req.body.firstName;
    fs.writeFileSync(path2,JSON.stringify(obj));
    contactsdb[+(req.params.id)].firstName=req.body.firstName;
    console.log(contactsdb[+(req.params.id)].firstName);
	res.send(contactsdb[+(req.params.id)]);
});
router.post('/:id/msg', function(req, res, next) {
	var obj1,m_id;
	obj1=contactsdb[req.params.id];
	m_id=obj1.msgs.push(req.body.msg);
	m_id--;
	res.send(''+(parseInt(m_id)));
});
router.get('/:id/msg/:m_id', function(req, res, next) {
	//res.send("http yyyy");
	var id1 = req.params.id;
	var m_id1=req.params.m_id;
	res.json(contactsdb[parseInt(id1)].msgs[parseInt(m_id1)]);
});

module.exports = router;
