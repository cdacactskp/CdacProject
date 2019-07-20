const mysql = require('mysql');
const express = require('express');
var app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

const cors = require('cors');

//---------------cross-orgin request---------//
const allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors()); //for access to all
// app.use(cors({
//     origin:function(origin,callback){
//         if(!origin) return callback(null,true);
//         if(allowedOrigins.indexOf(origin)===-1){
//             var msg="the cors policy for this site does not allow access to specified origin";
//             return callback(new Error(msg),false);
//         }
//         return callback(null,true);
//     }
// }));
//----------------------------cross-origin---------//



//----------------------------validate---------//
//const valfunctions=require('./validators/validate');
//----------------------------validate---------//


app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'carbejdo'
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('Db connection success');
  else
    console.log('Db connection not success \n Error :' + JSON.stringify(err, undefined, 2));
});

//app.listen(3000,()=>console.log('express server is running at port:3000'));
app.listen(process.env.PORT, () => console.log('express server is running at port:' + process.env.PORT));


//Login

app.post('/login', function (req, res) {

  var user = req.body.userId;
  var pwd = req.body.password;

  var result = "";
  console.log(user + "" + pwd);

  mysqlConnection.query("SELECT * FROM `employee` WHERE `userId`=? AND `password`=? ", [user, pwd], function (err, rs) {
    if (err) {
      result = "Invalid username or password";
      console.log("Invalid username or password");
    }
    else {
      result = rs;
      console.log("Success");
    }
    res.send(result);

  });
  //connection.end();
});




// Get emp details
app.get('/employee', (req, res) => {
  mysqlConnection.query('SELECT * FROM employee', (err, rows) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//insert emp details

app.post('/empdetail', function (req, res) {


  var empId = req.body.empid;
  var Fname = req.body.fname;
  var Lname = req.body.lname;
  var Designation = req.body.designation;
  var ContactNo = req.body.contactNo;
  var Address = req.body.address;
  var Email = req.body.email;
  var Salary = req.body.salary;
  var Age = req.body.age;

  empId, Fname, Lname, Designation, ContactNo, Address, Email, Salary, Age
  var result = "";
  mysqlConnection.query('INSERT INTO employee values(?,?,?,?,?,?,?,?,?)', [empId, Fname, Lname, Designation, ContactNo, Address, Email, Salary, Age], (err, rs) => {
    if (err)
      result = "not ok";
    else {
      result = rs.affectedRows;
      console.log(result);


    }
    res.send(result);

  });
  //connection.end(); 
});



// get car details
app.get('/car', (req, res) => {
  mysqlConnection.query('SELECT * FROM car', (err, rows) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//insert car details
app.post('/cardetail', function (req, res) {


  var carId = req.body.carid;
  var Model = req.body.model;
  var color = req.body.ccolor;
  var year = req.body.year;
  var rate = req.body.rate;
  var Manufacturer = req.body.manufact;
  var Type = req.body.ctype;
  var sale = req.body.opt;
  var custId = req.body.custid;

  carId, Model, color, year, rate, Manufacturer, Type, sale, custId
  var result = "";
  mysqlConnection.query('INSERT INTO car values(?,?,?,?,?,?,?,?,?)', [carId, Model, color, year, rate, Manufacturer, Type, sale, custId], (err, rs) => {
    if (err)
      result = "not ok";
    else {
      result = rs.affectedRows;
      console.log(result);


    }
    res.send(result);

  });
  //connection.end();
});



// get invoice
app.get('/invoice', bodyparser, (req, res) => {
  mysqlConnection.query('SELECT * FROM invoice', (err, rows) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});





// get customers
app.get('/customer', (req, res) => {
  mysqlConnection.query('SELECT * FROM customer', (err, rows) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//insert customer
app.post('/custdetail', function (req, res) {

  console.log("/custdetails  called");
  console.log(req.body);


  var custId = req.body.custId;
  var Fname = req.body.FName;
  var Lname = req.body.LName;
  var ContactNo = req.body.ContactNo;
  var Address = req.body.Address;
  var Status = req.body.Status;
  var Email = req.body.Email;

  var result = "";


  mysqlConnection.query('INSERT INTO customer values(?,?,?,?,?,?,?)', [custId, Fname, Lname, ContactNo, Address, Status, Email], (err, rs) => {
    if (err) {
      result = "not ok";
      console.log(err);
    } else {
      result = rs.affectedRows;
      console.log("/custdetails  " + result);
    }
    res.send(result);

  });
  //connection.end();
});



// view transaction
app.get('/transact', (req, res) => {
  mysqlConnection.query('SELECT * FROM invoice', (err, rows) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    }
    else
      console.log(err);
  })
});


// get car details
app.get('/carsearch', (req, res) => {
  mysqlConnection.query('SELECT * FROM car where Manufacturer=?', [req.query.Manufacturer], (err, rows) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else
      console.log(err);
  })
});