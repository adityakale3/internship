// while
// for loop
// for loop // Objects
// forEach // Arrays

// Data Set
// var arr = ["Iron Man","Dr. Strange","Captain America","Hulk","SpiderMan", "Deadpool"];


// While
// var a = 0;

// while(a <= arr.length){
//     console.log("A is at " + a, " | ", arr[a]);
//     a++;
// }


// For loop
// for(a = 0; a < 10; a++){
//     console.log("A is at " + a);
// }


// For Each (Arrays Only)
// arr.forEach( function(superHero){
//     // if(superHero.includes('Man')){
//     //     console.log(superHero);
//     // }
//     console.log(superHero);
// })

// ES6 way of function
// arr.forEach((superHero) => {

// })

// var arr = ["Iron Man","Dr. Strange","Captain America","Hulk","SpiderMan", "Deadpool"];
// arr.forEach(function(hero, index){
//     console.log(hero, index);
// })


// Loop for object

var emp1 = {
        name : "Aditya",
        empcode : 20005211,
        hourlyRate : 10,
        monthlyHrs : 120,

        salary : function(){
            var finalSalary = this.monthlyHrs * this.hourlyRate;
            return finalSalary;
            //console.log(finalSalary, "/- Rs per Month");
        }
}



for(key in emp1){
    //console.log(a);

    console.log(emp1[key]);
}


// ES5 way of writting a function
function displayName(a,b) {

}

// ES6 way of writting a function
var displayname = (a,b) => { }

