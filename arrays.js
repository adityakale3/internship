// Arrays

var arr = ["Iron Man","Dr. Strange","Captain America","Hulk","SpiderMan", "Deadpool"];

var arr2 = ["Rachel","Joey","Chandler","Pheobe","Monica","Ross","Marcel", "Aditya","Rachel","Joey","Chandler"];

// Sorting
// console.log(arr.sort());
// console.log(arr.sort(-1));


// Reverse
// console.log(arr.reverse());

// Add data to Array
// console.log("Before ",arr);
// arr.push('Iron man');
// arr.push('Spider Man');
// arr.push('Hulk');
// arr.push('Captain America');
// console.log("After ",arr);


// Remove data array
// console.log("Before ",arr);
// arr.pop();
// console.log("After ",arr);


// get Length of array
// console.log(arr.length);

// Retrive Data from array
// console.log(arr); //  all of the data
// console.log(typeof(arr.length));
// console.log(arr[arr.length - 1]); // Data at specific index

// Shift
// console.log("Before ",arr);
// console.log(arr.sort().shift());

// Unshift
// console.log("Before ",arr);
// arr.unshift('Black Widow');
// console.log("After ",arr);


// Adding to array
// console.log(arr.concat(arr2));
// var newArray = arr.concat(arr2);


// Converting Array to string
// console.log(typeof(arr.join(',')));


// To Check Array
// console.log(typeof(arr));
 var stringArray = "Hi";
// console.log(Array.isArray(stringArray));


// Slice
// console.log(arr.slice(2));
// console.log(arr.slice(1,4));
// console.log(arr2.slice( (arr2.length / 2) , (arr2.length) ));


// get Index of data
//console.log(arr.indexOf('Hulka'));



// Array to String
// console.log(arr.toString());


// var arrayOfString = "123".split('');     // ["A","d"..]
// var reverseArray = arrayOfString.reverse(); // ["a","y","t","i","d","A"];
// var joinArray = reverseArray.join("");        // aytidA
// //var convertoString = reverseArray.toString();
// console.log(joinArray);

// console.log("UNF".split("").reverse().join(""));


// Fliter / MAP

var students = [
    {
        name : "Student 1",
        grade : 2,
        section : "A"
    },
    {
        name : "Student 2",
        grade : 2,
        section : "B"
    },
    {
        name : "Student 3",
        grade : 3,
        section : "A"
    },
    {
        name : "Student 4",
        grade : 2,
        section : "A"
    },
    {
        name : "Student 5",
        grade : 2,
        section : "A"
    }				
    ]

    students.map(function(abc){
       if(abc.grade == 3){
            if(abc.section == "A"){
                console.log(abc.name);
            }
       }
    });

   
  