//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + '/date.js');
const app = express();
const port = 3000;
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workitems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get("/", (req, res)=>{
let day = date();
// switch(currentDay){
//   case 0:
//     day = 'Sunday';
//   break;
//   case 1:
//     day = 'Monday';
//   break;
//   case 2:
//     day = 'Tuesday';
//   break;
//   case 3:
//     day = 'Wednesday';
//   break;
//   case 4:
//     day = 'Thursday';
//   break;
//   case 5:
//     day = 'Friday';
//   break;
//   case 6:
//     day = 'Saturday';
//   break;
//   default:
//   console.log(`Error ${currentDay}` )
// }

  res.render('list',{
    ListTitle: day,
    newListItems: items
  });
});



// TO GET THE VALUE OF form
app.post('/', (req,res)=>{
  console.log(req.body);
  let item = req.body.newItem;

  if(req.body.list === 'Work'){
    workitems.push(item);
    res.redirect('/work');

  }else{
    items.push(item);
    console.log(item);
    res.redirect('/');
    }
 // save the value into item and redirect means reload
});
// app.post('/work', (req,res)=>{
//   let item = req.body.newItem;
//   items.push(item);
//   console.log(item);
//   res.redirect('/work'); // save the value into item and redirect means reload
// });
app.get('/work', (req,res)=>{
  res.render('list', {ListTitle: 'Work List', newListItems: workitems})
})
app.listen(port, function(){
  console.log(`Server started on port ${port}`);
});
