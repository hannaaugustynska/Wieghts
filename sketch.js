var wieghts = [34,67,93,56,24]
var add
var avg
function adding(){
  add = wieghts[0]+wieghts[1]+wieghts[2]+wieghts[3]+wieghts[4]
  avg = add/5
  console.log(avg)
}




function setup() 
{
  createCanvas(400,400);
  adding()
}

function draw() 
{
background(51);
}

