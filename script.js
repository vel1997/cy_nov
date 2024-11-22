//printing statement
//variable type
//var
var a = 10    //redeclearation
    a = 5     //reassign
    console.log(a);

    //let
    let b =10    //It cant redeclare
        b =5     //Reassign
        console.log(b);

     //const
    // const c = 10  //It cant Redeclare
       //    c = 5   //It cant Reassign
     // console.log(c)

      //Datatypes
      //(1) primitive Datatypes
      // String
      var str = "hello"
      console.log(str);

      //Number
      var num = 12.5
      console.log(num);
      
      //Boolean
      var t = true
      console.log(t);
      
     //Null
     var n = null
     console.log(n);

     //undefined
     //let a = "unt"
     //console.log(a);

     //Non primitive Datatype
     //Array[ ]; collection of value and data with in the square bracket.

     var arr = ["chennai",21,21.1,true,null]
     console.log(arr);
     //lenth; start with 1.
     //index; start with 0.
     console.log('using lenth ='+arr[3]);

     //object { } ; collection of key and value pairs

     var obj ={
          Name : "velu",
          age  : 25,
          Designation: "Test Engineer" 

     }
     console.log(obj);

     function box () {

      console.log("hello im function");

     }
     box ()
     

     
      
     

     //Task 1
     var count = 4
     while (count >=0) {
      console.log(count);
      count --

      
     }
     //Task 2
    let sum = 0;
    for (let i =0; i <= 10; i++) {
      sum += i;
    }
    console.log("The sum of numbers from 0 to 10 is :", sum);
    //For methods
    //(i)foreach => To read the array

    //syntax
    //var_name.foreach(value,index,actual array)
    //var weeks = ["sunday","monday","Tuesday","wednesday","Thursday"]
    //weeks.forEach((valu,idx,accarr) => console.log(val,idx,accarr));
    
    
    //Array methods
    //push => To add a value in the last of an array 
    var billcounter = ["jai","swatha","jamal","gopal"]
    billcounter.push ("sabari")
    console.log(billcounter);
    //pop
    billcounter.pop()
    console.log(billcounter);
    //unshift => To add the value starting 
    var ap = ["jai","swatha","logan","gopal"]
    ap.unshift("sabari")
    console.log(ap);
    

    
    
    
    //shift => To Remove the value in the first of array  
    ap.shift()
    console.log(ap);
        
    

    //concat=> used to add two or more arrays




    var fruits = ["apple","pineapple","iceapple"]
    var veg    = ["potato","Tomato","cucumber"]
    var cosmetic = ["powder","lipstick"]
    var cover = fruits.concat(veg ,cosmetic)
    console.log(cover);
    
    //Sort;
     //split

    var s = "java script"
    var spl = s.split(" ")
      console.log(spl);
    //join
    //array = string
    var j = spl.join("")
    console.log(j);

    //reverse
    var str = "annanagarvar"
    var rev = str.split("").reverse().join(" ")
    console.log(rev);

    //slice
    let birds = ["parrot","peacock","pigon","eagle","vuluture"]
    let slice = birds.slice(2,-1)
    console.log(slice);
    //splice
    //syntax


    let weeks = ["sunday","monday","tuesday","thursday","saturday"]
    weeks.splice(3,0,"wednesday")
    weeks.splice(5,0,"friday")
    console.log(weeks);

    //Task
    let Total = 8;

    if (Total <=8) {
      console.log("Wait for passengers");
      
    }else if (Total >=8) {
      console.log("Drop the passengers");
      
    }
    //Task 3( (i) (IF Else)
    let no = 10
    if (no>=5) {
      console.log("If the number is odd");
      
    } else {
      console.log("If the number is even");
      
    }
    //Task ii 
    let Time = 12.45
    if (Time>=9.05&&Time<=10.05) {
      console.log("madurai and thanjavur buses will depart");
      
    }else if (Time>=12.10&&Time<=1.10) {
      console.log("Bangalore and mysore bus will depart");
      
      
    }else if (Time >=3.00&&Time<=4.00) {
      console.log("pondicherry or cuddalore buses will depart");
      
    } else   {
      console.log ("local buses will depart");
      
    }

    //Task 2 (Looping)
    // (i)
    
    
    // (ii)
    
    //Nested array and object 

    var office = [
      {
        name : "kavi",
       emp  : 100,
        age  : 24,
        Role : "Test Engineer"
      } ,
      {
        name  : "harish",
        emp   : 101,
        age   : 27,
        Role  :"Automation Engineer"   
      } ,
      {
        name : "Vel",
        emp  : 102,
        age  : 26,
        Role : "Manual Tester"
      }
    ]
    
    
    office [1].name = "sakthi" 
    office [1].Role = "software Engineer"
    console.log(office);
    let keys = Object.keys(office[2])
    console.log(keys);
    let val = Object.values(office[2])
    console.log(val);
    // callback hell
    function offtime(){

      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Going office");
        },5000);

        
      });
      
    }

    function wakeoftime(){

      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("wakeof morning 5am");
        },6000);

        

      });

      
    }

    function offtime(){
      return new Promise((resolve,reject)=>{
        

      })

      
    }

    function gymtime(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("gym going 6am");
        },7000);

        

      });

      
    }

    wakeoftime().then(value => {console.log(value); return gymtime()})
        .then(value => {console.log(value); return offtime()})
        .then(value => {console.log(value);console.log("Task over")})
        
        
//Task All concept
// (i)
  var offemp = [
    {
      name : "sri",
      empid : 120,
      Designation:"Traniee"
    },

    {
      name : "vinoth",
      empid : 121,
      Designation : "Graduate Engineer Trainee"
    },

    {
      name : "Rishi",
      empid : 122,
      Designation : "Software Engineer"
    },

    {
      name : "velan",
      empid : 123,
      Designation : "Associate Engineer"
    }
  ]
     offemp [1] .name = "vicky"
     offemp [1] .empid = 100
     offemp [1] .Designation ="manual tester"
     offemp [3] .name = "sai"
     offemp [3] .empid = 101
     offemp [3] .Designation ="Engineer"
     let valu = Object .values(offemp[1])
     console.log(valu);
     let value = Object.values(offemp[3])
     console.log(value);
     // (ii)

     var obj = {
      name : "srini",
      age : 23,
      dep : "Admin"
     }
     const {name,age,dep} = obj
     console.log(name,age,dep);
     // (iii)
     



     //
     //(5)
     setTimeout (() => {
      console.log("Hello i am javascript");
      
     },10000)

     // (6)
     var obj = {
      name : "sanjay",
      dep : "civil"
     }

     for (var x in obj ) {
      console.log(obj[x]);
      
     }
     // (7)
    // let strh = "Trends"
     //for (var x of str ) {
      //console.log(x);
      
     //}
    
     
     
        
        

        
    



    
    
    
    

    

    

    

    
      

      
    
    
  

    
    
    
      
    
    
     
     
    


     //parameter ; Is like an variable name
     //arguments ; value
     
     //function box (x){
      //console.log(x);
    /// }
    // box ("js") //arguments


      
     
     
      


     
     
     
     
     
      
      

              
         


    
















  
  






  








