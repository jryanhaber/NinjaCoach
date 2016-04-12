

$(document).ready(function(){


if(fb){
// var Firebase = require("firebase");
  var Synthesisdata = new Firebase("https://Synthesisdata.firebaseio.com/");
// use firebase to store the users work location
  var usersRef = Synthesisdata.child("users");
  var postsRef = Synthesisdata.child("posts");}

  var firstName;
  var lastName;
  var email;
  var phone;
  var userKey;
  var age;


  var workLocation;
  var carSituation;
  var licenseSituation;


 // work history variables
  var uberHistory = false;
  var lyftHistory = false;
  var sideCarHistory = false;
  var postmatesHistory = false;
  var caviarHistory = false;
  var sprigHistory = false;
                     
// qualification variables
// we are going to assume they are qualified for any of these unless 
// thier answers disqualify them // 

  var uberqualified = true;
  var lyftqualified = true;
  var sideCarqualified = true;
  var postmatesqualified = true;
  var caviarqualified = true;
  var sprigqualified = true;

  // the questions will prompt these triggers, then these will
  // determine what is shown... 






// shift from part 1 to part 2
  // on button trigger part 2
$(".start-header-2").on("click",function(){
  $("#section-1").fadeOut(200);

  setTimeout(function() { 

      $("#section-2").fadeIn(200);
      $("#firstNameField").focus();
  }, 220);


      // on enter trigger part 3
    $("#phoneField").blur(function() {
        
        $("#completeSection1Trigger").show().focus();


    });


    $("#completeSection1Trigger").click(function(){

        $("#section-2").fadeOut(200);
                        // save to firebase
            firstName = $("#firstNameField").val()
            lastName = $("#lastNameField").val()
            email = $("#emailField").val()
            phone = $("#phoneField").val()


       
           setTimeout(function() { 

          $("#section-3").fadeIn(200);
      }, 220);                

      

    }); 



    $(".location-determined").on("click",

      function(){
      
        // save local values
        workLocation = $(this).text();
          
        // save to firebase
  
          // load next questions
      
      $("#section-3").fadeOut(200);

      setTimeout(function() { 

          $("#section-4").fadeIn(200);
      }, 220);
            });

    $(".car-determined").on("click", function(){


        carSituation = $(this).text();
       

        $("#section-4").fadeOut(200);

        setTimeout(function() { 

          $("#section-5").fadeIn(200);
                             }, 220);
            });


// Launch Section 5b 
  // when you know license status, show gigs

    $(".license-determined").on("click", function(){

        licenseSituation = $(this).text();
        
          
      $("#section-5").fadeOut(200);

        setTimeout(function() { 

          $("#section-5b").fadeIn(200);


                             }, 220);
            });





// Launch Section 6
  // when you know license status, show gigs

    $(".age-determined").on("click", function(){
             age = $(this).text();
        
        

      $("#section-5b").fadeOut(200);

        setTimeout(function() { 

          $("#section-6").fadeIn(200);


                             }, 220);
            });






// Launch Section 7
// this shows all the gigs... 

// focus in on your ideal target market next.. then whirl out from there... 




  // when you know license status, show gigs

    $("#completeSection6Trigger").on("click", function(){

        switch(fb) {

        // if fb is on check mode
            case true:

            switch(_debug) {
            // if fb is on, debug is off, store to database
                case false:
                // if its me, do nothing, else, log new data
                    if(name !== "Jonathan Haber"){    
                    userKey = usersRef.push();
                     userKey.set({
                    a_First_Name: firstName,
                    a_Last_Name: lastName,
                    b_Phone: phone,
                    c_Email: email,
                    d_Work_Location: workLocation,
                    e_Car_Situation: carSituation,
                    f_Drivers_License: licenseSituation,
                    g_Age: age,
                    h_1_Uber_History: uberHistory,
                    h_2_lyftHistory: lyftHistory,
                    h_3_sideCarHistory: sideCarHistory,
                    h_4_postmatesHistory: postmatesHistory,
                    h_5_caviarHistory: caviarHistory,
                    h_6_sprigHistory: sprigHistory,});
                   }
                    break;

                 // if in debug mode, dont store to database (testing)
                    default:
            }

          // if firebase is off, do nothing (will crash otherwise)


                default:
        }





// going to need to save to the database here


      $("#section-6").fadeOut(200);

        setTimeout(function() { 

          if(cl){

            $("#section-7B").fadeIn(200);
          }
            else{$("#section-7").fadeIn(200);
                  }
// set up for showing them the #'s'

// if lyft or sidecar history is true, then change Uber sign on bonus
// if worked for uber is true, remove uber
// if worked for any is true, remove that one


                             }, 220);
            });
            });




                        // Determine and log past work history here

                       $(".uber-history").on("click",function(){

                            $('#uberCheck').toggle();
                            uberHistory = !uberHistory;

                       });                       

                       $(".lyft-history").on("click",function(){

                            $('#lyftCheck').toggle();
                            lyftHistory = !lyftHistory;

                       });
                       $(".sideCar-history").on("click",function(){

                            $('#sideCarCheck').toggle();
                            sideCarHistory = !sideCarHistory;

                       });
                       $(".postmates-history").on("click",function(){

                            $('#postmatesCheck').toggle();
                            postmatesHistory = !postmatesHistory;

                       });
                       $(".caviar-history").on("click",function(){

                            $('#caviarCheck').toggle();
                            caviarHistory = !caviarHistory;

                       });
                       $(".sprig-history").on("click",function(){

                            $('#sprigCheck').toggle();
                            sprigHistory = !sprigHistory;

                       });
                      






 });






