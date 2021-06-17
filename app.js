const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var fs = require('fs')
app.use(express.static('public'))

app.use(express.urlencoded({
  extended: true
}));

app.post('/submit-form',jsonParser ,(req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const housenumber = req.body.housenumber;
  const postcode = req.body.postcode;
  const cardnumber = req.body.cardnumber;
  const age = req.body.age;
  const date = req.body.date;
  const date2 = req.body.date2;

  var user = {name: name, lastname: lastname, email: email, phonenumber: phonenumber, housenumber: housenumber, postcode: postcode, cardnumber: cardnumber, age: age, date: date, date2: date2};
  const users = require(__dirname+'/users.json');
  fs.readFile(__dirname+'/users.json', (err, data) => {
      if (err) throw err;
      var json = JSON.parse(data);
      json.push(user);
      json = JSON.stringify(json);
      fs.writeFile(__dirname+'/users.json', json, (err) => {
        if (err) throw err;
        var timeL = time.toLowerCase();
        var time2L = time2.toLowerCase();
        res.send(name +' Your hotel has been booked for '+ date +' until the ' + date2);
      });
  });
});

app.listen(process.env.port || 3000);
console.log('Port 3000');
