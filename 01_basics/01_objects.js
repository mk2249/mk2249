const mySym = Symbol("key1")

const JsUser ={
    name:"Muzamil",
    age:20,
    [mySym]:"mykey1",
    location:"Lahore",
    email:"itmuzamil63@gmail.com",
    isLoggedIn:false,
    lastLoinDays:["Monday","Saturday"]

    

}

//Object.freeze(JsUser)


   JsUser. email = "muzaml122@gmail.com"
  
   JsUser.greeting = function(){
    console.log("Hello to Js User");
   }
   JsUser.greetingTwo = function(){
    console.log(`Hello to Js User,${this.name}`);
   }
   console.log(JsUser.greeting());
   console.log(JsUser.greetingTwo());

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser);