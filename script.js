let count =(function() {

let counter = 0;
return function () {return counter +=1;}

})();

function displaycount(){

document.getElementById("carrier").innerHTML = count();
}
