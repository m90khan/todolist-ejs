
const getDate = () =>{
let today = new Date();
// let currentDay = today.getDay();
// let day = '';
let options = {weekday:'long', day: 'numeric', month:'long', year: 'numeric'};
let day = today.toLocaleDateString('en-US', options);
return day;
};

module.exports = getDate;
