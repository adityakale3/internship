// Objects

// var abtMe = ["Aditya", 26, "Byjus", true];
// console.log(arr[0]);

// var abc  = {}

// var user = {  
//             name : "Aditya",
//             age : 26,
//             company : "badve Grp",
//             cities : ["Pune", "Nagpur"],
//             displayName : function(variable1){
//                 console.log(variable1);
//             }

//         }

// user.displayName("Aditya");
//console.log();




// employee Object
// var emp1 = {
//         name : "Aditya",
//         empcode : 20005211,
//         hourlyRate : 10,
//         monthlyHrs : 120,

//         salary : function(){
//             var finalSalary = this.monthlyHrs * this.hourlyRate;
//             return finalSalary;
//             //console.log(finalSalary, "/- Rs per Month");
//         }
// }

// var emp1salary = emp1.salary();
// console.log(emp1salary + 100);



// Creating obejct over-the-go
// var user = {};
// console.log(user);


// user.name = "Aditya";
// user.displayName = function(){ console.log(this.name); }

// console.log(user.displayName());




// Complex Object
var chandler = {
    name : "Chandler Bing",
    gender : "Male",
    birthday : "April",
    episodes : 236,
    seasons : ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"],
    relatives : [
                {
                    biological : {
                        father : "Charles Bing",
                        mother : "Nora Bing"
                    }
                }, 
                {
                    in_laws : {
                        wife : "Monica Geller",
                        brother_in_law : "Ross Geller",
                        mother_in_law : "Judy Geller",
                        father_in_law : "Jack Geller"
                    }
                }
    ]
}

console.log(chandler.relatives[1].in_laws.wife);