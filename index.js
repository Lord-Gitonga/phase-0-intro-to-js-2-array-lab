// Write your solution here!
// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
  return cats.push;
}
destructivelyAppendCat();



function destructivelyPrependCat(name){
    cats.unshift(name);
     return cats;
 }
 destructivelyPrependCat();


 function destructivelyRemoveLastCat(){
   cats.pop();
     return cats;
 }

 function destructivelyRemoveFirstCat(){
    cats.shift();
     return cats;
 }

function appendCat(name){
   const name_1=[...cats,name];
     return name_1;
 }

function prependCat(name){
  const name_2=[name,...cats];
       return name_2;
}

function removeLastCat(){
 const kittens = cats.slice(0,cats.length-1);
    return kittens;
}

function removeFirstCat(){
  var catts = cats.slice(1);
  return catts;
}
