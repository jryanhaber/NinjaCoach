



//=========================================================================================||
//==|| Table of contents  @0||=====================================================================||
//==========================================================================================||



//   Section i
//====================================================================================================================||
// || Partially Complete and In Development Notes

//   Section 1 
//====================================================================================================================||
// || Local Storage Data Retention

//   Section 2   @2
//====================================================================================================================||
// || Initial Guidance || \\
// || Log and View Modes 
//============================|| 

//   Section 3   @3
//====================================================================================================================||
// || Ticker || \\
//============================|| 

//   Section 4   @4
//====================================================================================================================||
// || Functions || \\
//============================|| 

//   Section 5   @5
//====================================================================================================================||
// || add things in real time functions in development || \\
//============================|| 

//   Section 6   @6
//====================================================================================================================||
// || keydown shortcuts || \\
//============================|| 

//   Section 7  @7
//====================================================================================================================||
// FireBase Setup  || \\
//============================|| 
// // For Data Retention 
// // To replace all 'local storage usage' 
//============================|| 

//   Section 8   @8
//====================================================================================================================||
// || Templating for actively moveable coaching elements!!  || \\
// ||  New and Hot and happening, building now
//============================|| 

//   Section 9   @9
//====================================================================================================================||
// || Views and Modes and links between them || \\
// || To all be ported to angular controller 


//   Section 10   @9
//====================================================================================================================||
// || Integrity and Congruity buttons and classes - New And Hot || \\
// || To all be linked to object property methods which enable sorting by degree of congruity, priority, or a mix of the two...
// || To be the first congruity algorithm!

//   Section 11   @9
//====================================================================================================================||
// || Decision maker - multiple options creating in real time || \\
// || On hold - low priority, under construction


//   Section 12   @12
//====================================================================================================================||
// || Main log item creation station, to be broken up into reuseable snippets...  || \\
// || On hold - low-med priority, under construction
//============================|| 

//   HTML Local Storage Places @13
//========================================||
// || Places where soon to be phased out html local storage is happening || \\
//============================|| 

//   Section 14   @14
//====================================================================================================================||
// || Somewhat older but still working || \\
// || Active click through coaching code
//============================|| 


//   Section 15   @15 (2 parts)
//====================================================================================================================||
// || Older Dedication  & goal stuff || \\ 
// || all out of date, integrate into new platform then phase out completely
//============================|| 

//   Section 16   @16
//====================================================================================================================||
// || Older Functions for changing text || \\ 
//============================|| 

//==========================================================================================||
//==========================================================================================||





// Key 
// -- //$$$ = something I am working on in the moment, temp bookmark
// -- //@@@ = something I want help understanding
// -- //### = note to self, opportunity to grow this
// -- //^^^ = something under construction




//   Section i
//====================================================================================================================||
// || Webkit Limitations

// "Chrome and Safari do not currently follow the spec, failing to change font-size< in 
//response to viewport changes. (vw and vh work just fine when applied to other properties). 
//To force a smooth size change in Webkit, simply add a little JavaScript:
/*
window.addEventListener('resize', function() {
abovewater = document.querySelector('.abovewater');
abovewater.style.fontSize = "5vw";
});
" via http://demosthenes.info/blog/739/Creating-Responsive-Hero-Text-With-vw-Units */

// ** // I am exploring whether responsive text sizing suits the development aims I am intending
// ** // by implementing them in some places in my css.. if I decide to move forward with this, then 
// ** // I will need to update the js based on the above notes to suit chrome and safari... 

// x = 0;  // the very first thing in my javascript is a global variable, now I know not to use these... so I am 
// commenting it out while curious about the effect of this... will be watching for any impact. 



// The following is the structure for the fade in/out coaching on the moment 
// section which is triggered in firefox with openapple q and will evolve
// to encompass various contexts and styles.. 

  $("#dedicationIntent").html("<p>What is the degree of integrity or congruity between where you are at right now and your core, fundamental, singular focal point/value? <output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /></p>"  ); // sets inquiry for this



//   Section 1  @1
//====================================================================================================================||

// Contents Include:
// || Local Storage Data Retention
//===================================================================||



// // //
// this function pulls the saved variables of logMode and logModeView which syncs the app
// with its last state, if its undefined, it sets them to default values. 


$(document).ready(function(){





// ||========================================================||
// || Function for saving data on command
// 








// // firebase setup
//   var myFirebaseRef = new Firebase("https://vivid-fire-8694.firebaseio.com/");


if(localStorage.logs != undefined){
  console.log("this is not your first time, grasshopper " );
  $("#initialLogDestination").html(localStorage.logs); 


}else{ 

  console.log(" no saved logs, starting a clean slate");
}




if(localStorage.logMode != undefined){
  console.log("the storage saved the log mode, its SAVED as " +localStorage.logMode);
 
}else{ 

  localStorage.logMode = "All";
  console.log(" no saved value for log mode, so its initialized to " +localStorage.logMode);
}



if(localStorage.emotionDestination != undefined){
  console.log("the storage saved the emotion destination mode, the localStorage.emotiondestination is set to " +localStorage.emotionDestination);
}else{ 

  localStorage.emotionDestination = "logModeConfiguration";
  console.log(" no saved value for emotionDestination, so its initialized to " +localStorage.emotionDestination);
}


if(localStorage.coachingOnOneItem != undefined){
    console.log("the storage saved whether you coaching on one item, its " +localStorage.coachingOnOneItem);

}else{ 
  localStorage.coachingOnOneItem != false;
  console.log("nobody defined whether your coaching on one item, so it has been set to the default of not being the case ");
}


if(localStorage.logModeView != undefined){
  console.log("the storage saved the log mode view, its " +localStorage.logModeView);
}else{ 

  localStorage.logModeView = "listView";
  console.log(" no saved value for log mode View, so its initialized to " +localStorage.logModeView);
}

if(localStorage.coachingStyle != undefined){
  console.log("the storage saved the coachingStyle, its " +localStorage.coachingStyle);
}else{ 

  localStorage.coachingStyle = "awareness";
  console.log(" no saved value for coachingastyle, so its initialized to " +localStorage.coachingStyle);
}

// ||========================================================||
// || if theres no defined, stored variable for these items, set the defaults
// 


if(localStorage.integrityTriggersVisible != undefined){
  console.log("the storage saved the integrityTriggersVisible, its " +localStorage.integrityTriggersVisible);
}else{ 

  localStorage.integrityTriggersVisible = true;
  console.log(" no saved value for integrityTriggersVisible, so its initialized to " +localStorage.integrityTriggersVisible);
}

if(localStorage.priorityTriggersVisible != undefined){
  console.log("the storage saved the priorityTriggersVisible, its " +localStorage.priorityTriggersVisible);
}else{ 

  localStorage.priorityTriggersVisible = true;
  console.log(" no saved value for priorityTriggersVisible, so its initialized to " +localStorage.priorityTriggersVisible);
}

if(localStorage.integrityAimTriggersVisible != undefined){
  console.log("the storage saved the integrityAimTriggersVisible, its " +localStorage.integrityAimTriggersVisible);
}else{ 

  localStorage.integrityAimTriggersVisible = true;
  console.log(" no saved value for integrityAimTriggersVisible, so its initialized to " +localStorage.integrityAimTriggersVisible);
}

if(localStorage.commitmentIntegrityTriggersVisible != undefined){
  console.log("the storage saved the commitmentIntegrityTriggersVisible, its " +localStorage.commitmentIntegrityTriggersVisible);
}else{ 

  localStorage.coachcommitmentIntegrityTriggersVisibleingStyle = true;
  console.log(" no saved value for commitmentIntegrityTriggersVisible, so its initialized to " +localStorage.commitmentIntegrityTriggersVisible);
}


// if some logs are saved
if(localStorage.personalLogs != undefined){
  console.log("we saved your personal logs");
  console.log(localStorage.personalLogs);
// load them up from local storage
  $("#personalLog").find(".modal-body").html(localStorage.personalLogs);


}else{ 

}



});


// ||========================================================||
// || Set mode to debug unless releasing, then change this to true
// 
    var _DEBUG    = true;



// ||========================================================||
// || hide all access mode controls unless specifically triggered
//    means for establishing trigger for a later date
// 

    var accessMode = false;


// ||========================================================||
// || Turn off all 'in development' functionality unless in development
// 

    var devMode    = false;


switch(accessMode){

  case "true":
    $(".accessCoachingTrigger").show();
    $(".activateClearing").show();
    break;

  default: 

    $(".accessCoachingTrigger").hide();
    $(".activateClearing").hide();

}






//   Section 2   @2
//====================================================================================================================||

// Contents Include:
// || Initial Guidance
// || Log and View Modes 
//===================================================================||


// ||========================================================||
// || Main Inquiry Style, under construction
// ||========================================================||


if(typeof localStorage.coachingStyle === 'undefined' || localStorage.coachingStyle == "awareness"){ 
  // if the coaching style has not been determined, this sets
  // its default values, OR if its set as awareness this (I am hoping) will set its values as well... 

  console.log("coaching style not defined or set to awareness")

  var focus = "";
  var noticingInjunction = "Allow yourself to take in the full range of your immediate experience and simply notice what it is that you notice...";
  var noticingImpactInjunction = "Notice the impact of your attention upon your inner world.  Is it revealing itself to you through your attention?";
  var noticingImpactInjunction2 = "How do you feel about what you are noticing?  Let this in, let yourself feel this. ";
  var relaxingInjunction = "Let yourself relax into the quality and texture of this moment, of what it is like to be you... ";
  var welcomingInjunction =  "Let yourself listen, with your whole body as an instrument, to the quality and texture of this moment as it is... ";
  var listeningImpact = "Noticing the quality of your listening, notice now how you feel about what you see";
  var listeningInjunction = "Let yourself notice the quality of your listening.  Soften into this.";
  var emergenceInjunction = "Allow your attention to include that which is emerging now.  The organic novelty arising in your awareness, both within and around you.";
  var uniqueGiftInjunction = "Let yourself listen to the qualities of your own gift for others.  Listen to the vast fields of information swirling within and around you for indicators of what you are uniquely poised to offer others, the world and those to come.";
  var callingInjunction = "Allow yourself to inquire into your sense of calling, of purpose, of function in service to the larger systems of life you are embedded within and participitating with.";
  var textlist = new Array(noticingInjunction, noticingImpactInjunction, noticingImpactInjunction2, relaxingInjunction, welcomingInjunction, listeningInjunction, listeningImpact, emergenceInjunction, uniqueGiftInjunction, callingInjunction)




   // your code here.
 } else {

  console.log("coaching style  saved as "+ localStorage.coachingStyle+" = launching inquiry mode");

  if(localStorage.logMode == "Inquiry"){

    if(localStorage.logModeView == "listView"){
      var focus = "your inquiries" 
    }else{  
                    var focus = "this question" }}//  

                    else if(localStorage.logMode == "Aspiration"){

                      if(localStorage.logModeView == "listView"){
                        var focus = "your aspirations" 
                      }else{  
                    var focus = "this aspiration" }}//  

                    else if(localStorage.logMode == "Goal"){
                      if(localStorage.logModeView == "listView"){
                        var focus = "your goals" 
                      }else{  
                    var focus = "this goal" }}//

                    else if(localStorage.logMode == "Decision"){

                      if(localStorage.logModeView == "listView"){
                        var focus = "your pending decisions" 
                      }else{  
                    var focus = "this decision" }}//  

                    else if(localStorage.logMode == "Inspiration"){

                      if(localStorage.logModeView == "listView"){
                        var focus = "that which inspires you" 
                      }else{  
                    var focus = "this inspiration" }}//  


                    else if(localStorage.logMode == "Practice"){

                      if(localStorage.logModeView == "listView"){
                        var focus = "your practices" 
                      }else{  
                    var focus = "this practice" }}//  

        else {var focus = "this moment" }//  




         var noticingInjunction = "In being with " + focus +", take in your experience.  <br>Notice what body sensations, mood & images arise. <br>Notice what else arises within.";
       var noticingImpactInjunction = "As you are staying with " + focus +", <br>Notice the impact of your attention upon your inner world.  <br>Is it revealing itself to you through your attention?";
       var  noticingImpactInjunction2 = "How do you feel about what you are noticing?  <br>Let this in, let yourself feel this. ";
       var relaxingInjunction = "Let yourself relax into the quality & texture of what is arising within as you connect to " + focus + ". <br>Relax into whatever it is like to be you";
       var welcomingInjunction =  "Welcoming " + focus +", Let yourself listen, with your whole body as an instrument, to the quality and texture of this moment as it is... ";
       var listeningInjunction = "Staying with " +focus+ ", let yourself notice the quality of your listening.  <br>Soften into this awareness.";
       var listeningImpact = "Noticing the quality of your listening, notice now how you feel about what you are getting from this";
       var emergenceInjunction = "Allow your attention to include that which is emerging now through this moment.  <br>The organic novelty arising in your awareness, both within and around you. <br> Notice how you feel about this.";
       var uniqueGiftInjunction = "Let yourself listen to the qualities of your own gift for others.  Listen to the vast fields of information swirling within and around you for indicators of what you are uniquely poised to offer others, the world and those to come.";
       var callingInjunction = "Is there a connection between "+focus+" and your sense of calling? <br>Of purpose? Of your function in service to the larger systems of life you are embedded within? <br>Participitating with?";
       var textlist = [noticingInjunction, noticingImpactInjunction, noticingImpactInjunction2, relaxingInjunction, welcomingInjunction, listeningInjunction, listeningImpact, emergenceInjunction, uniqueGiftInjunction, callingInjunction];


     }



//   Section 3   @3
//====================================================================================================================||

// Contents Include:
// || Ticker
// || 
//===================================================================||


/*
// THIS IS WHAT I AM WORKING ON $$$  (( blocked this out until its time to work on it again))
//var tickerOptions = {  list: textlist ,  startIndex:0,  trickerPanel: $('#newsPanel'), // this is the active one  interval: 3 * 4000, };

 var tickerOptions = { // so tickerOptions is an object with the following properties..
  list: textlist ,  // textlist is an array
  startIndex:0,  
  trickerPanel: $('#newsPanel'),  // trickerpanel is where it will go
  interval: 3 * 4000, }; 
      
$(function() {  
  
  listTicker(tickerOptions);  })




            

            var textlist2 = new Array("Let my connection to you be anchored to the center of the Earth", "Let your voice be my voice","Let your eyes be my eyes","Let your direction be my direction","Let your will be my will","Let my shrunken self find itself in its own embrace, melted at its boundaries, into the infinitude that is your will","Let me know you as my own expression","Let your message be my truth","Let your passion be my drive","Let your compassion be the emanation of my heart","Let my life be devoted to your devotion expressed openly and freely unto the world"
              );


            $(function() {
              listTicker({
                list: textlist2 ,
                startIndex:0,
                trickerPanel: $('#newsPanel2'), // this seems like something I was testing... 
                interval: 3 * 4000,
              });
            });


            var listTicker = function(options) { // listTicker is a function which... 

              var defaults = { // has default values
                list: [],
                startIndex:0,
                interval: 3 * 4000,
              }   
              options = $.extend(defaults, options);  // has options.. i should look up .extend

              var listTickerInner = function(index) {

                if (options.list.length == 0) return;
                // if theres no index, the index is negative or its larger then the length of the list
                // then set the value of index to 0... 
                if (!index || index < 0 || index > options.list.length) index = 0;

                var value= options.list[index]; // value is a variable which is equal to an array 
                // which contains the contents of the options variable??

                options.trickerPanel.fadeOut(function() { 
                  $(this).html(value).fadeIn();
                });

                var nextIndex = (index + 1) % options.list.length;

                setTimeout(function() {
                  listTickerInner(nextIndex);
                }, options.interval);

              };

              listTickerInner(options.startIndex);
            }

            */




//TICKER BACKUP (( this is the back up instated to keep the app functional till i am working on the next part again))



// THIS IS WHAT I AM WORKING ON $$$  (( blocked this out until its time to work on it again))
//var tickerOptions = {  list: textlist ,  startIndex:0,  trickerPanel: $('#newsPanel'), // this is the active one  interval: 3 * 4000, };


$(function() {
  listTicker({
    list: textlist ,
    startIndex:0,
                trickerPanel: $('#newsPanel'), // this is the active one
                interval: 3 * 4000,
              });
});




var textlist2 = new Array("Let my connection to you be anchored to the center of the Earth", "Let your voice be my voice","Let your eyes be my eyes","Let your direction be my direction","Let your will be my will","Let my shrunken self find itself in its own embrace, melted at its boundaries, into the infinitude that is your will","Let me know you as my own expression","Let your message be my truth","Let your passion be my drive","Let your compassion be the emanation of my heart","Let my life be devoted to your devotion expressed openly and freely unto the world"
  );


$(function() {
  listTicker({
    list: textlist2 ,
    startIndex:0,
                trickerPanel: $('#newsPanel2'), // this seems like something I was testing... 
                interval: 3 * 4000,
              });
});


// ||========================================================||
// || This is the ticker for custom coaching 
// ||========================================================||

// ||========================================================||
// || I need to understand it, so Ill add some notes and questions for now
// || this is a dense function that will require a bit of unpacking and some help
// 

var listTicker = function(options) {
// ||========================================================||
// || this seems to set up the default values
// || list is perhaps the default list of values to be moved through
// || startIndex perhaps the default starting place in the list array
// || interval is likely the timing between ticks... 
  var defaults = {
    list: [],
    startIndex:0,
    interval: 3 * 4000,
  }   
  var options = $.extend(defaults, options);
// ||========================================================||
// || This part I need to look deeper into… 
// || .extend() is a function I need to look up
// || defaults seems to call all of the defaults
// || options seems to call upon the parameters that will be provided.. 
  var listTickerInner = function(index) {

    if (options.list.length == 0) return;

// ||========================================================||
// || If the object options, which holds all of the values the ticker should
// || contain, including a list, should have no length, end the function immediately
// 

    if (!index || index < 0 || index > options.list.length) index = 0;

// ||========================================================||
// || if the index is undefined, or negative, or greater then the length of the 
// || list of vlaues, set the index to 0. 
// 

    var value= options.list[index];

// ||========================================================||
// || starting with the current value, determined by the index of the 
// || list contained in the options variable, which stores all of the parameters for the ticker… 
// || and saving that current value as var value... 
// 

    options.trickerPanel.fadeOut(function() {
      $(this).html(value).fadeIn();
    });

// ||========================================================||
// || this part is confusing, fade out the value of the tricker panel contained within the 
// || options function, and then fade in the new value... ??
// 

    var nextIndex = (index + 1) % options.list.length;

// ||========================================================||
// || define the next index as the index plus one, so long as 
// || .... 
// 

    setTimeout(function() {
      listTickerInner(nextIndex);
    }, options.interval);



  };

  listTickerInner(options.startIndex);
}



// I dont recall what this was for... from before I was commenting out my code
function loadThisPractice(){
  x = $(this).text;
  console.log(x);

};




var toolsToggle = (function(){
            //$("#sidebar").toggleClass("col-xs-5 col-sm-4 col-md-3 col-lg-2" );
           // $("#sidebar").toggle();
            $("#sidebar").toggle(200); //hides feelings

            $("#mainJournal").toggleClass("col-xs-12 col-sm-8 col-md-9 col-lg-9"); // make room for feelings
            $("#mainJournal").toggleClass(" col-lg-12");// make room for feelings 


          });


var inquiryToggle = (function(){

            $("#inquiriesView").toggle(200); //toggles inquiries


          });

var inquiryToggle2nd = (function(){

            $(".inquiriesView").toggle(200); //toggles inquiries


          });

var chomperMode = (function(){ // prototype of 2nd person inquiry toolset


            $(".chomper").toggle(200); //toggles chomper


          });

//   Section 4   @4
//====================================================================================================================||

// Contents Include:
// || Functions
// || 
//===================================================================||

// 1st Subsection Includes:
// || These Prototype Functions:
// || - new panel function
// || - new min button function
// || - new access button function
// || - putting them together... 
//===================================================================||


// ||========================================================||
// || Main Panel Prototype
// you launch this function to create a new overarching panel
// to plug into



// on click
  // launch access
    // attach body
      // attach pieces





$(document).ready(function(){

// ||========================================================||
// ||  activating clearing seems obsolete, can be done in 2nd person inquiry, perhaps should 
// just link to that... ill do that... 
// 
  if(devMode)
      {$(".activateClearing").show();
  };

// ||========================================================||
// || developer toggle function - shows and hides items in development
//   //@developer

toggleDeveloperMode = function(){

  $(".inDevelopment").toggle();

  if(_DEBUG){
    console.log("developermode toggled");
    console.log("log mode = "+localStorage.logMode+" - this tells you what log mode your SAVED AS");
    console.log("log Mode view = "+localStorage.logModeView +" -  this shows what your logmodeview is saved as, zoomed in or list view ");
    console.log("emotion destination = " +localStorage.emotionDestination+" - this is where your  emotions are SAVED to go to...");
    console.log("coaching on one item is currently  " +localStorage.coachingOnOneItem+" This is whether the computer understands that your getting coaching on an item");
    console.log("integrityTriggersVisible: "+ localStorage.integrityTriggersVisible +"priorityTriggersVisible " + localStorage.priorityTriggersVisible);
    console.log("integrityAimTriggersVisible$$: "+ localStorage.integrityAimTriggersVisible );
}


    
}




    }); 





var createNewOverarchingPanel = function(destination){
  var name = document.createElement("DIV");
  name.setAttribute("class","panel-body tempAccessPane")
  $(destination).append(name);

}



var createNewOverarchingPanel = function(destination){
  var name = document.createElement("DIV");
  name.setAttribute("class","panel-body tempAccessPane")
  $(destination).append(name);

}


  



// ||========================================================||
// || Sub Panel Prototype
// you launch this function and input the main panel as its destination
// at it gives:
// --  a title: for buttons and title text 
// --  a body: for info and processes 
// --  a helper zone: for advice and guidance

var addNewSubPanels = function(destination){
  // create title panel
  var titleSubPanel = document.createElement("DIV"); 
  // style it
  titleSubPanel.setAttribute("class","panel-body tempTitleSpace")
  // add it to the destination, new overarching panel
  $(destination).append(titleSubPanel);

    // create helper panel
  var helperPanel = document.createElement("DIV"); 
  // style it (( probably gonna need to abstract out the accessguidance part to reuse))
  mainSubPanel.setAttribute("class","panel-body firstHelper AccessGuidance")
  // add it to the destination, new overarching panel
  $(destination).append(helperPanel);

    // create main body subpanel
  var mainSubPanel = document.createElement("DIV"); 
  // style it
  mainSubPanel.setAttribute("class","panel-body mainSubPanel")
  // add it to the destination, new overarching panel
  $(destination).append(mainSubPanel);
}

// ||========================================================||
// || Min Button Prototype
// you launch this function and input the main panel as its destination
// at it gives a title and body to the main... 


var addMinimizeButton = function(destination){
  var minimizeButton = document.createElement("Button");
  minimizeButton.setAttribute("class","btn btn-sm btn-default pull-right minimizeThisElement")
  minimizeButton.setAttribute("title","Minimize or Show")
  $(destination).append(minimizeButton);
}

// ||========================================================||
// || Start Process Prototype
// you launch this function and input the following parameters:
// - destination: where its gonna attach to
// - process name: this is going to be the title of the "start" button

// hide this button removed, not viable... 

// var startProcessButton = function(destination, processName){
//   var hideThisButton = document.createElement("Button");
//   hideThisButton.setAttribute("class","btn btn-sm btn-default pull-right startAccess")
//   minimizeButton.setAttribute("title","Start "+processName)
//   $(destination).append(hideThisButton);

// }



// ||========================================================||
// || First Helper Prototype
// you launch this function and input the following parameters:
// - destination: where its gonna attach to (( should probably be mainSubPanel))
// - // Does it need then you to tell it where the main sub panel is??

var addTextArea = function(destination, processNumber){
  var textArea = document.createElement("TEXTAREA");
  textarea.setAttribute("class","btn btn-sm btn-default pull-right startAccess")
  minimizeButton.setAttribute("title","Start "+processName)
  $(destination).append(hideThisButton);

}






var addAimDivToThis = function(){
          // Integrity with my AIM Section and button - setup
          var aimDiv = document.createElement("DIV"); // create a new div to hold the aim area
          aimDiv.setAttribute("editable",true);     // set it to editable
          aimDiv.setAttribute("class","aimDiv p2 checkInArea panel-body aimPanelBody");     // set class for formatting
          //aimDiv.setAttribute("style","display:none");     // start it off hidden (now make sure all .checkinArea elements are shown when supposed to be)

        //PLACEMENT happens this line 
          $(coachingArea).prepend(aimDiv);    // place the aim div on the main item after the prior stuff
          

         // setting up a delete button
          var deleteThisButton = document.createElement("BUTTON");  // trigger button
          deleteThisButton.setAttribute("class","btn btn-sm btn-link deleteThisLilDiv aimDiv pull-right");
          deleteThisButton.setAttribute("type","button");
          $(deleteThisButton).text("X");
          $(aimDiv).append(deleteThisButton);    // place integrity button on <div>



           // The AIM title button  
         // ========================= //
          var aimTitle = document.createElement ("BUTTON");        
          aimTitle.setAttribute("class",'btn btn-default btn-sm pull-left aimButton');     // set class
          $(aimTitle).html("My Aim In <br> Relation to This");
          $(aimDiv).append(aimTitle);


         // The AIM info presentation 
         // ========================= //
          // Integrity with my AIM Section and button - create and append the area
          var myAim = document.createElement("div");
          $(myAim).html("My Aim in relation to this " );         
          myAim.setAttribute("class", "saveLogs inline logItemListView logItemTitle");        
          $(aimDiv).append(myAim);    // text input to <div>
          myAim.setAttribute("style", "display:none");        
        

         // The AIM info editing field 
         // ========================= //
          // Integrity with my AIM Section and button - create and append the input
          var editSpace2 = document.createElement("TEXTAREA");
          editSpace2.setAttribute("type", "text");         
          editSpace2.setAttribute("rows", "2"); 
          $(editSpace2).val("My Aim in Relation to this is ");        
          editSpace2.setAttribute("class", "logItemEditor aimField form-control input-sm saveLogs inline");        
          $(aimDiv).append(editSpace2);    // text input to <div>
          

          $(editSpace2).focus();

        };


       


//   Section 5   @5 - Deleted/outdated
//====================================================================================================================||







//   Section 6   @6
//====================================================================================================================||

// Contents Include:
// || keydown shortcuts
// || @keyboard shortcuts
//===================================================================||


// ||========================================================||
// || shortcut for toggling tools menu
// 
// 'Tools menu' Shortcut

  $(document).keydown(function(e) { // show and hide toolbox w/openapple s
    if ((e.which == '115' || e.which == '83' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      toolsToggle();

      return false;
    }
    return true;
  }); 



// ||========================================================||
// || Defines what the openapple enter key does when on an input field
// 











// 'Developer Mode' Shortcut  @developer

  $(document).keydown(function(e) { // show and hide developer Mode w/openapple d
    if ((e.which == '115' || e.which == '68' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      toggleDeveloperMode();

      return false;
    }
    return true;
  }); 







// 'Inquiry mode' Shortcut

  $(document).keydown(function(e) {
    if ((e.which == '115' || e.which == '81' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      inquiryToggle();

      return false;
    }
    return true;
  }); 


// '2nd person inquiry integration' Shortcut

  $(document).keydown(function(e) { // on openapple '2', this toggles 2nd person inquiry mode's invocation
    if ((e.which == '115' || e.which == '50' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      inquiryToggle2nd();

      return false;
    }
    return true;
  }); 


// 'Today' Shortcut
  $(document).keydown(function(e) { // on openapple 't', this toggles today class for any item
    if ((e.which == '115' || e.which == '84' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      $(".bt2Focused").toggleClass("TodayItem").find(".honeIn2").toggleClass("btn-primary").toggleClass("btn-default");
        // need to add something subtle that makes the today item distinguishable from other items

        return false;
      }
      return true;
    }); 


// 'chomper mode' Shortcut (all under construction elements) update: default: on
//||================||
  $(document).keydown(function(e) {
    if ((e.which == '115' || e.which == '49' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      chomperMode();

      return false;
    }
    return true;
  }); 

// 'Next Item' Shortcut 
//||=====================||

  $(document).keydown(function(e) { // determines what the openapple > keystroke does and when... 
    if ((e.which == '115' || e.which == '39' ) && (e.ctrlKey || e.metaKey)) // right arrow shift to next
    {
      e.preventDefault();
         if(localStorage.emotionDestination === "logModeConfiguration"){ // basically saying if your in the log Mode... then

                    
               

                   if  (localStorage.logModeView === "zoomedInView") // and if your zoomed on an item, then the following shortcut should work

                    {
                       // the following commands name the active item and next item as variables and then pull the active item class
                      // and visibility from one and add to the next.. 

                      // oh!! I see why this is not working.. the nextOne line pulls only pulls the next 
                      // item IF it matches, and needs to loop until it finds a match rather then stopping
                      // there when it is  not a match... got it. 
                     activeOne = $("#initialLogDestination").find(".activeItem"); // find the active item and save its class
                     console.log("value of log mode saved as "+localStorage.logMode+",this is what has been saved as the class or tag your playing with & should match what is happening... ") // log the saved active class
                     classOfActiveOne = ("."+localStorage.logMode+"Item") // set the active class variable
                     console.log("active one type is " + classOfActiveOne +", this is what is saved in the variable logMode currently, as per your menu filter clicking... and what determines which type comes next... ") // test the 
                     //nextOne = $("#initialLogDestination").find(".activeItem").next(classOfActiveOne);
                     nextOne = $("#initialLogDestination").find(".activeItem").nextAll(classOfActiveOne+":first");
                     $(activeOne).removeClass("activeItem").removeClass("bt2Focused").find(".checkInArea").hide(200); // pulls the active class from anything that has it
                     $(nextOne).show(200).addClass("activeItem").addClass("bt2Focused").find(".checkInArea").show(200); // adds the active class to the next element found
                        // ||========================================================||
                        // || if coaching on one item, show the next of type but hide the last one also
                        // 
                             if(localStorage.coachingOnOneItem == true){
                              console.log("something happened");
                              $(activeOne).hide();
                             }
                   }


                 }
                 return false;
               }
               return true;
             }); 


// 'Previous Item' Shortcut 
//||=====================||
 $(document).keydown(function(e) { // determines what the openapple < keystroke does and when... 
    if ((e.which == '115' || e.which == '37' ) && (e.ctrlKey || e.metaKey)) // right arrow shift to next
    {
      e.preventDefault();
         if(localStorage.emotionDestination === "logModeConfiguration"){ // basically saying if your in the log Mode... then

          if  (localStorage.logModeView === "zoomedInView") // and if your zoomed on an item, then the following shortcut should work
          {
                       // the following commands name the active item and next item as variables and then pull the active item class
                      // and visibility from one and add to the next.. 


                      activeOne = $("#initialLogDestination").find(".activeItem");
                      console.log("value of log mode set to "+localStorage.logMode)
                      classOfActiveOne = ("."+localStorage.logMode+"Item")
                      console.log("active one type is " + classOfActiveOne)
                      lastOne = $("#initialLogDestination").find(".activeItem").prevAll(classOfActiveOne+":first");
                      $(activeOne).removeClass("activeItem").removeClass("bt2Focused").find(".checkInArea").hide(200);
                      $(lastOne).show(200).addClass("activeItem").addClass("bt2Focused").find(".checkInArea").show(200);



                    }
                  }
                  return false;
                }
                return true;
              }); 


// 'Add AIM DIV to a log item' Shortcut 
// =================================== //
 $(document).keydown(function(e) { // determines what the openapple 3 keystroke does and when... 
    if ((e.which == '115' || e.which == '51' ) && (e.ctrlKey || e.metaKey)) // right arrow shift to next
    {
      e.preventDefault();
         if(localStorage.emotionDestination === "logModeConfiguration"){ // basically saying if your in the log Mode... then

          if  (localStorage.logModeView === "zoomedInView") // and if your zoomed on an item, then the following shortcut should work
          {
                       // the following commands name the active item and next item as variables and then pull the active item class
                      // and visibility from one and add to the next.. 

                      console.log("something is happenin");
                      addAimDivToThis();



                    }
                  }
                  return false;
                }
                return true;
              }); 





//   Section 7  @7
//====================================================================================================================||

// Contents Include:
// FireBase Setup 

// // For Data Retention 
// // To replace all 'local storage usage' 

//===============================


$(document).ready(function(){

  //var myDataRef = new Firebase('https://jo150j35kdx.firebaseio-demo.com/');

});



// #Next - Log mode is not stored nor retreived in local storage, and should be because emotiondestination and logmodeview 
// are variables which determine what works and what does not... what modes you are in... for now you need to 
// choose a list on reload before back, forward and emotion buttons will work... good to know.. 



// Keystroke Setup
//==================================================================================

// openapple up and down
//======================================

// Additional Keystroke shortcuts I want to see include:
// 'coach me on this' keystroke shortcut
// spacebar when highlighting a task but not zoomed in to create new underneath this one
//======================================

$(document).ready(function(){


      $('body').on('click', '.moveUp', function moveUp() { // moves an element up on a list
       a = $(this).parent().parent(); 
       $(this).parent().parent().prev().before(a); 

     });

      $('body').on('click', '.moveDown', function moveDown() { // moves an element up on a list
       a = $(this).parent().parent(); 
       $(this).parent().parent().next().after(a); 

     });
    });



// 'Move Item down' Shortcut 
// =================================== //
  $(document).keydown(function(e) { // down arrow
    if ((e.which == '115' || e.which == '40' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      a = $(".bt2Focused"); 
      $(a).next().after(a); 

      return false;
    }
    return true;
  }); 

// 'Move Item up' Shortcut 
// =================================== //
 $(document).keydown(function(e) { // up arrow
  if ((e.which == '115' || e.which == '38' ) && (e.ctrlKey || e.metaKey))
  {
    e.preventDefault();
    a = $(".bt2Focused"); 
    $(a).prev().before(a); 
    return false;
  }
  return true;
}); 


// Guided Meditation setup  (( in construction))
//==================================================================================

 $(document).ready(function(){


  // Initialization of Relate to the Moment cues - 

   // object based approach

   var relatingGuides = {
    noticing:{
      default: 'Allow yourself to take in the full range of your immediate experience and simply notice what it is that you notice...'
    },
    relaxing:{
      default: 'Let yourself relax into the qualities and textures of this moment, of what it is like to be you...'
    },
    welcoming: {
      default: "Let yourself 'open your arms wide' to this moment as though you are opening your front door fully to let it be what it is..."
    },

    listening : {
      movement: {},
      stillness: {},
      emergence: {},
      being: {},
      uniqueGift: {},
      integrity: {},
    },

    Inquiring : {
      movement: {},
      stillness: {},
      emergence: {},
      being: {},
      uniqueGift: {},
      integrity: {}, 
    },

    Being : {}

  }; 

  console.log(relatingGuides);


// overarching log of any practice set up ((under construction))
//==================================================================================


function logThisPractice(contents, cue, type){ // creates a new journal entry... 

        //x= $(contents); // save the value of the input field
        // create a container for the comment
        var newPanel = document.createElement ("DIV");        // creates the div container
        newPanel.setAttribute("class",'bt3 panel-body bt2Checkin journalItem');     // set class
                             // create & append the input

            // set up for the cue
        var newCue = document.createElement("DIV");          // create a P and name it t
        $(newCue).html(cue);
        newPanel.appendChild(newCue);                         // put the input field w value set in the input area
        
        var newParagraph = document.createElement("DIV");          // create a P and name it t
        newParagraph.setAttribute("class","inline commentaryItem ");
        $(newParagraph).html(contents);
        newPanel.appendChild(newParagraph);              

        var f = document.createElement("BUTTON");  // trigger button
        var input = document.createElement("TEXTAREA");  // hidden edit field area ++
        input.setAttribute("style","display:none");
        input.setAttribute("class","inline form-control editComment");
        $(input).val(contents); // setting its values
        newPanel.appendChild(input);

        f.setAttribute("class","btn btn-sm btn-link pull-right inline");
        f.setAttribute("title","hide this");
        f.innerHTML = ("-");
        newPanel.appendChild(f);    // text node to <div>
        
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right inline deleteThisComment");
        re.setAttribute("title","Delete");
        re.innerHTML = "x";
        newPanel.appendChild(re);    // delete button to <div>      


// add something button obsolete, removed
        // var addButton = document.createElement("BUTTON");  // trigger button
        // addButton.setAttribute("class","btn btn-sm btn-link pull-right inline addButton");
        // addButton.setAttribute("title","Add Something");
        // addButton.innerHTML = ("+");
        // newPanel.appendChild(addButton);    // text node to <div>

        $(".focus").find(".checkInArea").find('textarea:last').before(newPanel); // focus back on the input field

    

}; 


//   Section 8   @8
//====================================================================================================================||

// Contents Include:
// || Templating for actively moveable coaching elements!! 
// ||  New and Hot and happening, building now




// ||========================================================||
// || Elements for access clearing part 2 in development
// ||========================================================||


function activateMainClearingBody(){



  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();
  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();

  // ||========================================================||
// || If its a goal or habit your looking at, guide the subject to take into account the 5 essential leverage points of it in prep for the clearing
// 
      if ((ItemUnderInvestigationType === "Goal") || (ItemUnderInvestigationType === "Habit")){

          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle+"<br><br>Take in its degree of congruity with your values, its importance, your aim in regards to it, your degree of integrity with this aim, and your degree of commitment to being in integrity with this aim.").slideDown(1000);}

// ||========================================================||
// || If its an aspiration, offer the following prompt:
// 
      else if (ItemUnderInvestigationType === "Aspiration"){

          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle+"<br>Take in its degree of congruity with your values, its importance, your degree of integrity with it, and your degree of commitment to being in integrity with it.").slideDown(1000);}
// ||========================================================||
// || if its a decision, open coaching this way:
// 
      else if (ItemUnderInvestigationType === "Decision"){

          $(".access2helper").html("Consider one option of this "+ ItemUnderInvestigationType +" Ask yourself what it will be like to be you in 5 years if you make this choice.").slideDown(1000);}


      else if (ItemUnderInvestigationType === "Person"){
          $(".access2helper").html("Bring an image of this "+ ItemUnderInvestigationType +" to mind, holding an open, curious viewpoint:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}


         else if (ItemUnderInvestigationType === "Inquiry"){
          $(".access2helper").html("Allowing an open, curious viewpoint, as best you can, ask yourself this question:<br>"+ItemUnderInvestigationTitle).slideDown(500);}


            else if (ItemUnderInvestigationType === "Practice"){
          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +", holding an open, curious viewpoint:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}



      else{

// ||========================================================||
// || Otherwise, hit them with this overarching prompt to cover the rest of the bases
// 

  $(".access2helper").html("Sit with this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}

// ||========================================================||
// || Setup for the secondary prompts
// ||========================================================||



    setTimeout(function(){ 
      if (ItemUnderInvestigationType === "Inquiry")

// ||========================================================||
// || set up coaching for an inquiry
// 
              {
                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this inquiry, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness.");
                           $(".access2helperb").slideDown(1000);
              }
              else if (ItemUnderInvestigationType === "Journal"){
// ||========================================================||
// || connect to an experience while reflecting on a journal entry
// 
                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while reviewing and taking in the contents of your journal, including anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this. <br> Include any resistance to this.");
                           $(".access2helperb").slideDown(1000);


              }


               else if (ItemUnderInvestigationType === "Goal"){
// ||========================================================||
// || connect to an experience while reflecting on a journal entry
// 
                   $(".access2helperb").html("Who can you be such that you are clear about your aim in regard to this "+ItemUnderInvestigationType+", in explicit integrity with it, and fiercely committed to continuing this to the extent to which this is congruent with your values?  <br><br>Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while looking at this, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness.");
                           $(".access2helperb").slideDown(1000);


              }
// ||========================================================||
// || set up first coaching for am appreciation or insight
// 
              else if ((ItemUnderInvestigationType === "Appreciation") || (ItemUnderInvestigationType === "Insight") || (ItemUnderInvestigationType === "Inspiration")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this point of "+ItemUnderInvestigationType+", including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }

// ||========================================================||
// || first coaching for a decision
// 
              else if ((ItemUnderInvestigationType === "Decision") || (ItemUnderInvestigationType === "Projection")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this "+ItemUnderInvestigationType+", including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }
// ||========================================================||
// || First coaching on if its a person or practice
// 
              else if ((ItemUnderInvestigationType === "Person") || (ItemUnderInvestigationType === "Practice")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while bringing this "+ItemUnderInvestigationType+" to mind, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }
              else
// ||========================================================||
// || catch all for everything else
// 
              {
                   $(".access2helperb").html("Allow, Welcome and Embrace anything which would inhibit, obscure, prevent, or block this possibility, including any resistance to this");
                           $(".access2helperb").slideDown(1000);
              }
   }, 6000);




      setTimeout(function(){ 

    $(".access2helperc").html("Turning your attention to your experience as it is, ask yourself the question: <br> 'What do I do with this?'<br> Simply look and see");  
      $(".access2helperc").slideDown(1000);

         }, 10000);


      setTimeout(function(){ 

    $(".access2helperd").html("Include in your embrace anything which would not allow this: include any judgments, conclusions, confusion, conflations, assumptions, inhibitions, contractions & distractions ");  
      $(".access2helperd").slideDown(1000);

         }, 18000);


      setTimeout(function(){ 

    $(".access2helpere").html("Let yourself listen with your whole body as active, humming, receptive instrument for such");
      $(".access2helpere").slideDown(1000);

         }, 22000);



      setTimeout(function(){ 

    $(".access2helperf").html("Would you be willing to allow, welcome, embrace & listen to all of it, including any resistance to this, and let it go, release it, as best you can, in this moment?");
      $(".access2helperf").slideDown(1000);

         }, 26000);


}



// ||========================================================||
// || actions to trigger a clearing on an inquiry
// 

function activateClearing(){
  
  $(".accessClearing").slideUp();
  $(".activeItem").siblings().slideUp();


// ||========================================================||
// || if you in pure access mode, do this one
// 
  if(localStorage.accessMode = true){

    activateMainClearingBodyAccess1();
  } 
// ||========================================================||
// || other wise this is default
// 

  else{

      activateMainClearingBody();

  }

  // if we are looking at an inquiry (logmode=inquiry) then lets pull the title into the inquiry here, if
  // we are not, lets define an inquiry for the element we are looking at, part 2 of that to be set up later.. 

// ||========================================================||
// || Setting up the overarching prompt here for this form of coaching
// ||========================================================||


  $(".accessGuidance").hide();  
  $("#access2").slideUp();

   setTimeout(function(){ 
    $("#access2").slideDown(400);},400);

  $(".access2helper").show();
  $(".access2form").focus();
}

// ||========================================================||
// || take all that arises obscuring ones view and clear it
// 

function clearObstacles(){

if (localStorage.coachingStyle == "accessConsciousness"){
  $(".access3helper").html("Excellent. <br>Allow yourself to utter these words: 'Good and Bad, Right and Wrong, Pod and Poc, All 9's, Shorts, Boys and Beyond'");}
  else{

      $(".access3helper").html("Excellent. <br>With a breath, let yourself have this experience. <br>Notice what happens.");}

  
  $("#access3").slideToggle();
  $(".access3helper").slideDown();
  $(".access3form").focus();
}


$('body').on('click', '.activateClearing', function() {
  activateClearing();
  //$("#accessClearing").slideUp();
  });  

$('body').on('click', '.clearObstacles', function() {
  clearObstacles();
  });  

// ||========================================================||
// || actions for after a clearing
// 


function returnToClearing(){

  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();
  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();
    $("#access3").slideToggle();
     $(".access2form").focus();
    $(".accessGuidance").hide();
    $(".access2helper").show();



// ||========================================================||
// || This is built for aspirations and goals, but adapted for inquiry, 
// further adaptation for other elements is expected to be important… for testing it is useable on everything
// 
activateMainClearingBody();

  //$(".access2helper").html("What arises now in being with this question? <br> And for all of this which arises now, Allow, welcome and embrace all of this. <br> Everything in this moment which arises in being with this inquiry. <br> And anything else which would inhibit this, all judgments, conclusions, assumptions, inhibitions, contractions, confusions, conflations, distractions, and anything else that would inhibit, obscure or prevent this, would you be willing to allow, welcome, embrace all of it, including any resistance to this, and let it go, release it, destroy it, uncreate it, for this moment and all of eternity, as best you can, in this moment?")


}





// ||========================================================||
// || access part 2 in development keystrokes (must be defined after functions)
// 



$('body').on('click', '.access2form', function () {

    clearObstacles();

});



$('body').on('click', '.toggleChildren', function () {
    console.log("something happened");
    $(this).next().toggle(400)

});

$('body').on('click', '.access3form', function () {

    returnToClearing();

});








$('body').on('keydown', '.access2form', function (e) {
  if (e.keyCode == 13) {

    e.preventDefault();
    clearObstacles();
  }

});

// ||========================================================||
// || trigger for pressing enter from within part 3
// 

$('body').on('keydown', '.access3form', function (e) {
  if (e.keyCode == 13) {

    e.preventDefault();
    returnToClearing();

  }

});



  $(document).keydown(function(e) { // show and hide toolbox w/openapple s
    if ((e.which == '115' || e.which == '53' ) && (e.ctrlKey || e.metaKey))
    {

      if(localStorage.coachingOnOneItem){
      e.preventDefault();
      activateClearing();
      }
      return false;
    }
    return true;
  }); 



// ||========================================================||
// || set up default values for an access inquiry #1
// || This is the FIRST BASIC access inquiry... on 'what do I do 
// || with what is...?''

function setAccessDefaults(){

  $("#accessClearing").find(".firstForm").val("This is ");
  $("#accessClearing").find(".secondForm").val("With this, I ");
  $("#accessClearing").find(".thirdForm").val("");
  $("#accessClearing").find(".fourthForm").val("By ");
  $("#accessClearing").find(".accessGuidance").hide();
  $("#accessClearing").find(".firstHelper").slideDown(1000);
  $("#accessClearing").find(".forms").hide();
  $("#accessClearing").find(".firstForm").show();



}


// ||========================================================||
// || set up for access question 1
// 

  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();
  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();



function launchAccessQuestion1(){
// this sets up the first question, sets up the first guidance and sets the default value, 
// I need to separate the setting up of the default value from this.. so that this doesnt
// reset partial answers... 
  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();
  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();

  $("#accessClearing").find(".firstHelper").html("<div class='panel-body '> "+ItemUnderInvestigationTitle+"</div>"+"<div class='panel-body'>In being with this "+ItemUnderInvestigationType+", connect to your experience as it is, what is this that you are navigating?</div>").slideDown(1000);
  $("#accessClearing").find(".forms").addClass("readOnly");
  $("#accessClearing").find(".firstForm").removeClass("readOnly");
  //$("#accessClearing").find(".nextStep").show();
  // ||========================================================||
// || This part to be activated for phone views
// 
  $("#accessClearing").find(".firstForm").focus();
};

// ||========================================================||
// || set up for access question 2
// 

function launchAccessQuestion2() { 
  $("#accessClearing").find(".secondHelper").html("<div class='panel-body'> "+"Ask yourself, 'what do I do with this?"+"</div>").slideDown(1000);
  $("#accessClearing").find(".secondForm").show();
  $("#accessClearing").find(".forms").addClass("readOnly");
  $("#accessClearing").find(".secondForm").removeClass("readOnly").show().focus();
}; 

// ||========================================================||
// || set up for access question 3
// 

function launchAccessQuestion3() { 
    $("#accessClearing").find(".thirdHelper").html("<div class='panel-body'> "+"Ask yourself, 'Can I change this?'"+"</div>").slideDown(1000);
  $("#accessClearing").find(".thirdForm").show();
  $("#accessClearing").find(".forms").addClass("readOnly");
  $("#accessClearing").find(".thirdForm").removeClass("readOnly").show().focus();
}; 

// ||========================================================||
// || set up for access question 4
// 

function launchAccessQuestion4() { 
  $("#accessClearing").find(".fourthHelper").html("<div class='panel-body'> "+"Ask yourself, 'If so, How?'"+"</div>").slideDown(1000);

  $("#accessClearing").find(".fourthForm").show();
  $("#accessClearing").find(".forms").addClass("readOnly");
  $("#accessClearing").find(".fourthForm").removeClass("readOnly").show().focus();
}; 





// ||========================================================||
// || Access unique part
// ||========================================================||




function activateMainClearingBodyAccess1(){



  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();
  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();

  // ||========================================================||
// || If its a goal or habit your looking at, guide the subject to take into account the 5 essential leverage points of it in prep for the clearing
// 
      if ((ItemUnderInvestigationType === "Goal") || (ItemUnderInvestigationType === "Habit")){

          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle+"<br><br>Take in its degree of congruity with your values, its importance, your aim in regards to it, your degree of integrity with this aim, and your degree of commitment to being in integrity with this aim.").slideDown(1000);}

// ||========================================================||
// || If its an aspiration, offer the following prompt:
// 
      else if (ItemUnderInvestigationType === "Aspiration"){

          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle+"<br>Take in its degree of congruity with your values, its importance, your degree of integrity with it, and your degree of commitment to being in integrity with it.").slideDown(1000);}
// ||========================================================||
// || if its a decision, open coaching this way:
// 
      else if (ItemUnderInvestigationType === "Decision"){

          $(".access2helper").html("Consider one option of this "+ ItemUnderInvestigationType +" Ask yourself what it will be like to be you in 5 years if you make this choice.").slideDown(1000);}


      else if (ItemUnderInvestigationType === "Person"){
          $(".access2helper").html("Bring an image of this "+ ItemUnderInvestigationType +" to mind, holding an open, curious viewpoint:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}


         else if (ItemUnderInvestigationType === "Inquiry"){
          $(".access2helper").html("Allowing an open, curious viewpoint, as best you can, ask yourself this question:<br>"+ItemUnderInvestigationTitle).slideDown(500);}


            else if (ItemUnderInvestigationType === "Practice"){
          $(".access2helper").html("Consider this "+ ItemUnderInvestigationType +", holding an open, curious viewpoint:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}



      else{

// ||========================================================||
// || Otherwise, hit them with this overarching prompt to cover the rest of the bases
// 

  $(".access2helper").html("Sit with this "+ ItemUnderInvestigationType +" with curiosity:<br>"+ItemUnderInvestigationTitle).slideDown(1000);}

// ||========================================================||
// || Setup for the secondary prompts
// ||========================================================||



    setTimeout(function(){ 
      if (ItemUnderInvestigationType === "Inquiry")

// ||========================================================||
// || set up coaching for an inquiry
// 
              {
                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this inquiry, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness.");
                           $(".access2helperb").slideDown(1000);
              }
              else if (ItemUnderInvestigationType === "Journal"){
// ||========================================================||
// || connect to an experience while reflecting on a journal entry
// 
                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while reviewing and taking in the contents of your journal, including anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this. <br> Include any resistance to this.");
                           $(".access2helperb").slideDown(1000);


              }


               else if (ItemUnderInvestigationType === "Goal"){
// ||========================================================||
// || connect to an experience while reflecting on a journal entry
// 
                   $(".access2helperb").html("Who can you be such that you are clear about your aim in regard to this "+ItemUnderInvestigationType+", in explicit integrity with it, and fiercely committed to continuing this to the extent to which this is congruent with your values?  <br><br>Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while looking at this, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness.");
                           $(".access2helperb").slideDown(1000);


              }
// ||========================================================||
// || set up first coaching for am appreciation or insight
// 
              else if ((ItemUnderInvestigationType === "Appreciation") || (ItemUnderInvestigationType === "Insight") || (ItemUnderInvestigationType === "Inspiration")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this point of "+ItemUnderInvestigationType+", including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }

// ||========================================================||
// || first coaching for a decision
// 
              else if ((ItemUnderInvestigationType === "Decision") || (ItemUnderInvestigationType === "Projection")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while being with this "+ItemUnderInvestigationType+", including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }
// ||========================================================||
// || First coaching on if its a person or practice
// 
              else if ((ItemUnderInvestigationType === "Person") || (ItemUnderInvestigationType === "Practice")){

                   $(".access2helperb").html("Notice, Allow, Welcome, Listen to and Embrace all of what arises in your experience while bringing this "+ItemUnderInvestigationType+" to mind, including any resistance to this and anything which would inhibit, obscure, prevent, fragment or constrict your awareness within this.");
                           $(".access2helperb").slideDown(1000);
              }
              else
// ||========================================================||
// || catch all for everything else
// 
              {
                   $(".access2helperb").html("Allow, Welcome and Embrace anything which would inhibit, obscure, prevent, or block this possibility, including any resistance to this");
                           $(".access2helperb").slideDown(1000);
              }
   }, 6000);




      setTimeout(function(){ 

    $(".access2helperc").html("Turning your attention to your experience as it is, ask yourself the question: <br> 'What do I do with this?'<br> Simply look and see");  
      $(".access2helperc").slideDown(1000);

         }, 10000);


      setTimeout(function(){ 

    $(".access2helperd").html("Include in your embrace anything which would not allow this: include any judgments, conclusions, confusion, conflations, assumptions, inhibitions, contractions & distractions ");  
      $(".access2helperd").slideDown(1000);

         }, 18000);


      setTimeout(function(){ 

    $(".access2helpere").html("Let yourself listen with your whole body as active, humming, receptive instrument for such");
      $(".access2helpere").slideDown(1000);

         }, 22000);



      setTimeout(function(){ 

    $(".access2helperf").html("Would you be willing to allow, welcome, embrace & listen to all of it, including any resistance to this, and let it go, release it, as best you can, in this moment?");
      $(".access2helperf").slideDown(1000);

         }, 26000);


}



//@coachme


// ||========================================================||
// || Access Clearing Launcher  //  @accesslauch
// ||  When Access Practice starts, initialize as so... 
// ||  ================================================== ||
// so I need this button to be a toggle truly, so It sets defaults sure, but it hides all if its already toggled... 
// so Ill just change the show to toggle and test that.. 




// ||========================================================||
// || Template functions - launch single lineage prototype  @template
//  @accessmode



function launchAccessPrototype(){

      $("#titleMarker").html("Access Consciousness Catalyst");
      $("#titleMarker").addClass("accessMode");
      localStorage.accessMode = true;
      $(".processMenuButton").hide()
      $(".activateClearing").show();
      $(".accessMethod").show();

}



function launchIntegralInquiryPrototype(){

      $("#titleMarker").html("Integral Inquiry");
      $("#titleMarker").removeClass("accessMode");
      localStorage.accessMode = false;
      $(".processMenuButton").show()
      $(".activateClearing").hide();

}


    // change title
    // hide all not accesss
    // // label all access coaching style and coaching style to demarcate in html




// 'Trigger ACCESS PROTOTYPE MODE'
// for demonstrating the viability of this app for access conciousness clearings
// =================================== //
  $(document).keydown(function(e) { // Trigger ACCESS prototype mode with openapple 0
    if ((e.which == '115' || e.which == '48' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      launchAccessPrototype();


      return false;
    }
    return true;
  }); 


// 'Trigger Integral inquiry MODE'
// for returning to an integral inquiry state
// =================================== //
  $(document).keydown(function(e) { // Trigger Integral Inquiry prototype mode with openapple 9
    if ((e.which == '115' || e.which == '57' ) && (e.ctrlKey || e.metaKey))
    {
      e.preventDefault();
      console.log("something happened");
      launchIntegralInquiryPrototype();


      return false;
    }
    return true;
  }); 




// ||========================================================||
// || function for adding dev access question triggers
// 




$('body').on('click', '.accessCoachingTrigger', function() {
  

    $(".coachingMethods").hide();
    $("#accessClearing").toggle();



  setAccessDefaults();
  launchAccessQuestion1();
  HideCheckInAreaOfActiveItem();


  var ItemUnderInvestigationType = $(".activeItem").find("button:first").html();
  var ItemUnderInvestigationTitle = $(".activeItem").find(".logItemTitle").html();

  

  });  




// NEW ADD TO JOURNAL FUNCTION
//============================

//|| This pulls from the various fields and sets the contents to the journal... new
//|| ============================================================================ ||



function addThisToTheJournal(destination) { 


// ||========================================================||
// || this is under construction and temp deactivated
// 
var target = $("#accessClearing");
// || pull field values || \\
firstFormInput = $(target).find(".firstForm").html();
console.log(firstFormInput+"is form 1 val") 
secondFormInput = $(target).find(".secondForm").html();
thirdFormInput = $(target).find(".thirdForm").html();
fourthFormInput = $(target).find(".fourthForm").html();
var journalEntry = document.createElement("Div")
var journalEntryp1 = document.createElement("Div")
var journalEntryp2 = document.createElement("Div")
var journalEntryp3 = document.createElement("Div")
var journalEntryp4 = document.createElement("Div")
$(journalEntry).append(journalEntryp1);
$(journalEntry).append(journalEntryp2);
$(journalEntry).append(journalEntryp3);
$(journalEntry).append(journalEntryp4);
$(journalEntryp1).html("<b>What this is:</b>"+ firstFormInput);
$(journalEntryp2).html("<b>What I do with this:</b>"+secondFormInput);
$(journalEntryp3).html("<b>Whether I can change this:</b>"+thirdFormInput);
$(journalEntryp4).html("<b>If so, how I can change this:</b>"+fourthFormInput);
$(".activeItem").find(".checkInAreaContents").prepend(journalEntry);

}








$('body').on('click', '.honeIn2', function() {

    if($(this).parent().parent().hasClass(".activeItem")){}else{
  // pull all selected elements of selection
  $("#initialLogDestination").find(".bt2Focused").removeClass("bt2Focused");  
  // pull all active item ready to be acted upon from that class selectioin
  $("#initialLogDestination").find(".activeItem").removeClass("activeItem");  
  // hide all to prep for showing the one you want to highlight... 
  $("#initialLogDestination").find(".checkInArea").hide();  
  // mark as shown
  $(this).parent().parent().addClass("bt2Focused");
  $(this).parent().parent().addClass("activeItem");
  // and show
  $(this).parent().siblings(".checkInArea").show();
  localStorage.logModeView = "zoomedInView";
  localStorage.emotionDestination = "logModeConfiguration";}

  });  


$('body').on('click', '.aimButton', function() {
  // pull all selected elements off selection
 // triggerEditingOfTheAimField();
  });  


// 'Hone on on this log item' Function 
// =================================== //
// This is the updated hone in via double click option that I am creating for the log items... 
// the class will be applied to logItems, and will open editing mode and will close it as well this time... 
// when double clicked, it will also remove focus from any other log items, so only one will be focused at 
// a time, which enables other functions to be applied to just the focused one in other functions... 

// It basically says if the log item is double clicked then check if its already expanded (via the activeItem class)
// and check that the user is not clicking on the title to edit it... but its not working, so I sense I can 
// simply add a hide button to the body to collapse, and that way it just expands, and thats it... when double
// clicked
$('body').on('dblclick', '.logItem2:not(.logItemTitle)', function honeInOnThisLogItem() {
  // pull all selected elements off selection

  $("#initialLogDestination").find(".bt2Focused").removeClass("bt2Focused");  
  // pull all active item ready to be acted upon from that class selectioin
  $("#initialLogDestination").find(".activeItem").removeClass("activeItem");  
  // hide all to prep for showing the one you want to highlight... 
  $("#initialLogDestination").find(".checkInArea").hide();  
  // mark as shown
  $(this).addClass("bt2Focused");
  $(this).addClass("activeItem");
  // and show
  $(this).find(".checkInArea").show();
  localStorage.emotionDestination = "logModeConfiguration";
  localStorage.logModeView = "zoomedInView";
});  
// when a check in gets double clicked it enters editing mode


// this function goes on a ((hide))  button placed as a direct sibling to a log item, if it must be 
// layers within, this needs to be edited... 
$('body').on('click', '.hideCheckInArea', function() {
  $("#initialLogDestination").find(".activeItem:first").find(".checkInArea").hide();  
  // $("#initialLogDestination").find(".activeItem").removeClass("activeItem");  
  localStorage.logModeView = "listView"; // CHANGE THIS
  $(this).parent().parent().parent().find(".checkInArea").hide();
});



//||  
//|| ============================================================================ ||



// 'Next Item' Shortcut 
// =================================== //

//|| This function to say, if .forms is focused and someone hits the tab key
//|| Then launch the next step... tried this with the enter key, but it was 
// also creating a new line and thus messing with formatting... 
//|| ================================================== ||


//|| This is my simple 'on enter' keypress handler, that is 'when x is selected' specific!!  YES!!

//@coachmeAccess



$('body').on('keydown', '.firstForm', function (e) {
  if (e.keyCode == 13) {

    console.log("something happened");
    e.preventDefault();
    launchAccessQuestion2();
  }

});




$('body').on('keydown', '.secondForm', function (e) {
  if (e.keyCode == 13) {
   e.preventDefault();
   launchAccessQuestion3();
 }
 
});



$('body').on('keydown', '.thirdForm', function (e) {
  if (e.keyCode == 13) {

    e.preventDefault();

    launchAccessQuestion4();
  }

});

// ||========================================================||
// || Set up what happens when the Enter key is struck on access form 4
// 

$('body').on('keydown', '.fourthForm', function (e) {



  if (e.keyCode == 13) {

    e.preventDefault();

    launchAccessQuestion1();
    //addThisToTheJournal();
    setAccessDefaults();     // set default values     
             }

           });






   




function HideCheckInAreaOfActiveItem(){

  $(".activeItem").find(".standardCheckInMethod").hide();
}

//|| Coach me on this controls... @CoachMe
//|| ============================================================================ ||


$('body').on('click', '.showCheckInAreaTrigger', function () {


    $(this).parent().parent().find(".standardCheckInMethod").show(400);
    $(this).parent().parent().find(".checkInAreaContents").show(400);
    $(this).addClass("hideCheckInAreaInputZone");
    $(this).html("Hide Check In Area");
    $(this).removeClass("showCheckInAreaTrigger");
// when a check in gets double clicked it enters editing mode
  });  


$('body').on('click', '.hideCheckInAreaInputZone', function () {


    $(this).parent().parent().find(".standardCheckInMethod").hide();
    $(this).parent().parent().find(".checkInAreaContents").hide(200);
    $(this).addClass("showCheckInAreaTrigger");
    $(this).html("Check In");
    $(this).removeClass("hideCheckInAreaInputZone");
// when a check in gets double clicked it enters editing mode
  });  



// ||========================================================||
// || on HideCheckinareainputzone when clicked, this hides the zone, and the contents
// 

$('body').on('click', '.hideCheckInAreaInputZone', function() {
  $("#initialLogDestination").find(".activeItem").find(".checkInAreaInputZone").slideUp();  
  $("#initialLogDestination").find(".activeItem").find(".checkInAreaContents").slideUp();  
  $("#initialLogDestination").find(".activeItem").removeClass("activeItem");  
  localStorage.logModeView = "listView"; // CHANGE THIS
  // $(this).parent().parent().parent().find(".checkInArea").hide();
});




//|| If you double click on a given field, it should launch that corresponding step... 
//|| ============================================================================ ||

           

$('body').on('click', '.firstForm', function resetToQuestion1() {
  launchAccessQuestion1(); 
// when a check in gets double clicked it enters editing mode
  });  

$('body').on('click', '.secondForm', function resetToQuestion2() {
  launchAccessQuestion2(); 
// when a check in gets double clicked it enters editing mode
  });  

$('body').on('click', '.thirdForm', function resetToQuestion3() {
  launchAccessQuestion3(); 
// when a check in gets double clicked it enters editing mode
  });  

$('body').on('click', '.fourthForm', function resetToQuestion4() {
  launchAccessQuestion4(); 
// when a check in gets double clicked it enters editing mode
  });  



  /// Version 2 Initialization Code  (( TEMP for TESTING, activating this on launch))
 $(".chomper").show(); //shows chomper 
 $("#main").show();
 $("#introMain0").hide()
 $("#fullintro").hide();
 $("#initialPracticeDestination").hide();


// log variable initialization values



//   Section 9   @9
//====================================================================================================================||

// Contents Include:
// || Views and Modes and links between them
// || To all be ported to angular controller 




$(".hideThis3rd").click(function(){
  $(this).parent().parent().parent().hide();
  console.log("something");
});

$(".hideThisElement").click(function(){
  $(this).parent().parent("#mainSpaceTitle").hide();
}); 

$(".hideThisElementAccess").click(function(){
  $(this).parent().parent("#accessClearing").hide();
}); 

$(".hideTheChomper").click(function(){
  $(".chomperMain").toggle();
});

$(".minimizeThisElement").click(function(){
  $(this).parent().next().toggle();
});

$(".toggleNextMain").click(function(){

  $(this).parent().next().toggle(800);
});

$(".toggleCustomBody").click(function(){
  $("#initialPracticeDestination").toggle(400);
});

$(".toggleLogBody").click(function(){
  $("#initialLogDestination").toggle(400);
});

$(".hideThis2nd").click(function(){
  $(this).parent().parent().hide();
  console.log("something");
});




        // for inquiries build
        $(".inquiry").click(function(){
          console.log("somethingnew");
        });

        // #Main Menu

          $(".emotionsMenuButton").click(function(){ // button menu parent toggle
           $(".allMainMenus:not(.emotionsMenu)").hide(400);
           $(".emotionsMenu").toggle(400);
         });

          $(".sensationMenuButton").click(function(){ // button menu parent toggle
            $(".allMainMenus:not(.sensationMenu)").hide(400);
            $(".sensationMenu").toggle(400);
          });
          
          $(".impulseMenuButton").click(function(){ // button menu parent toggle
           $(".allMainMenus:not(.impulseMenu)").hide(400);
           $(".impulseMenu").toggle(400);
         });

          $(".processMenuButton").click(function(){ 
          // button menu parent toggle
            $(".allMainMenus:not(.processMenu)").hide(400);
            $(".processMenu").toggle(400); 

        

          });

         $(".customizerMenuButton").click(function(){ // button menu parent toggle
          $(".allMainMenus:not(.customMenu)").hide(400);
          $(".customMenu").toggle(400);
        });


         $(".savedPracticeMenuButton").click(function(){ // button menu parent toggle
          $(".allMainMenus:not(.savedPracticeMenu)").hide(400);
          $(".savedPracticeMenu").toggle(400);
        });


        $(".logMenuButton").click(function(){ // button menu parent toggle
          $(".allMainMenus:not(.logMenu)").hide(400);
          $(".logMenu").toggle(400);
        });

          $(".experienceMenuButton").click(function(){ // button menu parent toggle
            $(".allMainMenus:not(.experienceMenuItems)").hide(400);
            $(".experienceMenuItems").toggle(400);
          });

          $(".longingsMenuButton").click(function(){ // button menu parent toggle
            $(".allMainMenus:not(.longingsMenu)").hide(400);
            $(".longingsMenu").toggle(400);
          });

          $(".relatingMenuButton").click(function(){ // button menu parent toggle
           $(".allMainMenus:not(.relatingMenu)").hide(400);   
           $(".relatingMenu").toggle(400);
         });


        });
  //@current


      // ||========================================================||
      // || Where the emotion buttons go
      // 
      // #addButton Action to add any button button to the Journal

    function addButton(name,type) {   
      var btn = document.createElement ("BUTTON");        
        btn.setAttribute("class","btn btn-default btn-md buttonItem "+"coachThis"+type);     // set class
        var t = document.createTextNode(name);       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>        
       
       // Target map: two main modes, log mode configuration and everything else,  if log mode configuration
       // user is looking at logs of some kind, so then it should be appended to the checkInAreaContents... 
       // of the active log item.  If its not in zoomed in view, user is not looking at a specific item, so it 
       // should do nothing, as there is no big picture check in for the overarching state of ones goals, intentions, 
       // etc. 

        if (localStorage.emotionDestination === "logModeConfiguration") { // if your focus is on your logs... and
                  if (localStorage.logModeView === "zoomedInView") { // if you are zoomed in on an item
                  // place at the beginning of the check in area's contents. 
                       $(".bt2Focused").find(".checkInAreaContents").prepend(btn); 
                      console.log("something happened 1");}
                  else{} // if not zoomed in do nothing
                }
                  


                  else{ // if not it log mode configuration do this:
                        var list = document.getElementById(localStorage.emotionDestination);   
                        console.log("something happened2");
                        list.appendChild(btn, list.firstChild);   

                  } 
      }; 



// ok, so I need to declare these variables outside of this function, then add to those
// variables (the array of objects) from withint he function... 






var practice = {}; // a single practice as object with a name and type
var practices = []; // an array of practices as objects

function addPractice(name,type) {   
  practice = {name:name, type:type};
  console.log(practice);
  practices[practices.length] = practice;
  localStorage.practices = practices;
  console.log("stored practices include: "+ localStorage.practices);
  var newPanel = document.createElement ("DIV");        
        newPanel.setAttribute("class","bt2 panel-body-pr focus");     // set class
        p = document.createElement("P");
        p.setAttribute("class","p2");
        newPanel.appendChild(p);         // trigger button  to <div>
        var q = document.createElement("BUTTON");  // trigger button
        q.setAttribute("class","btn btn-sm btn-info glyphicon glyphicon-chevron-right pull-left "+ " coachThis"+type);
        var z = document.createElement("INPUT");  // checkbox
        z.setAttribute("type","checkbox");
        z.setAttribute("class","checkbox-lg pull-left");
        p.appendChild(q);         // trigger button  to <div>
        p.appendChild(z);         // Append the checkbox to <div>
        var t = document.createTextNode("2nd Person Inquiry: " + name);       // Create a text node
        p.appendChild(t);    // text node to <div>
        var f = document.createElement("BUTTON");  // trigger button
        f.setAttribute("class","btn btn-sm btn-default glyphicon glyphicon-info-sign pull-right honeIn2");
        f.setAttribute("title","Hone in here");
        p.appendChild(f);    // text node to <div>
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-default glyphicon glyphicon-remove pull-right deleteThis");
        re.setAttribute("title","Delete");
        p.appendChild(re);    // text node to <div>       var re = document.createElement("BUTTON");  // trigger button
        
        var up = document.createElement("BUTTON");  // trigger button
        up.setAttribute("class","btn btn-sm btn-default glyphicon glyphicon-chevron-up pull-right moveUp");
        up.setAttribute("title","Move Up");
        p.appendChild(up);    // text node to <div>


      var down = document.createElement("BUTTON");  // trigger button
      down.setAttribute("class","btn btn-sm btn-default glyphicon glyphicon-chevron-down pull-right moveDown");
      down.setAttribute("title","Move Up");
        p.appendChild(down);    // text node to <div>

    // this is an experiment in adding a delete button 
        //var x = document.createElement("BUTTON");
        //x.setAttribute("class","btn btn-link glyphicon glyphicon-remove kill");
        //btn.appendChild(x);                                // Append the text to <button>
        var list = document.getElementById(practiceDestination)
        $(".chomperMain").show();
        list.appendChild(newPanel, list.firstChild);
        localStorage.currentPractice = $("#initialPracticeDestination").html(); // current functional system
      }; 

// @current
// next, I want this to include a comments field that appends additional inputs to itself... a check-in field



$(document).ready(function(){






$('body').on('click', '.deleteThisLilDiv', function () { // creates a new journal entry... 
  console.log("something happ")

    // filtering the types of divs I will delete so that as things change in the future
    // the risk of deleting entire items accidentally or entire encompassing divs is remediated.  If
    // I want to apply this tool to other div types later the classes need to be added here. 
    $(this).parent(".aimDiv").remove();
    $(this).parent(".commitmentDiv").remove();

  }); 



// this is the code for the integrity check button and button classes and states





// this is to make all the logged items highlight on click, and pulls focus from all siblings so only one 
// higlights at a time... setting up the "today" function

$('body').on('click', '.logItem2', function () { // creates a new journal entry... 

  $(this).addClass("bt2Focused");
  $(this).siblings().removeClass("bt2Focused");

}); 





$('body').on('click', '.editable', function () { // on clicking a log item

$(this).addClass("editComment");  // add editing formatting to this 

}); 


$('body').on('blur', '.editable', function () { // on blur of a log item

$(this).removeClass("editComment");  // pull editing formatting from the log item

}); 



// ||========================================================||
// || Extracted change of value functions so that I can trigger by keycode
// || These are the integrity button trigger functions

var shiftToIntegrityCheckLow = function (thisItem){

 $(thisItem).html("Way Out of Integrity <br> with this aim");
  $(thisItem).removeClass("btn-default");
  $(thisItem).addClass("btn-danger");
  $(thisItem).removeClass("integrityCheckUndefined");
  $(thisItem).addClass("integrityCheckLow");

}

var shiftToIntegrityCheckModerate = function (thisItem){


$(thisItem).removeClass("btn-danger");
  $(thisItem).addClass("btn-warning");

  $(thisItem).html("In Low Integrity <br> with this aim");
  $(thisItem).addClass("integrityCheckModerate");
  $(thisItem).removeClass("integrityCheckLow");


}

var shiftToIntegrityCheckHigh = function (thisItem){


  $(thisItem).removeClass("btn-warning");
  $(thisItem).addClass("btn-info");

  $(thisItem).html("In Med. Integrity <br> with this aim");
  $(thisItem).addClass("integrityCheckHigh");
  $(thisItem).removeClass("integrityCheckModerate");

}

var shiftToIntegrityCheckVeryHigh = function (thisItem){

$(thisItem).removeClass("btn-info");
$(thisItem).addClass("btn-primary");
$(thisItem).html("In High Integrity <br> with this aim");
$(thisItem).addClass("integrityCheckVeryHigh");
$(thisItem).removeClass("integrityCheckHigh");

}
var shiftToIntegrityCheckReset = function (thisItem){


// styling for moving into very high integrity mode
$(thisItem).removeClass("btn-primary");
$(thisItem).addClass("btn-success");
$(thisItem).html("In Fierce Integrity <br> with this aim");
$(thisItem).addClass("integrityCheckResetter");
$(thisItem).removeClass("integrityCheckVeryHigh");


}


var shiftToIntegrityCheckUndefined = function (thisItem){


// styling for resetting integrity mode

$(thisItem).removeClass("btn-success");
$(thisItem).addClass("btn-default");
$(thisItem).html("Integrity <br> w/ my Values");
$(thisItem).addClass("integrityCheckUndefined");
$(thisItem).removeClass("integrityCheckResetter");

}

// ||========================================================||
// || Integrity Check Keycodes
// 
// what the 1 key does depending on where your focused.. 
$('body').on('keydown', '.integrityCheck', function (e) {
  if (e.keyCode == 49) // if the user hits the 1
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-danger integrityCheckLow")
  $(this).html("Way Out of Integrity <br> with this aim");
}
   if (e.keyCode == 50) // if the user hits the 2
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-warning integrityCheckModerate")
   $(this).html("In Low Integrity <br> with this aim");
}

    if (e.keyCode == 51) // if the user hits the 3
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-info integrityCheckHigh")
  $(this).html("In Med. Integrity <br> with this aim");
 }

    if (e.keyCode == 52) // if the user hits the 4
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-primary integrityCheckVeryHigh")


$(this).html("In High Integrity <br> with this aim");

 }

    if (e.keyCode == 53) // if the user hits the 5
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-success integrityCheckResetter")
$(this).html("In Fierce Integrity <br> with this aim");

 }

    if (e.keyCode == 54) // if the user hits the 0
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integrityCheck pull-right btn-default integrityCheckUndefined")
    $(this).html("Integrity <br> w/ my Values");

 }
 
});


// ||========================================================||
// || committment check keycodes
// 



// ||========================================================||
// || Commitment Check Keycodes
// 
// what the 1 key does depending on where your focused.. 
$('body').on('keydown', '.commitmentCheck', function (e) {
  if (e.keyCode == 49) // if the user hits the 1
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-danger commitmentCheckLow")
  $(this).html("I am Considering<br> committing to this");
}
   if (e.keyCode == 50) // if the user hits the 2
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-warning commitmentCheckModerate")
  $(this).html("I am intending to be <br>in integrity with this aim");
}

    if (e.keyCode == 51) // if the user hits the 3
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-info commitmentCheckHigh")
  $(this).html("I am moderately committed <br>to integrity with this");
 }

    if (e.keyCode == 52) // if the user hits the 4
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-primary commitmentCheckVeryHigh")


$(this).html("I am Very Committed to <br>integrity with this");

 }

    if (e.keyCode == 53) // if the user hits the 5
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-success commitmentCheckResetter")
$(this).html("I am fiercely committed <br> to integrity with this");

 }

    if (e.keyCode == 54) // if the user hits the 0
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm commitmentCheck pull-right btn-default commitmentCheckUndefined")
$(this).html("My degree of commitment to being <br> in integrity with this aim");

 }
 
});

// ||========================================================||
// || end
// 


$('body').on('click', '.integrityCheckUndefined', function () { // creates a new journal entry... 
 var thisItem = $(this)
 shiftToIntegrityCheckLow(thisItem);

}); 


$('body').on('click', '.integrityCheckLow', function () { // creates a new journal entry... 
var thisItem = $(this)
 shiftToIntegrityCheckModerate(thisItem);

  
}); 

$('body').on('click', '.integrityCheckModerate', function () { // creates a new journal entry... 
var thisItem = $(this)
 shiftToIntegrityCheckHigh(thisItem);


}); 
$('body').on('click', '.integrityCheckHigh', function () { // creates a new journal entry... 

// styling for moving into high integrity mode
var thisItem = $(this)
 shiftToIntegrityCheckVeryHigh(thisItem);


}); 
$('body').on('click', '.integrityCheckVeryHigh', function () { // creates a new journal entry... 


var thisItem = $(this)
 shiftToIntegrityCheckReset(thisItem);

}); 

$('body').on('click', '.integrityCheckResetter', function () { // creates a new journal entry... 

var thisItem = $(this)
 shiftToIntegrityCheckUndefined(thisItem);

}); 



// ||========================================================||
// || priority chck
// 
$('body').on('keydown', '.integritySoulCheck', function (e) {
  if (e.keyCode == 9) // if the user hits the tab
  {
   e.preventDefault();
  $(this).prev().focus();
  }
})

$('body').on('keydown', '.priorityCheck', function (e) {
  if (e.keyCode == 9) // if the user hits the tab
  {
   e.preventDefault();
  $(this).prev().focus();
  }
})

$('body').on('keydown', '.integrityCheck', function (e) {
  if (e.keyCode == 9) // if the user hits the tab
  {
   e.preventDefault();
  $(this).prev().focus();
  }
})
// ||========================================================||
// || next div trigger
// 

$('body').on('keydown', '.commitmentCheck', function (e) {
  if (e.keyCode == 9) // if the user hits the tab
  {
   e.preventDefault();
   // This statement finds the visible logItem available next and focuses on the first 
   // evaluation field... it filters out hidden elements... 
  $(this).parent().parent().nextAll().find(".integritySoulCheck:visible").first().focus();
  }
})

// ||========================================================||
// || first div trigger
// 

$('body').on('keydown', '.logItemEditor', function (e) {
  if (e.keyCode == 9) // if the user hits the tab
  {
   e.preventDefault();
  $(".activeItem").find(".integritySoulCheck").focus();
  }
})


// ||========================================================||
// 
// what the 1 key does depending on where your focused.. 
$('body').on('keydown', '.priorityCheck', function (e) {
  if (e.keyCode == 49) // if the user hits the 1
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-danger priorityCheckLow")
  $(this).html("Very Low <br> Priority");
}
   if (e.keyCode == 50) // if the user hits the 2
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-warning priorityCheckModerate")
  $(this).html("Not very<br>important");
}

    if (e.keyCode == 51) // if the user hits the 3
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-info priorityCheckHigh")
  $(this).html("Moderate <br>Importance");
 }

    if (e.keyCode == 52) // if the user hits the 4
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-primary priorityCheckVeryHigh")


$(this).html("High <br>Importance");

 }

    if (e.keyCode == 53) // if the user hits the 5
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-success priorityCheckResetter")
$(this).html("Very High<br>Importance");

 }

    if (e.keyCode == 54) // if the user hits the 0
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm priorityCheck pull-right btn-default priorityCheckUndefined")
$(this).html("Importance<br> to me");

 }
 
});


// ||========================================================||
// || tab function
// 



// ||========================================================||
// || integrity soul check
// 

// ||========================================================||
// || integritySoul Check Keycodes
// 
// what the 1 key does depending on where your focused.. 
$('body').on('keydown', '.integritySoulCheck', function (e) {
  if (e.keyCode == 49) // if the user hits the 1
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-danger integritySoulCheckLow")
  $(this).html("Very low coherence <br> with my values");
}
   if (e.keyCode == 50) // if the user hits the 2
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-warning integritySoulCheckModerate")
  $(this).html("Low Coherence<br> w/ my values");
}

    if (e.keyCode == 51) // if the user hits the 3
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-info integritySoulCheckHigh")
  $(this).html("Moderate Coherence<br> w/ my values");
 }

    if (e.keyCode == 52) // if the user hits the 4
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-primary integritySoulCheckVeryHigh")


$(this).html("High Coherence <br> w/ my values");

 }

    if (e.keyCode == 53) // if the user hits the 5
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-success integritySoulCheckResetter")
$(this).html("Phenomenal Coherence <br> w/ my values ");

 }

    if (e.keyCode == 54) // if the user hits the 0
  {
   e.preventDefault();
   $(this).attr("class","btn btn-sm integritySoulCheck pull-right btn-default integritySoulCheckUndefined")
$(this).html("Coherence with <br>my Values");

 }
 
});




//   Section 10   @9
//====================================================================================================================||

// Contents Include:
// || Integrity and Congruity buttons and classes - New And Hot
// || To all be linked to object property methods which enable sorting by degree of congruity, priority, or a mix of the two...
// || To be the first congruity algorithm!




// integrity with my soul button and classes and functionality
// ||==========================================||

$('body').on('click', '.integritySoulCheckUndefined', function () { // creates a new journal entry... 

  $(this).html("Very low coherence <br> with my values");
  $(this).removeClass("btn-default");
  $(this).addClass("btn-danger");
  $(this).removeClass("integritySoulCheckUndefined");
  $(this).addClass("integritySoulCheckLow");

}); 


$('body').on('click', '.integritySoulCheckLow', function () { // creates a new journal entry... 

  $(this).removeClass("btn-danger");
  $(this).addClass("btn-warning");

  $(this).html("Low Coherence<br> w/ my values");
  $(this).addClass("integritySoulCheckModerate");
  $(this).removeClass("integritySoulCheckLow");

}); 

$('body').on('click', '.integritySoulCheckModerate', function () { // creates a new journal entry... 

  $(this).removeClass("btn-warning");
  $(this).addClass("btn-info");

  $(this).html("Moderate Coherence<br> w/ my values");
  $(this).addClass("integritySoulCheckHigh");
  $(this).removeClass("integritySoulCheckModerate");

}); 
$('body').on('click', '.integritySoulCheckHigh', function () { // creates a new journal entry... 

// styling for moving into high integritySoul mode
$(this).removeClass("btn-info");
$(this).addClass("btn-primary");
$(this).html("High Coherence <br> w/ my values");
$(this).addClass("integritySoulCheckVeryHigh");
$(this).removeClass("integritySoulCheckHigh");

}); 
$('body').on('click', '.integritySoulCheckVeryHigh', function () { // creates a new journal entry... 

// styling for moving into very high integritySoul mode
$(this).removeClass("btn-primary");
$(this).addClass("btn-success");
$(this).html("Phenomenal Coherence <br> w/ my values ");
$(this).addClass("integritySoulCheckResetter");
$(this).removeClass("integritySoulCheckVeryHigh");

}); 

$('body').on('click', '.integritySoulCheckResetter', function () { // creates a new journal entry... 
// styling for resetting integritySoul mode

$(this).removeClass("btn-success");
$(this).addClass("btn-default");
$(this).html("Coherence with <br>my Values");
$(this).addClass("integritySoulCheckUndefined");
$(this).removeClass("integritySoulCheckResetter");

}); 

// priority button and classes and functionality
// ||==========================================||
// // 


$('body').on('click', '.priorityCheckUndefined', function () { // creates a new journal entry... 

  $(this).html("Not very<br>important");
  $(this).removeClass("btn-default");
  $(this).addClass("btn-danger");
  $(this).removeClass("priorityCheckUndefined");
  $(this).addClass("priorityCheckLow");

}); 

$('body').on('click', '.priorityCheckLow', function () { // creates a new journal entry... 

  $(this).removeClass("btn-danger");
  $(this).addClass("btn-warning");

  $(this).html("Somewhat  <br>Important");
  $(this).addClass("priorityCheckModerate");
  $(this).removeClass("priorityCheckLow");

}); 

$('body').on('click', '.priorityCheckModerate', function () { // creates a new journal entry... 

  $(this).removeClass("btn-warning");
  $(this).addClass("btn-info");

  $(this).html("Moderate <br>Importance");
  $(this).addClass("priorityCheckHigh");
  $(this).removeClass("priorityCheckModerate");

}); 
$('body').on('click', '.priorityCheckHigh', function () { // creates a new journal entry... 

// styling for moving into high priority mode
$(this).removeClass("btn-info");
$(this).addClass("btn-primary");
$(this).html("High <br>Importance");
$(this).addClass("priorityCheckVeryHigh");
$(this).removeClass("priorityCheckHigh");

}); 
$('body').on('click', '.priorityCheckVeryHigh', function () { // creates a new journal entry... 

// styling for moving into very high priority mode
$(this).removeClass("btn-primary");
$(this).addClass("btn-success");
$(this).html("Very High<br>Importance");
$(this).addClass("priorityCheckResetter");
$(this).removeClass("priorityCheckVeryHigh");

}); 

$('body').on('click', '.priorityCheckResetter', function () { // creates a new journal entry... 
// styling for resetting priority mode

$(this).removeClass("btn-success");
$(this).addClass("btn-default");
$(this).html("Importance<br> to me");
$(this).addClass("priorityCheckUndefined");
$(this).removeClass("priorityCheckResetter");

}); 


// classess for my commitement to integrity with aim buttons... 

$('body').on('click', '.commitmentCheckUndefined', function () { // creates a new journal entry... 

  $(this).html("I am Considering<br> committing to this");
  $(this).removeClass("btn-default");
  $(this).addClass("btn-danger");
  $(this).removeClass("commitmentCheckUndefined");
  $(this).addClass("commitmentCheckLow");

}); 

$('body').on('click', '.commitmentCheckLow', function () { // creates a new journal entry... 

  $(this).removeClass("btn-danger");
  $(this).addClass("btn-warning");

  $(this).html("I am intending to be <br>in integrity with this aim");
  $(this).addClass("commitmentCheckModerate");
  $(this).removeClass("commitmentCheckLow");

}); 

$('body').on('click', '.commitmentCheckModerate', function () { // creates a new journal entry... 

  $(this).removeClass("btn-warning");
  $(this).addClass("btn-info");

  $(this).html("I am moderately committed <br>to integrity with this");
  $(this).addClass("commitmentCheckHigh");
  $(this).removeClass("commitmentCheckModerate");

}); 
$('body').on('click', '.commitmentCheckHigh', function () { // creates a new journal entry... 

// styling for moving into high commitment mode
$(this).removeClass("btn-info");
$(this).addClass("btn-primary");
$(this).html("I am Very Committed to <br>integrity with this");
$(this).addClass("commitmentCheckVeryHigh");
$(this).removeClass("commitmentCheckHigh");

}); 
$('body').on('click', '.commitmentCheckVeryHigh', function () { // creates a new journal entry... 

// styling for moving into very high commitment mode
$(this).removeClass("btn-primary");
$(this).addClass("btn-success");
$(this).html("I am fiercely committed <br> to integrity with this");
$(this).addClass("commitmentCheckResetter");
$(this).removeClass("commitmentCheckVeryHigh");

}); 

$('body').on('click', '.commitmentCheckResetter', function () { // creates a new journal entry... 
// styling for resetting commitment mode

$(this).removeClass("btn-success");
$(this).addClass("btn-default");
$(this).html("My degree of commitment to being <br> in integrity with this aim");
$(this).addClass("commitmentCheckUndefined");
$(this).removeClass("commitmentCheckResetter");

}); 





//   Section 11   @11
//====================================================================================================================||

// Contents Include:
// || Decision maker - multiple options creating in real time
// || On hold - low priority, under construction



// ==========
// ========== Under Construction - decision maker option item creating
/*
$('body').on('click', '.addOption', function () { // creates a new option for a decision entry... 

  logSomething("undefined", "Option");

// must connect to the decision
// just like logging something but needs to be connected to the parent decision

}); 
*/
// ==========






}); 


// @CoachME
var addCoachMeOnThisButton = function(where){


      // Integrity with my AIM Section and button - setup
          var coachMeOnThisDiv = document.createElement("DIV"); // create a new div to hold the coaching
          coachMeOnThisDiv.setAttribute("class","coachingOnThis p2 checkInArea");     // set class for finding it
         coachMeOnThisDiv.setAttribute("style","display:none");     // start it off hidden until triggered

        //PLACEMENT happens this line 
          $(".activeItem").find("textarea:first").before(coachMeOnThisDiv);    // place the aim div on the main item after the prior stuff
          
          //holding off on these buttons till I know what I want... pausing commitment button for actions
          var coachingTriggerButton = document.createElement("BUTTON");  // trigger button
          coachingTriggerButton.setAttribute("class","btn btn-sm btn-primary coachMeOnThis aimDiv pull-right");
          coachingTriggerButton.setAttribute("type","button");
          $(coachingTriggerButton).text("Coach Me On This");
         $(coachMeOnThisDiv).append(coachingTriggerButton);    // place integrity button on <div>
       }



       $('body').on('click', '.coachMeOnThis', function () {
        listTicker({ list: textlist , startIndex:0, trickerPanel: $(this).parent().find(".coachMeOnThis"), interval: 3 * 4000, });
        $(this).parent().find(".coachMeOnThis").toggle();
      });



//$$$
// ok this calls the function and should toggle the list from view too





//   Section 12   @12  @logsomething
//====================================================================================================================||

// Contents Include:
// || Main log item creation station, to be broken up into reuseable snippets... 
// || On hold - low-med priority, under construction




  function logSomething(name,type) {   // function for adding new item to the log, setting its classes
        log = {name:name, type:type};  // for assigning object/attributes to the item for recall later
        $("#initialLogDestination").children().removeClass("focus"); //  takes all logged items and pulls focus to prep for setting the new one as 'focused'
        $("#initialLogDestination").find("input").addClass("readOnly"); // pulls all inputs out of active state to focus on the new one by adding the readonly class

        // create the body of the new item
        

        
         // create the main div container for everything 
         // ============================================ //
        var mainLogItem = document.createElement ("DIV");       
        mainLogItem.setAttribute("class",'logItem2 bt3 panel-body  focus '+type+'Item');     // set class



/*

tr - table row 
Td - text area for the name 1/3
Td - intent area for who I must be 1/3
Td - check in area 1/3
/tr
Tr - for the rest of the active check in area
/tr

*/
        // Title Area
        // ============ //
         // create the p container for the title and put it on the main div 
         // ============================================ //
        p = document.createElement("div");
        p.setAttribute("class","p2 logItemTitleArea");
        mainLogItem.appendChild(p);         //  place paragraph on  <div>



        // create an input area
        var inputArea = document.createElement("DIV");
        inputArea.setAttribute("class","inline ")
        

        // Controls
        // ============ //
        // create honing in button
        var btn = document.createElement ("BUTTON");        
        btn.setAttribute("class",'btn btn-default btn-sm pull-left honeIn2');     // set class
        $(btn).html("<span id='title'>"+type+"</span>"+"<span id='completions'></span><span id='targetInterval'></span>")
        p.appendChild(btn);    

        // append the input
        var t = document.createElement("div");
        


        // Access Modification
        // ============ //
        if(name !== "Access Clearing"){ 
          $(t).text("New " + type );         
          }

        else{ $(t).text("New Access Clearing");         
          }
        t.setAttribute("class", "saveLogs inline logItemListView logItemTitle");        
        inputArea.appendChild(t);    // text input to <div>
        



        // Title Continued
        // ============ //
       // This is the title; the field where it will be edited. 

       var editSpace = document.createElement("TEXTAREA");
       editSpace.setAttribute("type", "text");     
       editSpace.setAttribute("rows", "2");         
       editSpace.setAttribute("class", "logItemEditor titleLogItemEditor form-control input-sm saveLogs inline");        
       editSpace.setAttribute("style", "display:none");        
       inputArea.appendChild(editSpace);    // text input to <div>



        // Controls
        // ============ //
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right deleteThis logItemDeleteButton");
        re.setAttribute("title","Delete");
        re.setAttribute("style","font-weight:bold;");
        $(re).text("X");  //⬆︎⬅︎➡︎➧⇧⇧xxx×X
        p.appendChild(re);    // delete button to <div>      
        



        // Commitment Element
        // ============ //
        if(type === 'Goal' || type === 'Aspiration'|| type === 'Habit' || type === 'Challenge' || type === 'Person'|| type === 'Practice'   ){
          // Integrity with my AIM Section and button - setup
           

          var commitmentButton = document.createElement("BUTTON");  // trigger button
          commitmentButton.setAttribute("class","btn btn-sm btn-default commitmentCheck commitmentCheckUndefined pull-right");

          // if mode offers this button, then let it be seen
          if(localStorage.commitmentIntegrityTriggersVisible == "true"){

          }else{
            commitmentButton.setAttribute("style","display:none;")
            if(_DEBUG){console.log("was false");}
          }
          commitmentButton.setAttribute("type","button");
          $(commitmentButton).html("Commitment to<br> Integrity");
          p.appendChild(commitmentButton);    // place integrity button on <div>



        }



        // Integrity Element
        // ============ //
    if(type === 'Goal' || type === 'Aspiration'|| type === 'Habit' || type === 'Challenge' || type === 'Person'|| type === 'Practice'   ){
          // Integrity with my AIM Section and button - setup
          // ===================================================== //
          // This creates an AIM DIV and adds it to the element... and an 
          // integrity with aim eval... 
          // I want to pull the button and put it on top... 



          // ===================================================== //
          // This part creates an integrity with aim button adds it to the element... 
          // I want to change where it adds it to
          var integrityWithAimButton = document.createElement("BUTTON");  // trigger button
          integrityWithAimButton.setAttribute("class","btn btn-sm btn-default integrityCheck integrityCheckUndefined pull-right");
          integrityWithAimButton.setAttribute("type","button");
          $(integrityWithAimButton).html("My Integrity <br> with this Aim");
          p.appendChild(integrityWithAimButton);    // place integrity button on <div>
 
          // if mode offers this button, then let it be seen
          if(localStorage.integrityAimTriggersVisible == "true"){}else{
            integrityWithAimButton.setAttribute("style","display:none;")
          }
/*
          // Integrity with my AIM Section and button - create and append the area
          var ta = document.createElement("div");
          $(ta).text("My Aim in relation to this "+type );         
          ta.setAttribute("class", "saveLogs inline logItemListView logItemTitle");        
          aimDiv.appendChild(ta);    // text input to <div>
          
          // Integrity with my AIM Section and button - create and append the input
          var editSpace2 = document.createElement("INPUT");
          editSpace2.setAttribute("type", "text");         
          editSpace2.setAttribute("class", "logItemEditor logItemTitle form-control input-sm saveLogs inline");        
          editSpace2.setAttribute("style", "display:none");        
          aimDiv.appendChild(editSpace2);    // text input to <div>
*/

        }


        // Importance Element
        // ============ //
        if(type === 'Goal' || type === 'Aspiration'|| type === 'Habit' || type === 'Challenge' || type === 'Inquiry' || type === 'Decision' || type === 'Person'|| type === 'Practice'   ){
          // sets up which log elements get the priority button

          var priorityButton = document.createElement("BUTTON");  // trigger button
          priorityButton.setAttribute("class","btn btn-sm btn-default inline priorityCheck priorityCheckUndefined pull-right");
          priorityButton.setAttribute("type","button");
          $(priorityButton).html("Importance<br>To Me");
          var priorityList = document.createElement("ul");  
          priorityList.setAttribute("style","visibility:hidden");
          priorityList.setAttribute("class","priorityCheckMenu");    
          p.appendChild(priorityButton);    // place integrity button on <div>
 
          // if mode offers this button, then let it be seen
          if(localStorage.priorityTriggersVisible == "true"){}else{
            priorityButton.setAttribute("style","display:none;")
          }

        }


        // Coherence Element
        // ============ //
        if(type === 'Goal' || type === 'Aspiration' || type === 'Habit'|| type === 'Practice' || type === 'Challenge'){
          // sets up which log elements get the integrity button
          var integrityButton = document.createElement("BUTTON");  // trigger button
          integrityButton.setAttribute("class","btn btn-sm btn-default inline integritySoulCheck integritySoulCheckUndefined pull-right");
          integrityButton.setAttribute("type","button");
          $(integrityButton).html("Coherence with<br> my Values");
          var integrityList = document.createElement("ul");  
          integrityList.setAttribute("style","visibility:hidden");
          integrityList.setAttribute("class","integrityCheckMenu");


          p.appendChild(integrityButton);    // place integrity button on <div>
    
          // if mode offers this button, then let it be seen
          if(localStorage.integrityTriggersVisible == "true"){}else{
            integrityButton.setAttribute("style","display:none;")
          }

        }



      // UNDER CONSTRUCTION  addCoachMeOnThisButton(); //$$$ adding the button function here
          p.appendChild(inputArea);    // input div to <p>




        var list = document.getElementById("initialLogDestination"); // This is WHERE its going... 

        // option experimentation -
        //if(type === "Option"){
        //list.appendChild(mainLogItem, $(".bt2Focused").find(".checkInArea"))} // Insert the new item at the beginning of the list


        //else{}



        list.insertBefore(mainLogItem, list.firstChild); // Insert the new item at the beginning of the list



        // CHECK IN CONTROL AREA
        // ============ //
        // space to check in on a goal... 
        // next: create a separate containing div to try to separate the check in area body from controls... 

        // created a checkinAreaMenu for just the unwavering controls of what controls are present, and now will be
        // creating a wavering controls element, this will toss in the air some of the traversal commands already
        // built, so making a point to move away from DOM traversal and towards class selectors to make the
        // app more adaptive to change w less debugging

// @CoachMe
        // Main Checkin Area
        // ============ //
        var checkInArea = document.createElement("DIV");  // create a hidden section containing the check in
        checkInArea.setAttribute("style","display:none"); // make sure its hidden until it is supposed to be seen
        checkInArea.setAttribute("class","checkInArea"); // make sure its hidden until it is supposed to be seen
        mainLogItem.appendChild(checkInArea);    // checkin DIV to Main DIV
 
        // Coaching Area (since mixing with the check in area caused layout problems)
        // ============ //
       var coachingArea = document.createElement("DIV");  // create a hidden section containing the check in
        coachingArea.setAttribute("class","coachingArea"); // make sure its hidden until it is supposed to be seen
        checkInArea.appendChild(coachingArea);    // checkin DIV to Main DIV



        // ====== //
        // ADDING AN AIM DIV

         // Integrity with my AIM Section and button - setup
          var aimDiv = document.createElement("DIV"); // create a new div to hold the aim area
          aimDiv.setAttribute("editable",true);     // set it to editable
          aimDiv.setAttribute("style","display:none");     // set it to editable
          aimDiv.setAttribute("class","aimDiv p2 panel-body aimPanelBody");     // set class for formatting
          //aimDiv.setAttribute("style","display:none");     // start it off hidden (now make sure all .checkinArea elements are shown when supposed to be)

        //PLACEMENT happens this line 
          $(coachingArea).prepend(aimDiv);    // place the aim div on the main item after the prior stuff
          

         // setting up a delete button
          var deleteThisButton = document.createElement("BUTTON");  // trigger button
          deleteThisButton.setAttribute("class","btn btn-sm btn-link deleteThisLilDiv aimDiv pull-right");
          deleteThisButton.setAttribute("type","button");
          $(deleteThisButton).text("X");
          $(aimDiv).append(deleteThisButton);    // place integrity button on <div>



           // The AIM title button  
         // ========================= //
          var aimTitle = document.createElement ("BUTTON");        
          aimTitle.setAttribute("class",'btn btn-default btn-sm pull-left aimButton');     // set class
          $(aimTitle).html("My Aim In <br> Relation to This");
          $(aimDiv).append(aimTitle);


         // The AIM info presentation 
         // ========================= //
          // Integrity with my AIM Section and button - create and append the area
          var myAim = document.createElement("div");
          $(myAim).html("My Aim in relation to this " );         
          myAim.setAttribute("class", "saveLogs inline logItemListView logItemTitle");        
          $(aimDiv).append(myAim);    // text input to <div>
          myAim.setAttribute("style", "display:none");        
        

         // The AIM info editing field 
         // ========================= //
          // Integrity with my AIM Section and button - create and append the input
          var editSpace2 = document.createElement("TEXTAREA");
          editSpace2.setAttribute("type", "text");         
          editSpace2.setAttribute("rows", "2"); 
          $(editSpace2).val("My Aim in Relation to this is ");        
          editSpace2.setAttribute("class", "logItemEditor aimField form-control input-sm saveLogs inline");        
          $(aimDiv).append(editSpace2);    // text input to <div>
          

          $(editSpace2).focus();

        // ======



        // Checkin MEnu Area that mods the control area
        // ============ //
       var checkInAreaControlMenu = document.createElement("DIV");  // create a hidden section containing the check in
        checkInAreaControlMenu.setAttribute("class","checkInAreaControlMenu"); // make sure its hidden until it is supposed to be seen
        checkInArea.appendChild(checkInAreaControlMenu);    // checkin DIV to Main DIV

         // Checkin controls :: Layout
        // ============ //

            // create and append a <br>

        var Break = document.createElement("BR");
        checkInArea.appendChild(Break);
   
        // Checkin Control Area
        // ============ //
       var checkInAreaControls = document.createElement("DIV");  // create a hidden section containing the check in
        checkInAreaControls.setAttribute("class","checkInAreaControls standardCheckInMethod"); // make sure its hidden until it is supposed to be seen
        checkInAreaControls.setAttribute("style","display:none;"); // make sure its hidden until it is supposed to be seen
        checkInArea.appendChild(checkInAreaControls);    // checkin DIV to Main DIV


         // Checkin controls :: Layout
        // ============ //

            // create and append a <br>

            var Break = document.createElement("BR");
            checkInArea.appendChild(Break);
       
        // Checkin controls for menu area
        // ============ //


              // create a button which will hide the check in area
              // =================================================== //
              var hideCheckInAreaButton = document.createElement("Button");
              hideCheckInAreaButton.setAttribute("class","btn btn-sm btn-link pull-left hideCheckInArea");
              $(hideCheckInAreaButton).html("hide");
              checkInAreaControlMenu.appendChild(hideCheckInAreaButton);

              // create a button which will trigger coaching on this
              // =================================================== //
              var coachingButton = document.createElement("Button");
              coachingButton.setAttribute("class","btn btn-sm btn-link pull-left coachMeOnThisMain");
              $(coachingButton).html("Coach Me On This");
              checkInAreaControlMenu.appendChild(coachingButton);


              // create a hidden access button
              // =================================================== //
              var accessButton = document.createElement("Button");
              accessButton.setAttribute("class","btn btn-sm btn-link pull-left accessCoachingTrigger coachingOptionButtons");
              accessButton.setAttribute("style","display:none");
              $(accessButton).html("Access 1");
              checkInAreaControlMenu.appendChild(accessButton);



        // ||========================================================||
        // || Add hidden Access button for developer mode
        //    Turned off for now - @DEVMODE
        //    @DEVMODE indicates areas where things are turned off unless in development

       

                var accessButton3 = document.createElement("button");
                accessButton3.setAttribute("class","btn btn-sm btn-link pull-left activateClearing");
                accessButton3.setAttribute("style","display:none");
                $(accessButton3).html("Activate Clearing");
                checkInAreaControlMenu.appendChild(accessButton3);




        // ||========================================================||
        // || Add a set interval button
        // 
       

         if(devMode){


                var setIntervalButton = document.createElement("button");
                setIntervalButton.setAttribute("class","btn btn-sm btn-link pull-left setInterval");
                setIntervalButton.setAttribute("style","display:visible");
                $(setIntervalButton).html("Set Interval");
                checkInAreaControlMenu.appendChild(setIntervalButton);

              };



              // create a standard Check in controls toggle button
              // =================================================== //
              var showCheckInControlsButton = document.createElement("Button");
              showCheckInControlsButton.setAttribute("class","btn btn-sm btn-link pull-left showCheckInAreaTrigger");
              showCheckInControlsButton.setAttribute("style","display:visible");
              $(showCheckInControlsButton).html("Check In");
              checkInAreaControlMenu.appendChild(showCheckInControlsButton);




        // Checkin controls :: AIM
        // ============ //

                // create a button which will add a "clarify your aim" trigger button to reveal that div
                // =================================================== // 

                var addAClarifyaimButton = document.createElement("Button");
                addAClarifyaimButton.setAttribute("class","btn btn-sm btn-link pull-left clarifyYourAim");
                $(addAClarifyaimButton).html("Clarify Your Aim");
                checkInAreaControlMenu.appendChild(addAClarifyaimButton);        


                var BR = document.createElement("BR");
                // pulling this for testing here...
                //checkInArea.appendChild(BR);    // checkin DIV to Main DIV

        // Checkin controls :: COMMENT
        // ============ //


             // create & append the check in input
              var checkIn = document.createElement("TEXTAREA"); // create a comment input field
              checkIn.setAttribute("type", "text");         // set type to text
              
              checkIn.setAttribute("class", "form-control input-sm saveLogs col-sm-8 standardCheckInMethod");  

                // set classes  
              checkIn.setAttribute("style", "display:none; max-width:100vw;");      // set classes     
              checkInAreaControls.appendChild(checkIn);    // append it to the check in div


        // Checkin controls :: LOG BUTTON
        // ============ //

            // create and append a button that will log the info to the item as a checkin 

            var checkInButton = document.createElement("BUTTON");
            checkInButton.setAttribute("class","btn btn-sm btn-info pull-left checkInButtonForItem standardCheckInMethod btn-block");
            checkInButton.innerHTML = "Check in";
            checkInAreaControls.appendChild(checkInButton);
            checkInButton.setAttribute("style", "display:none");         // set type to text

                


        // Checkin BODY
        // ============ //

        var checkInAreaContents = document.createElement("Div");
        checkInAreaContents.setAttribute("class","checkInAreaContents");
        checkInArea.appendChild(checkInAreaContents);

// *** Now make sure all the controls still work... if not make them DOM Specific
    // ADDING things works still. check. 
    // clarify your aim no longer works, diagnose this




          // ||========================================================||
          // || hide all access mode controls unless specifically triggered
          //    means for establishing trigger for a later date
          // 


          switch(accessMode){

            case "true":
              $(".accessCoachingTrigger").show();
              $(".activateClearing").show();
              break;
            default: 

              $(".accessCoachingTrigger").hide();
              $(".activateClearing").hide();

          }




        $("#initialLogDestination").find("input").first().focus(); // focuses in on the added input for immediate typing






      }; 




/*
     
Under construction, next step filtering, pulled from within the above code... until it works correctly... 

       if(logMode == 'NextStep'){
                // setting up 'add next step' function, which will have different filters then the rest, so
                // looking into changing it up a lil bit... if LogMode is NextSTep

                var list = $(".activeItem:first").find(".checkInArea") // setting the location... 
                // mainLogItem is the 'next step' in this case
                // 'list' is the destination pointer
                // normally it appends to the begginning... so in this case I want to adjust that part too... 
                console.log("list set to "+list)
               list.append(mainLogItem, list.firstChild); // Insert the new item at the beginning of the list


           } else {}


          if(logMode == 'NextStep'){// this is basically saying skipp all that follows when the logMode is 
            // nextstep (because we dont need a check in function for next steps... its too complicated for the
              //moment.. )

          }else{}

          */

          $(document).ready(function(){




            $('body').on('blur', '.journalItem,.commentaryItem,.editComment', function () {



            });



//   HTML Local Storage Places @13
//========================================||

// Contents Include:
// || Places where soon to be phased out html local storage is happening



// from Sensation: Noticing to Welcoming to Letting Go
$('body').on('click', '.saveLogs', function () {

  $('div input').each(function(){
    $(this).keyup(function(){
      $(this).attr('value',$(this).val());
    });
  });

});


//@coachMe

var accessCoachingMethod = $("#accessClearing").html();

// ||========================================================||
// || Reverses the Coach Me on This Buttons Functions and state
// 

$('body').on('click', '.coachingMeOnThis', function () {

    $(this).siblings(".coachingOptionButtons").hide();
    $(this).addClass("coachMeOnThisMain");
    $(this).removeClass("coachingMeOnThis");
    $("#initialLogDestination").children("."+localStorage.logMode+"Item").show();
    $(this).html("Coach Me On This");
    localStorage.coachingOnOneItem = false;

});





$('body').on('click', '.coachingOptionButtons', function () {

    localStorage.coachingOnOneItem = true;

});

$('body').on('click', '.clearObstacles', function () {

    localStorage.coachingOnOneItem = true;

});

$('body').on('click', '.activateClearing', function () {

    localStorage.coachingOnOneItem = true;

});


// if your in one of these items...
$('body').on('click', '.coachingMeOnThis', function () {

  $("#shadowWork").hide();


});



// if your in one of these items...
$('body').on('click', '.showCheckInAreaTrigger, .coachMeOnThisMain', function () {

  if($(".bt2Focused:first").hasClass("intervalDefined")){
    var focusedItem = $(".bt2Focused:first");

    startingValue = $(focusedItem).find("#completions").html();
    numberConverted = Number(startingValue);
    console.log("starting value is "+numberConverted);
    console.log("starting value plus one is is "+(numberConverted+1));
    $(focusedItem).find("#completions").text((numberConverted+1));
}


});

// ||========================================================||
// || set up for interval setting button on each item
// 



var setIntervalGo = function(){


  var targetInterval = prompt("how many times a week do you want to check in on this? (This system willl accommodate 1-7)");
  
  // Situations
  // case 1 - Interval not defined
  // signifier - no class "interval defined"
  // case 2 - Interval defined
  // signifier - class interval defined
  // effect - replace the target interval with the new one
  // how - angular linking is one option

  if(targetInterval != NaN && targetInterval > 0 && targetInterval <8){


if($(".bt2Focused:first").hasClass("intervalDefined")){

// ||========================================================||
// || if the interval has been defined set up this way
// 


  var focusedItem = $(".bt2Focused:first");
  $(focusedItem).find("#targetInterval").html(targetInterval);


}

else {

// ||========================================================||
// || if the interval has not been defined set up this way
// 

    // demarcate that this is now defined
  
  var focusedItem = $(".bt2Focused:first").addClass("intervalDefined");
  // put a line break after the title to initiate this
  $(focusedItem).find("#title").after("<br>");
  
  $(focusedItem).find("#completions").html(0);
    $(focusedItem).find("#completions").after("/");

  $(focusedItem).find("#targetInterval").html(targetInterval);

}




}




}



$('body').on('click', '.setInterval', function () {

  setIntervalGo();
});


// ||========================================================||
// || open apple i keyboard shortcut for interval setting function
// 

 $(document).keydown(function(e) { // 
    if ((e.which == '115' || e.which == '73' ) && (e.ctrlKey || e.metaKey))
    {

      e.preventDefault();
      setIntervalGo();

      return false;
    }
    return true;
  }); 









// from Sensation: Noticing to Welcoming to Letting Go
$('body').on('click', 'INPUT', function () {


// this is for tracking which item was the last to be focused upon, creating the effect of highlighting for example
$("INPUT").focus(function(){
          //console.log("This input field has gotten its focus.");
          $(this).parent().parent().siblings().find("input").addClass('readOnly'); // takes all non focused fields and applies the readonly state
          $(this).removeClass('readOnly');

        });


$("INPUT").blur(function(){
          //console.log("This input field has lost its focus.");
          $(this).addClass('readOnly');

        });


}); 

// 2nd draft of check in button
// =============================================

// aim = set contents and run this function for anything you want to log
// how = separate the logthispractice function (( new )) from the trigger of it... trigger is 
// just for when it triggers... 


//$('body').on('click', '.checkInButton2', "logThisPractice(contents)"); 

// naming this logThis so I can reuse it... 

$('body').on('click', '.checkInButton', function logThis() { // creates a new journal entry... 

        x = $(".bt2Focused:first").find(".checkInAreaControls").find("textarea:first").val();

        // x= $(this).prev().val(); // save the value of the input field
        var newPanel = document.createElement ("DIV");        // creates the div container
        newPanel.setAttribute("class",'bt3 panel-body bt2Checkin journalItem');     // set class
                             // create & append the input
        var newParagraph = document.createElement("DIV");          // create a P and name it t
        newParagraph.setAttribute("class","inline commentaryItem ");
        newParagraph.innerHTML = (x);                                      // set the input value to the users input
        newPanel.appendChild(newParagraph);                         // put the input field w value set in the input area
        
        var f = document.createElement("BUTTON");  // trigger button
        var input = document.createElement("TEXTAREA");  // trigger button
        input.setAttribute("style","display:none");
        input.setAttribute("class","inline form-control editComment");
        newPanel.appendChild(input);

        f.setAttribute("class","btn btn-sm btn-link pull-right inline");
        f.setAttribute("title","hide this");
        f.innerHTML = ("-");
        newPanel.appendChild(f);    // text node to <div>
        
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right inline deleteThisComment");
        re.setAttribute("title","Delete");
        re.innerHTML = "x";
        newPanel.appendChild(re);    // delete button to <div>      

        var addButton = document.createElement("BUTTON");  // trigger button
        addButton.setAttribute("class","btn btn-sm btn-link pull-right inline addButton");
        addButton.setAttribute("title","Add Something");
        addButton.innerHTML = ("+");
        newPanel.appendChild(addButton);    // text node to <div>

        // find the focused element to work with, find the checkinbutton within that, place
        // the new panel after that... 

        // prev one working sortof
        // $(".bt2Focused").find(".checkInArea").find('.checkInButton').after(newPanel); // focus back on the input field
        $(".bt2Focused").find(".checkInArea").find(".checkInButton").after(newPanel); // focus back on the input field

        $(this).prev().val(""); // clear the input field
        $(this).prev().focus(); // focus back on the input field


// @current

}); 


$('body').on('click', '.checkInButtonForItem', function logThis() { // creates a new journal entry... 
        // define variables
        var logItemType   ;
        var logItemTitle  ;
        var logItemTitle2  ;
        var x = "";
        
        // grab inputs
        x            = $(".bt2Focused:first").find(".checkInAreaControls:first").find("textarea:first").val();
        console.log("x " + x);
        logItemType  = $(".bt2Focused:first").find(".logItemTitleArea:first").find("#title").text();
        logItemTitle = $(".bt2Focused:first").find(".logItemTitle:first").text();


        // create data structure
        var newPanel = document.createElement ("DIV");        // creates the div container
        newPanel.setAttribute("class",'bt3 panel-body bt2Checkin journalItem');     // set class
                             // create & append the input
        var newParagraphopening = document.createElement("SPAN");          // create a P and name it t
        newParagraphopening.setAttribute("class","inline openingContent ");
        newParagraphopening.innerHTML = (logItemType + ": " + logItemTitle + " ~ ");                                      // set the input value to the users input
        newPanel.appendChild(newParagraphopening);   

        var newParagraph = document.createElement("SPAN");          // create a P and name it t
        newParagraph.setAttribute("class","inline commentaryItem ");
        newParagraph.innerHTML = (x);                                      // set the input value to the users input
        newPanel.appendChild(newParagraph);                         // put the input field w value set in the input area
        
        var f = document.createElement("BUTTON");  // trigger button
        var input = document.createElement("TEXTAREA");  // trigger button
        input.setAttribute("style","display:none");
        input.setAttribute("class","inline form-control editComment");
        newPanel.appendChild(input);

        // f.setAttribute("class","btn btn-sm btn-link pull-right inline");
        // f.setAttribute("title","hide this");
        // f.innerHTML = ("-");
        // newPanel.appendChild(f);    // text node to <div>
        
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right inline deleteThisComment");
        re.setAttribute("title","Delete");
        re.innerHTML = "x";
        newPanel.appendChild(re);    // delete button to <div>      

        
        // prev one working sortof
        // $(".bt2Focused").find(".checkInArea").find('.checkInButton').after(newPanel); // focus back on the input field
        $("#personalLog").find(".modal-body").prepend(newPanel); // focus back on the input field

        $(this).prev().val(""); // clear the input field
        $(this).prev().focus(); // focus back on the input field



}); 


// 2nd incarnation of the check in button function to reference the added
// checkInAreaContents class added to all new buttons as of 7.2.15
$(document).ready(function(){


function logThis(){
        console.log("somethinghappenin")
        x= $(".activeItem").find(".checkInAreaControls").find("textarea").val(); // save the value of the input field
        if(x !== ""){
        var newPanel = document.createElement ("DIV");        // creates the div container
        newPanel.setAttribute("class",'bt3 panel-body bt2Checkin journalItem');     // set class
                             // create & append the input
        var newParagraph = document.createElement("DIV");          // create a P and name it t
        newParagraph.setAttribute("class","inline commentaryItem ");
        newParagraph.innerHTML = (x);                                      // set the input value to the users input
        newPanel.appendChild(newParagraph);                         // put the input field w value set in the input area
        
        var f = document.createElement("BUTTON");  // trigger button
        var input = document.createElement("TEXTAREA");  // trigger button
        input.setAttribute("style","display:none");
        input.setAttribute("class","inline form-control editComment");
        newPanel.appendChild(input);

        f.setAttribute("class","btn btn-sm btn-link pull-right inline");
        f.setAttribute("title","hide this");
        f.innerHTML = ("-");
        newPanel.appendChild(f);    // text node to <div>
        
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right inline deleteThisComment");
        re.setAttribute("title","Delete");
        re.innerHTML = "x";
        newPanel.appendChild(re);    // delete button to <div>      

        var addButton = document.createElement("BUTTON");  // trigger button
        addButton.setAttribute("class","btn btn-sm btn-link pull-right inline addButton");
        addButton.setAttribute("title","Add Something");
        addButton.innerHTML = ("+");
        newPanel.appendChild(addButton);    // text node to <div>

        // find the focused element to work with, find the checkinbutton within that, place
        // the new panel after that... 

        // prev one working sortof
        // $(".bt2Focused").find(".checkInArea").find('.checkInButton').after(newPanel); // focus back on the input field
        $(".bt2Focused").find(".checkInAreaContents:first").prepend(newPanel); // focus back on the input field

        $(".activeItem").find(".checkInAreaControls").find("textarea").val("").focus(); // clear the input field
         //  &focus back on the input field

}
// @current

}


// ||========================================================||
// || command enter keyboard shortcut for logging from within an input
// 

  $('body').on('keydown', '.saveLogs', function (e) {


  $(document).keydown(function(e) { // 
    if ((e.which == '115' || e.which == '13' ) && (e.ctrlKey || e.metaKey))
    {

      logThis();
      e.preventDefault();


      return false;
    }
    return true;
  }); 
});



$('body').on('click', '.checkInButton2', function () { // creates a new journal entry... 

      logThis();
}); 


}); 


$('body').on('click', '.addButton', function () { // creates a new journal entry... 


        var newCommentaryField = document.createElement("DIV");
        newCommentaryField.setAttribute("editable",true);     // set class

        var f = document.createElement("BUTTON");  // trigger button
        f.setAttribute("class","btn btn-sm btn-link pull-right inline");
        f.setAttribute("title","hide this");
        f.innerHTML = ("-");
        newCommentaryField.appendChild(f);    // text node to <div>
        
        var re = document.createElement("BUTTON");  // trigger button
        re.setAttribute("class","btn btn-sm btn-link pull-right inline deleteThisComment");
        re.setAttribute("title","Delete");
        re.innerHTML = "x";
        newCommentaryField.appendChild(re);    // delete button to <div>      

        var addButton = document.createElement("BUTTON");  // trigger button
        addButton.setAttribute("class","btn btn-sm btn-link pull-right inline");
        addButton.setAttribute("title","Add Something");
        addButton.innerHTML = ("+");
        newCommentaryField.appendChild(addButton);    // text node to <div>

        $(this).after(newCommentaryField); // focus back on the input field

        $(this).focus(); // focus back on the input field


// @current

}); 




$('body').on('focus', '.bt2Checkin', function () { 



// whatever you want to have happen when a check in gets focused on
}); 


$('body').on('blur', '.bt2Checkin', function () { 

// whatever you want to have happen when a check in loses focus


}); 

// Development Notes
// =================== //
// 

// Diagnostic 
// =================== //
// All seems to be working here

// Class Key 
// =================== //
// bt2checkin - this is a class for a journal item containing an editable field,
//          which causes the editable field to have the editable functionality
// logItemTitle - this is a class for an editable title field, which triggers
//          editable functionality




// =================== //
// These functions trigger editability

$('body').on('dblclick', '.bt2Checkin', function textAreaToEditMode() { 
// when a check in gets double clicked it enters editing mode

    textContents = $(this).find('.commentaryItem').html(); // get the text contents from the paragraph displayed
    $(this).find('.commentaryItem').hide();  // hide the paragraph field 
    inputField = $(this).find('.editComment');  // grab the input field
    $(this).find('.editComment').show(); // show the input field
    $(inputField).val(textContents); // fill in the input field
  }); 


$('body').on('blur', '.bt2Checkin', function textAreaOutOfEditMode() { 
// when editing mode is blurred it leaves editing mode

    textContents = $(this).find('.editComment').val(); // get the text contents from the paragraph displayed
    $(this).find('.editComment').hide();  // hide the paragraph field
    displayed = $(this).find('.commentaryItem');  // grab the input field
    $(this).find('.commentaryItem').show(); // show the input field
    $(displayed).html(textContents); // fill in the input field
    // save the data
    // tell the console your saving
    console.log('data saved as per check in area blur')
  }); 




$('body').on('dblclick', '.logItemTitle', function textFieldToEditMode() { 
// when a logItem Title (such as a goal title) gets double clicked it enters editing mode
// when a logItem Title (such as a goal title) gets double clicked it enters editing mode

    // the title is displayed, grab its text contents
    textContents = $(this).text(); 
    // hide the paragraph field
    $(this).hide();  
    // save its value
    inputField = $(this).siblings('.logItemEditor');  
    // show the input field
    $(this).siblings('.logItemEditor').show().focus(); 
    // populate it
    $(inputField).val(textContents); // fill in the input field

  }); 


$('body').on('blur', '.logItemEditor', function textFieldOutOfEditMode() { 
// when editing mode is blurred it leaves editing mode

    // grab the new title from the input value
    textContents = $(this).val(); 
    // hide the input field
    $(this).hide();  // hide the paragraph field
    // grab the title paragraph
    displayed = $(this).siblings('.logItemListView');  // grab the input field
    // show it
    $(this).siblings('.logItemListView').show(); // show the input field
    // populate it
    $(displayed).text(textContents); // fill in the input field
    // save the data
  }); 



// This version of the above 2 controls generated to preserve the functionality of the old code
// while creating functionality for a new structure... 
// =========== // 

$('body').on('dblclick', '.logItemTitle', function textFieldToEditMode() { 
// when a logItem Title (such as a goal title) gets double clicked it enters editing mode
// when a logItem Title (such as a goal title) gets double clicked it enters editing mode

    // the title is displayed, grab its text contents
    textContents = $(this).text(); 
    // hide the paragraph field
    $(this).hide();  
    // save its value
    inputField = $(this).siblings('.logItemEditor');  
    // show the input field
    $(this).siblings('.logItemEditor').show().focus(); 
    // populate it
    $(inputField).val(textContents); // fill in the input field

  }); 


$('body').on('blur', '.logItemEditor', function textFieldOutOfEditMode() { 
// when editing mode is blurred it leaves editing mode

    // grab the new title from the input value
    textContents = $(this).val(); 
    // hide the input field
    $(this).hide();  // hide the paragraph field
    // grab the title paragraph
    displayed = $(this).siblings('.logItemListView');  // grab the input field
    // show it
    $(this).siblings('.logItemListView').show(); // show the input field
    // populate it
    $(displayed).text(textContents); // fill in the input field
  }); 







// from Sensation: Noticing to Welcoming to Letting Go
$('body').on('click', '.saveThisPractice', function () {
  var name = prompt("name it (under construction)");
  localStorage.name = $("#initialPracticeDestination").html();
  console.log(localStorage.name);
    var newPractice = document.createElement("BUTTON");  // trigger button
    newPractice.setAttribute("class","btn btn-block btn-info ");

    newPractice.setAttribute("onclick", 'loadThisPractice()');
    // we need to set the trigger function as an onclick attribute here, 
    //but lets make sure this works and saves first
    var t = document.createTextNode(name);  // 5  create a text node and call it t <><>
    newPractice.appendChild(t); 
    $(".savedPracticeMenu").after(newPractice);     

  });




/*

$('body').on('click', '.coachThisIntegration', function () {
  $(this).parent().fadeOut(function(){         
   quality = $(this).parent().text();
   type = "2nd Person Inquiry";
   $(this).parent().text("Welcome the " + quality +" as best you can, including any resistance to this" )
   $(this).removeClass("coachThisIntegration" )
   $(this).addClass("coachThisIntegration2" )
   $(this).fadeIn();
 });
});
*/



// ok... so the text will vary depending on what kind of experience this is... so
// i need to map out the type of experience in the addbutton step, and then create
// conditional elements here... plus I want to plan for being able to change
// the coaching style and add coaching style elements... which is interesting, because
// it changes what the coaching elements are... varibles so far include type of quality
// and name of quality... from there it works.. 


// from Sensation: Noticing to Welcoming to Letting Go
$('body').on('click', '.coachThisSensation', function () {
  $(this).fadeOut(function(){

    $(this).addClass('btn-block');
    quality = $(this).text();
    type = "sensation";
    console.log(quality + " "+type)
    $(this).text("Welcome this " + quality +" as best you can, including any resistance to this" ).fadeIn();
    $(this).fadeIn();
    $(this).removeClass("coachThisSensation" )
    $(this).addClass("coachThisSensation2" )

  });



});


//
// this basically sets a variable logModeView to list to determine what functions should 
// trigger, and choosing to zoom views will switch this value to zoomedInView
$('body').on('click', '.logTrigger', function () {
  $(".checkInArea").hide()
  $(".coachingMethods").hide()
  localStorage.logModeView = "listView";
  localStorage.emotionDestination = "logModeConfiguration";
  localStorage.coachingOnOneItem = false;

});



$('body').on('click', '.clarifyYourAim', function () {

$(this).parent().parent().find(".aimDiv").toggle();

});



// THIS IS WHAT I AM WORKING ON $$$  (( blocked this out until its time to work on it again))
//$('body').on('click', '.logTrigger', function () {triggerOptions.list = textlist;}) //given that textlist is an array }




//@current - this function filters out all elements from the list incongruent with the chosen type to display
// only one category of item... 

// hoping this is just connected to these buttons in the log mode.. because I am about to change it up and make
// sure that it accounts for changing where the log mode lands itself.. 




//   Section 2 (continued here)   @2
//====================================================================================================================||

// Contents Include:
// || Log and View Modes 

$('body').on('click', '.honeInHere', function () {
   $(this).siblings().toggle(400); // hides main intro list


 });

$('body').on('click', '.showLogItems', function () {
   $("#initialLogDestination").children().show(400); // shows all log items
   localStorage.logMode = "All";

 });



$('body').on('click', '.AspirationTrigger', function showAspirations() {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".AspirationItem").toggle(400); // hides main intro li
   localStorage.logMode = "Aspiration";
    console.log("log mode saved as  "+localStorage.logMode); 
     $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Aspiration").attr("onclick","logSomething('','Aspiration')");

 }); 

$('body').on('click', '.GoalTrigger', function showGoals() {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".GoalItem").toggle(400); // hides main intro li
   localStorage.logMode = "Goal";
     console.log("log mode saved as  "+localStorage.logMode); 
    $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Goal").attr("onclick","logSomething('','Goal')");

 }); 



$('body').on('click', '.AppreciationTrigger',  function showAppreciations() {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".AppreciationItem").toggle(400); // hides main intro li
   localStorage.logMode = "Appreciation";
   console.log("log mode saved as  "+localStorage.logMode); 
      $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Appreciation").attr("onclick","logSomething('','Appreciation')");

 }); 


$('body').on('click', '.InquiryTrigger', function showInquiries () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".InquiryItem").toggle(400); // hides main intro li
   localStorage.logMode = "Inquiry";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Inquiry").attr("onclick","logSomething('','Inquiry')");

 }); 

$('body').on('click', '.TodayTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".TodayItem").show(400); // hides main intro li
   localStorage.logMode = "Today";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Today Item").attr("onclick","logSomething('','Today')");

 }); 

$('body').on('click', '.ArchiveTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".ArchiveItem").toggle(400); // hides main intro li
   localStorage.logMode = "Archive";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Archive Item").attr("onclick","logSomething('','Archive')");

 }); 


$('body').on('click', '.NextStepTrigger', function () {
   //$("#initialLogDestination").children().hide(400); // hides main intro li
   //$("#initialLogDestination").children(".ArchiveItem").toggle(400); // hides main intro li
   localStorage.logMode = "NextStep";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add Next Step To This").attr("onclick","logSomething('','NextStep')");

 }); 

$('body').on('click', '.ChallengeTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".ChallengeItem").toggle(400); // hides main intro li
   localStorage.logMode = "Challenge";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Challenge").attr("onclick","logSomething('','Challenge')");

 }); 


$('body').on('click', '.InsightTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".InsightItem").toggle(400); // hides main intro li
   localStorage.logMode = "Insight";
   console.log("log mode saved as  "+localStorage.logMode); 
   $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Insight").attr("onclick","logSomething('','Insight')");

 }); 

$('body').on('click', '.InspirationTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".InspirationItem").toggle(400); // hides main intro li
   localStorage.logMode = "Inspiration";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Inspiration").attr("onclick","logSomething('','Inspiration')");

 }); 

$('body').on('click', '.PersonTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".PersonItem").toggle(400); // hides main intro li
   localStorage.logMode = "Person";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Person").attr("onclick","logSomething('','Person')");

 }); 

$('body').on('click', '.PracticeTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".PracticeItem").toggle(400); // hides main intro li
   localStorage.logMode = "Practice";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Practice").attr("onclick","logSomething('','Practice')");

 }); 

$('body').on('click', '.DecisionTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".DecisionItem").toggle(400); // hides main intro li
   localStorage.logMode = "Decision";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Decision").attr("onclick","logSomething('','Decision')");

 }); 

$('body').on('click', '.ProjectionTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".ProjectionItem").toggle(400); // hides main intro li
      localStorage.logMode = "Projection";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Projection").attr("onclick","logSomething('','Projection')");

 }); 

$('body').on('click', '.HabitTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   //$("#initialLogDestination").children(".HabitItem").show(400); // hides main intro li
   $(".HabitItem").show(400); // hides main intro li
   $(".HabitItem").children(".logItem2").show(400); // hides main intro li
   localStorage.logMode = "Habit";
   console.log("log mode saved as  "+localStorage.logMode); 
      $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Habit").attr("onclick","logSomething('','Habit')");

 }); 


$('body').on('click', '.JournalTrigger', function () {
   $("#initialLogDestination").children().hide(400); // hides main intro li
   $("#initialLogDestination").children(".JournalItem").toggle(400); // shows journal entries in log
   localStorage.logMode = "Journal";
    console.log("log mode saved as  "+localStorage.logMode); 
  $("#addLogShortcutButton").attr("class","btn btn-sm btn-info pull-right").html("Add New Journal Entry").attr("onclick","logSomething('','Journal')");

 }); 

// Mode calibration
// ================== //




$('body').on('click', '.deleteThis', function () {

 $(this).parent().parent(".logItem2, .panel-body-pr").remove();
   localStorage.currentPractice = $("#initialPracticeDestination").html(); // saves the practice as it is

 });



$('body').on('click', '.deleteThisComment', function () {
   $(this).parent().remove(); // deletes this
   localStorage.currentPractice = $("#initialPracticeDestination").html(); // saves the practice as it is


 });

$('body').on('click', '.bt2', function () {
  $(this).addClass("bt2Focused");
  $(this).siblings().removeClass("bt2Focused");

});



// @moving buttons

$('body').on('click', '.moveUp', function moveUp() { // moves an element up on a list
 a = $(this).parent().parent(); 
 $(this).parent().parent().prev().before(a); 

});

$('body').on('click', '.moveDown', function moveDown() { // moves an element up on a list
 a = $(this).parent().parent(); 
 $(this).parent().parent().next().after(a); 

});




var practiceType, practiceName,arr;



//   Section 14   @14
//====================================================================================================================||

// Contents Include:
// || Active click through coaching code
// || 


$('body').on('click', '.coachThisIntegration', function () {

    name = $(this).parent().text(); // saves the whole of this text as a variable
    arr = name.split(": ");
    console.log("name of in primary function is: "+arr[1]); //test
   // practiceName = arr[1];
   $("#spokenTo").val(arr[1]);

   $(this).find("input[type=checkbox]").trigger('click');
   // $("#spokenTo").val(practiceName);
   localStorage.emotionDestination = "shadowCommentBody"; 
       //   $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
           $("#main").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
         //  $("#spokenTo").val(name); // sets WHO your talking to
           $("#aim2nd").show(); // sets WHO your talking to
          $("#shadowBody").show(); // sets WHO your talking to
          $("#spokenTo").focus();


        });



$('body').on('click', '.coachThisSensation2', function () {
 $(this).fadeOut(function(){
   $(this).text("Allow yourself to let go of wanting this moment to be any different then it is, as best you can" )
   $(this).removeClass("coachThisSensation2" )
   $(this).addClass("coachThisSensation3" )
   $(this).fadeIn();
 });
});

$('body').on('click', '.coachThisSensation3', function () {
  $(this).fadeOut(function(){
    $(this).removeClass("coachThisSensation3" )
    $(this).addClass("coachThisSensation4" )
    $(this).removeClass("btn-block" )
    $(this).text(quality)
    $('<input checked>').attr("type","checkbox").addClass("pull-left checkbox-lg2").appendTo($(this));
    $(this).fadeIn();
  });
});


$('body').on('click', '.coachThisSensation4', function () {
  var thisButton = $(this).fadeOut(function(){


   setTimeout(function(){ 

    $(thisButton).remove();

         }, 2000);

  });
});

// from Longing: Noticing to Welcoming to Letting Go

$('body').on('click', '.coachThisLonging', function () {
  $(this).fadeOut(function(){         $(this).addClass('btn-block')
   quality = $(this).text();
   type = "Longing";
   console.log(quality + " "+type)
   $(this).text("Welcome " + quality +" as best you can, including any resistance to this" )
   $(this).removeClass("coachThisLonging" )
   $(this).addClass("coachThisLonging2" )
   $(this).fadeIn();
 });
});








$('body').on('click', '.coachThisLonging2', function () {
 $(this).fadeOut(function(){
  $(this).text("And could you let go of "+quality+", just for this moment?" )
  $(this).removeClass("coachThisLonging2" )
  $(this).addClass("coachThisLonging3" )
  $(this).fadeIn();
});
});

$('body').on('click', '.coachThisLonging3', function () {
 $(this).fadeOut(function(){
  $(this).text("Would you be willing to let go of "+quality+", as best you can?" )
  $(this).removeClass("coachThisLonging3" )
  $(this).addClass("coachThisLonging4" )
  $(this).fadeIn();
});
});

$('body').on('click', '.coachThisLonging4', function () {
 $(this).fadeOut(function(){
  $(this).text("When? (Consider this an invitation)" )
  $(this).removeClass("coachThisLonging4" )
  $(this).addClass("coachThisLonging5" )
  $(this).fadeIn();
});
});

$('body').on('click', '.coachThisLonging5', function () {
  $(this).fadeOut(function(){
    $(this).removeClass("coachThisLonging5" )
    $(this).addClass("coachThisLonging6" )
    $(this).removeClass("btn-block" )
    $(this).text(quality)
    $('<input checked>').attr("type","checkbox").addClass("pull-left checkbox-lg2").appendTo($(this));
    $(this).fadeIn();
  });
});



// from Emotion: Noticing to Welcoming to Letting Go

$('body').on('click', '.coachThisEmotion', function () {
 $(this).fadeOut(function(){
   $(this).addClass('btn-block')
   quality = $(this).text();
   type = "Emotion";
   console.log(quality + " "+type)
   $(this).text("Welcome your experience of feeling " + quality +" as best you can, including any resistance to this" )
   $(this).removeClass("coachThisEmotion" )
   $(this).addClass("coachThisEmotion2" )
   $(this).fadeIn();
 });
});

$('body').on('click', '.coachThisEmotion2', function () {
  $(this).fadeOut(function(){
    $(this).text("Allow yourself to let go of wanting to feel something other then what you are feeling in this moment" )
    $(this).removeClass("coachThisEmotion2" )
    $(this).addClass("coachThisEmotion3" )
    $(this).fadeIn();
  });
});


$('body').on('click', '.coachThisEmotion3', function () {

  $(this).fadeOut(function(){
    $(this).removeClass("coachThisEmotion3" )
    $(this).addClass("coachThisEmotion4" )
    $(this).removeClass("btn-block" )
    $(this).text(quality)
    $('<input checked>').attr("type","checkbox").addClass("pull-left checkbox-lg2").appendTo($(this));
    $(this).fadeIn();
  });
});


// from Impulse: Noticing to Welcoming to Letting Go

$('body').on('click', '.coachThisImpulse', function () {
 $(this).fadeOut(function(){
   $(this).addClass('btn-block')
   quality = $(this).text();
   type = "Impulse";
   console.log(quality + " "+type)
   $(this).text("Welcome this sense of " + quality +" as best you can, including any resistance to this" )
   $(this).removeClass("coachThisImpulse" )
   $(this).addClass("coachThisImpulse2" )
   $(this).fadeIn();
 });
});

$('body').on('click', '.coachThisImpulse2', function () {
  $(this).fadeOut(function(){
    $(this).text("Allow yourself to let go of wanting to feel something other then what you are feeling in this moment" )
    $(this).removeClass("coachThisImpulse2" )
    $(this).addClass("coachThisImpulse3" )
    $(this).fadeIn();
  });
});


$('body').on('click', '.coachThisImpulse3', function () {

  $(this).fadeOut(function(){
    $(this).removeClass("coachThisImpulse3" )
    $(this).addClass("coachThisImpulse4" )
    $(this).removeClass("btn-block" )
    $(this).text(quality)
    $('<input checked>').attr("type","checkbox").addClass("pull-left checkbox-lg2").appendTo($(this));
    $(this).fadeIn();
  });
});









});




//<!-- Button toggle on click function -->
$(document).ready(function(){


  $("#myButtons .btn").click(function(){
    $(this).button('toggle');
  });

  $(".btn-toggle").click(function(){
    $(this).button('toggle');
  });
});

// ||========================================================||
// || Discus not needed right now, so commenting this out for the moment
// 
// /* * * CONFIGURATION VARIABLES * * */
// var disqus_shortname = 'integralinquiry';
// var disqus_category_id = '3666967'; // using category Sports which has ID 123456

// /* * * DON'T EDIT BELOW THIS LINE * * */
// (function() {
//   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
//   dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
//   (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
// })();


// #Main Init Function
$(document).ready(function(){


  $(".definePractice").click(function(){
    $("#aim2nd").toggle(400);
    $("#aim2ndInput").focus();

  });

    $("#spokenTo").blur(function(){
      $(".definePractice").click();
      $("#userInputS1").focus();
    });



  $(".goalMode2Input").click(function(){
    localStorage.emotionDestination = "goalcommentbody2";  
    destination = "goalcommentbody2";  
    console.log("emotion destination set to goalcommentbody2"); 
  });

  $(".goalMode3Input").click(function(){
    destination = "goalcommentbody3";  
    localStorage.emotionDestination = "goalcommentbody3";  
    console.log("emotion destination set to goalcommentbody3");
  });

  $(".goalMode4Input").click(function(){
    destination = "goalcommentbody4";  
    localStorage.emotionDestination = "goalcommentbody4";  
    console.log("emotion destination set to goalcommentbody4");
  });

  $(".shadowInput").click(function(){
    localStorage.emotionDestination = "shadowCommentBody";  
    destination = "shadowCommentBody";  
    console.log("emotion destination set to " + localStorage.emotionDestination);
  });

  $(".appreciativeInput").click(function(){
    localStorage.emotionDestination = "appreciativeCommentBody";  
    destination = "appreciativeCommentBody";  
    console.log("emotion destination set to " + localStorage.emotionDestination);
  });

  $(".decision1").click(function(){
    localStorage.emotionDestination = "sedonaSimpleChoice1CommentBody";  
    destination = "sedonaSimpleChoice1CommentBody";
    console.log("comment destination set to " + journalDestination);
    console.log("emotion destination set to " + localStorage.emotionDestination);
  });

  $(".decision2").click(function(){
    localStorage.emotionDestination = "sedonaSimpleChoice2CommentBody";  
    destination = "sedonaSimpleChoice2CommentBody";
    console.log("comment destination set to " + journalDestination);
    console.log("emotion destination set to " + localStorage.emotionDestination);
  });



// integrity and priority mode trigger buttons, for showing and hiding

$(".logModeToggle").click(function(){
  $('.logModes').toggle();    
})

$(".logModeToggle2").click(function(){
  $('.logTrigger').toggle();    
})


// redundant code
// $(".showPersonalLog").click(function(){
//   $('#personalLog').toggle(); 
//   console.log('modal triggered')  ; 
// })

$(".coachingStyleToggle").click(function(){
  $('.coachingStyles').toggle();    
})

$(".coachingStyleToPresence").click(function(){

  coachingStyle =  "awareness";
  localStorage.coachingStyle =  "awareness";
  console.log("awareness based mode on");

})
$(".coachingStyleToInquiry").click(function(){

  coachingStyle =  "inquiry";
  localStorage.coachingStyle =  "inquiry";
  console.log("inquiry based mode on");
})


// $(".IntegrityTrigger").click(function(){

// // For triggering modes that enable evalauting coherence of a given item, task, goal, aspiration with your
// // values, set this functionality:

// switch(localStorage.integrityTriggersVisible){

// // if its false, 
//     case "false":
//       // show them
//       $('.integritySoulCheck').show();
//        // and change the mode to showing
//       localStorage.integrityTriggersVisible = true;
//     break;

//      default:
// // if its true or undefined, 
//       // hide them
//       $('.integritySoulCheck').hide();
//       // and change the mode to hidden
//       localStorage.integrityTriggersVisible = false;

//        }  
// })  


// $(".PriorityTrigger").click(function(){

// // For triggering modes that enable evalauting priority of a given item, task, goal or 
// // aspiration set this functionality:

// switch(localStorage.priorityTriggersVisible){

// // if its false, 
//     case "false":
//       // show them
//       $('.priorityCheck').show();
//        // and change the mode to showing
//       localStorage.priorityTriggersVisible = true;
//     break;

//      default:
// // if its true or undefined, 
//       // hide them
//       $('.priorityCheck').hide();
//       // and change the mode to hidden
//       localStorage.priorityTriggersVisible = false;

//        }  
// })  




// $(".integrityAimTrigger").click(function(){

// // For triggering modes that enable evalauting priority of a given item, task, goal or 
// // aspiration set this functionality:

// switch(localStorage.priorityTriggersVisible){

// // if its false, 
//     case "false":
//       // show them
//       $('.integrityCheck').show();
//        // and change the mode to showing
//       localStorage.integrityAimTriggersVisible = true;
//     break;

//      default:
// // if its true or undefined, 
//       // hide them
//       $('.integrityCheck').hide();
//       // and change the mode to hidden
//       localStorage.integrityAimTriggersVisible = false;

//        }  
// })  



// $(".commitmentIntegrityTrigger").click(function(){

// // For triggering modes that enable evalauting degree of commitment to an aim of a given item, task, goal or 
// // aspiration set this functionality:

// switch(localStorage.commitmentIntegrityTriggersVisible){

// // if its false, 
//     case "false":
//       // show them
//       $('.commitmentCheck').show();
//        // and change the mode to showing
//       localStorage.commitmentIntegrityTriggersVisible = true;
//     break;

//      default:
// // if its true or undefined, 
//       // hide them
//       $('.commitmentCheck').hide();
//       // and change the mode to hidden
//       localStorage.commitmentIntegrityTriggersVisible = false;

//        }  
// })  








    // refresh for 2nd person inquiry field
    $("#refreshInquiry").click(function(){
     $("#shadowCommentBody").html("");

   });



  });
// Mode/Destination Functions


// ||========================================================||
// || Sorting out where the journal mode keeps getting triggered
// || looking for possibilities, marking with %journal


function activateJournalMode(){   //%journal
  localStorage.emotionDestination = "journal";
  practiceDestination = "initialPracticeDestination";
  logDestination = "initialLogDestination";
};

function activate2ndPersonMode(){
  localStorage.emotionDestination = "shadowCommentBody"; 
};   
function activateGoalsMode(){
  localStorage.emotionDestination = "goalCommentBody"; 
};  

function activateAppreciativeInquiryMode(){
  localStorage.emotionDestination = "appreciativeBody"; 
};

function activateDecisionMode(){
  localStorage.emotionDestination = "decisionBody"; 
};

// - what still needs doing: I still need to combine the above with the below so its simple to say activate mode when needed, because at present most processes require the journal mode in order to function, and yet do not have that functionality... at minimum I need to be able to define the emotion destination wherever the text is being logged for each process!! 

<!-- //Main Navigation -->
$(document).ready(function(){

        // launch Full Introduction, close all else
        $(".intro").click(function(){
          $(".journal").hide();
          $(".2ndPerson").hide();
          $("#fullintro").hide();
          $("#goalSection").hide();
          $("#introMain0").show(800);
          $("#appreciativeInquiry").hide();
          $("#main").hide();
        });


        // launch construction zone, close all else
        $(".constructionToggle").click(function(){
          $(".constructionZone").show();
        });

        // launch Main Menu, close all else
        $(".mainMenu").click(function openMain(){

          $("#main").hide();
          $("#introMain0").hide();
          $("#fullintro").fadeIn(800);
        });

        // launch 2nd Person Practice, close all else
        $(".2ndPersonMode").click(function(){
          $("#fullintro").hide();
          $("#introMain0").hide();
          $(".2ndPerson").fadeIn();
          $("#main").fadeIn(800);
        });



      // launch 2nd Person Practice, close all else
      $(".showShadowBody").click(function(){
        $("#shadowBody").toggle();

      });

        // launch Journal Mode, close all else
        $(".journalMode").click(function(){
         $(".2ndPerson").fadeOut();
         $("#fullintro").hide();
         $("#introMain0").hide();
         $(".journal").fadeIn();
         $("#jMain").fadeIn();
         $(".journalIntro").fadeIn();
         $("#main").fadeIn(800);
       });

        // launch Goal Mode, close all else
        $(".goalMode").click(function(){
         $("#fullintro").hide();
         $("#introMain0").hide();
         $("#goal2").toggle(800);
         $("#goalSection").show(800);
         $(".allGoals").show(800);
         $("#main").fadeIn(800);
       });


        // launch Goal Mode, close all else
        $("#hideGoals").click(function(){
          console.log("something");
          $("#goal2").hide();
          $("#goalSection").hide();
          $(".allGoals").hide();
        });

        // done button for shadow work mode
        $(".hide2ndPersonMode").click(function(){
          $("#shadowWork").hide();
        });

        // launch Appreciative Inquiry Mode, close all else
        $(".appreciativeInquiryMode").click(function(){
         $("#fullintro").hide();
         $("#introMain0").hide();
         $("#main").fadeIn(800);
         $("#appreciativeInquiry").fadeIn(800);
       });

        // launch Sedona Mode, close all else
        $(".sedonaMode").click(function(){
          $("#fullintro").hide();
          $("#introMain0").hide();
          $(".journal").fadeIn(800);
          $("#main").fadeIn(800);
        });

        // launch Decision Mode, close all else
        $(".decisionMode").click(function(){
          $(".sedonaSimpleMode").hide();
          $(".sedonaAdvantagesMode").hide();
          $("#fullintro").hide();
          $("#introMain0").hide();
          $("#main").fadeIn(800);
          $("#SMC1").show();
        });


        // launch Custom profile close all else
        $(".customProfileActivator").click(function(){
          $(".customProfile").show();
          $("#introMain0").hide();
          $("#fullintro").hide();
          $("#main").fadeIn(800);
        });

        // launch Access close all else

        $(".accessClearingActivator").click(function(){
          $(".customProfile").hide();
          $("#introMain0").hide();
          $("#fullintro").hide();
          $("#main").fadeIn(400); 
         // this is the main body of the app
         $("#mainSpace").fadeIn(400); 
         // this space will be changeable in real time
         // a template for that which is to come
         $(".accessClearing").fadeIn(400);
         $("#initialLogDestination").hide(400);

         // these will be the access specific elements for
         // populating the main space
       });



        $(".addGoalMode").click(function(){
          $("#goalSection").toggle();
        });

        $(".addAppreciativeMode").click(function(){
          $("#appreciativeInquiry").toggle();
        });

        $(".addDecisionMode").click(function(){
          $("#SMC1").toggle();
        });

        $(".add2ndPersonMode").click(function(){
          $(".2ndPerson").toggle();
        });

        $(".addCustomPractice").click(function(){
          $(".customProfile").toggle();
        });
      });




$(document).ready(function(){


// load all practices stored in the 'practices' array of objects by repeating the function addPractice 
// for each of them as if the buttons were clicked again for each... for loop and function from localStorage


$
$(".btn-info",".btn-default").addClass("btn-lg");




      // these are autoscroll tests... dont seem to work
      $(".log").click(function() {
        $(".viewZone").animate({ scrollTop: $(document).height() }, "slow");
        return false;
      });


      // So I am going to have classes which define groups that will be closed and opened based on the mode selected... so far I closed the journal and opened the 2nd person mode elements... now I want to make sure I take that further to the toggle switches so that the accordian effect is fully and accurately implemented... 






      // Screen View Toggle
      $(".screenViewToggle").click(function(){
        //$("#sidebar").toggleClass("col-xs-5 col-sm-4 col-md-3 col-lg-2" );
       // $("#sidebar").toggle();
        $("#sidebar").toggle(200); //hides feelings

        $("#mainJournal").toggleClass("col-xs-12 col-sm-8 col-md-9 col-lg-9"); // make room for feelings
        $("#mainJournal").toggleClass(" col-lg-12");// make room for feelings 


      });

      $(".shadowTools").click(function(){

        $("#sidebarShadow").animate({width: 'toggle'},"fast");

        $("#mainShadow").toggleClass("col-xs-12 col-sm-8 col-md-8.5 col-lg-9 ");
        $("#mainShadow").toggleClass("col-lg-12 ");



        $(".sidebarToolSet").animate({width: 'toggle'},"fast");

        $(".mainInsideView").toggleClass("col-xs-12 col-sm-8 col-md-8.5 col-lg-9 ");
        $(".mainInsideView").toggleClass("col-lg-12 ");


      // all mode - dependent elements should be replace with a mode class so they can all be collapsed together

    });


//   Section 15   @15
//====================================================================================================================||

// Contents Include:
// || Dedication stuff
// || out of date, integrate into new platform then phase out completely


      // custom practice setup

      $(".showDedications").click(function(){
          $("#dedicationElements").show(800);  // shows all 3 dedication elements
        });


      $(".clarifyPracticeAim").click(function(){
          $("#dedicationElements").hide(800);  // shows all 3 dedication elements
          $(".DED2").show(800);  // shows all 3 dedication elements
          $("#dedicationIntent").show(800);  // shows all 3 dedication elements
          $("#dedicationLifeSpace").show(800);  // shows all 3 dedication elements
          $("#dedicationPracticeSpace").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").show(800); // hides journal mode
          $("#jMain").fadeIn();
         $("#main").show(); // opens body of site
           $("#dedicationIntent").html("<p>If anything were possible, what would you want from your practice today?</p> <p>Imagine you are sitting in a council with all of your mentors present, and there were no limitations to what you could experience.?</p>"); // sets inquiry for this
         });


      $(".customDedicationPractice").click(function(){
          $(".DED2").slideDown(800);  // shows all 3 dedication elements
           $(".dedicationElements").hide();  // hides all 3 dedication elements
          $("#dedicationLifeSpace").show(800);  // shows just the life element
          $("#jMain").fadeIn();
        $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").show(800); // hides journal mode
           $("#main").show(); // opens body of site
           $("#dedicationIntent").html("<p>What is the degree of integrity or congruity between where you are at right now and your core, fundamental, singular focal point/value? <output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /></p>"  ); // sets inquiry for this
         });





      $(".customDedicationPractice2").click(function(){
          $(".DED2").show(800);  // shows all 3 dedication elements
            $("#dedicationElements").hide(800);  // hides all 3 dedication elements
           $("#dedicationLifeSpace").show(800);  // hides all 3 dedication elements
           $("#jMain").fadeIn();
           $("#dedication3MonthsSpace").show(800);  // hides all 3 dedication elements
        $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").show(800); // hides journal mode
           $("#main").show(); // opens body of site
           $("#dedicationIntent").html("<p>Assess the degree of congruity between your life dedication and what the next 3 months are dedicated to.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /></p>"); // sets inquiry for this
         });

      $(".customDedicationPractice3").click(function(){
          $(".DED2").show(800);  // shows all 3 dedication elements
          $("#dedicationElements").hide(800);  // hides all 3 dedication elements
          $("#dedication3MonthsSpace").show(800);  // shows just 3 month elements
        $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").show(800); // hides journal mode
           $("#main").show(); // opens body of site
           $("#jMain").fadeIn();
           $("#dedicationIntent").html("<p>Assess the degree of congruity between your what the next 3 months are dedicated to and your goals for this week.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /></p>"); // sets inquiry for this
         });


      $(".customDedicationPractice4").click(function(){
          $(".DED2").show(800);  // shows all 3 dedication elements
          $("#dedicationElements").hide(800);  // hides all 3 dedication elements
          $("#dedication3MonthsSpace").show(800);  // shows just 3 month elements $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").show(800); // hides journal mode
           $("#main").show(); // opens body of site
           $("#jMain").fadeIn();
           $("#dedicationIntent").html("<p>Assign or review (if assigned) your priorities for the week<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /></p>"); // sets inquiry for this
         });



      $(".2ndPersonInquiryWithGod").click(function(){
        localStorage.emotionDestination = "shadowCommentBody"; 
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
           $("#main").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
           $("#spokenTo").val("God"); // sets WHO your talking to
           $("#shadowIntro").html("<p>Have a conversation with God, look him in the eyes, see if theres a sense of a charge.  If so, have a clearing.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to
         });

      $(".2ndPersonInquiryWithFerocity").click(function(){
        localStorage.emotionDestination = "shadowCommentBody"; 
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
           $("#main").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
           $("#spokenTo").val("The Ferocity of the Human Spirit"); // sets WHO your talking to
           $("#shadowIntro").html("<p>Have a conversation with the Ferocity of the Human Spirit Within, look him in the eyes, see if theres a sense of a charge.  If so, have a clearing.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to
         });

      $(".2ndPersonInquiryWithMoney").click(function(){
        localStorage.emotionDestination = "shadowCommentBody"; 
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
           $("#main").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
           $("#spokenTo").val("The Voice of the Embodiment of Money"); // sets WHO your talking to
           $("#shadowIntro").html("<p>Have a conversation with the the Voice of the Embodiment of Money, look her in the eyes, see if theres a sense of a charge.  If so, have a clearing.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to
         });

$(".2ndPersonInquiryWithMySoulmate").click(function(){
          localStorage.emotionDestination = "shadowCommentBody"; // sets the destination for the 2nd person inquiry emotions
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
          $("#main").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
           $("#spokenTo").val("My Future Partner and Soulmate"); // sets WHO your talking to
           $("#shadowCommentBody").empty(); // sets WHO your talking to
           $("#shadowIntro").html("<p>Have a conversation with the the Voice of Your Future Partner and Soulmate, look her in the eyes, see if theres a sense of a charge.  If so, have a clearing.<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to


         });


$(".2ndPersonInquiryWithMyCouncil").click(function(){
          localStorage.emotionDestination = "shadowCommentBody"; // sets the destination for the 2nd person inquiry emotions
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
          $("#main").show(); // opens body of site
           $(".DED2").show(); // opens body of site
          $(".2ndPerson").show(800);  // shows all 3 dedication elements
         $("#customProfile1").hide(); // hides main custom inquiry
         $("#fullintro").hide(); // hides main intro list
          $(".journal").hide(); // hides journal mode
           $("#dedicationIntent").html(""); // resets inquiry for this
           $("#spokenTo").val("My Council of All Mentors"); // sets WHO your talking to
           $("#shadowCommentBody").empty(); // sets WHO your talking to
           $("#shadowIntro").html("<p>Have a conversation with the Full Council of All of your Mentors, look them in the eyes, Address your congruity with your calling, your next steps, and whatever else is up for you<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to

         });



$(".launchInquiryTracker").click(function(){
          localStorage.emotionDestination = "inquiryCommentBody"; // sets the destination for the 2nd person inquiry emotions
          destination = "inquiryCommentBody"; // sets the destination for the 2nd person inquiry emotions
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
            $("#main").show(); // opens body of site
             $(".DED2").hide(); // opens body of site
            $(".2ndPerson").show(800);  // shows all 3 dedication elements
           $("#customProfile1").hide(); // hides main custom inquiry
           $("#fullintro").hide(); // hides main intro list
            $(".journal").hide(); // hides journal mode
             $("#dedicationIntent").html(""); // resets inquiry for this
             $("#spokenTo").val("My Council of All Mentors"); // sets WHO your talking to
             $("#shadowCommentBody").empty(); // sets WHO your talking to
             $("#shadowIntro").html("<p>Lets explore your inquiries for the moment!<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to
              $("#inquiryMode").show(); // hides main intro list

            });

$(".honeIn").click(function(){
  console.log("something");
          $(this).parent().siblings(".congruityEval").fadeToggle(); // hides main intro list
          $(this).parent().siblings(".focus").fadeToggle(); // hides main intro list

        });



$(".launchCongruityTracker").click(function(){
          localStorage.emotionDestination = "congruityCommentBody"; // sets the destination for the 2nd person inquiry emotions
          destination = "congruityCommentBody"; // sets the destination for the 2nd person inquiry emotions
          $("#shadowCommentBody").empty(); // resets the commentary area of the 2nd person inquiry
            $("#main").show(); // opens body of site
             $(".DED3").show(); // opens body of site
            $(".2ndPerson").show(800);  // shows all 3 dedication elements
           $("#customProfile1").hide(); // hides main custom inquiry
           $("#fullintro").hide(); // hides main intro list
            $(".journal").hide(); // hides journal mode
             $("#dedicationIntent").html(""); // resets inquiry for this
             $("#spokenTo").val("My Council of All Mentors"); // sets WHO your talking to
             $("#shadowCommentBody").empty(); // sets WHO your talking to
             $("#shadowIntro").html("<p>Lets explore your inquiries for the moment!<output id='rangevalue'></output> <input type='range' min='0' max='100' value='50' step='1' onchange='rangevalue.value=value' /><p><br>"); // sets WHO your talking to
              $("#inquiryMode").hide(); // hides main intro list

            });


    // testing for new inquiry section
    $(".newInquiry").click(function(){
      console.log("something");
      var newfield = $('<li>').text('New Inquiry').addClass('list-group-item inquiry checkbox input-lg input center-block').appendTo('#inquiries');
    });

    $(".toggleInquiryMode").click(function(){
      $("#inquiryMode").hide();
    });


        // start the simple mode inquiry - set up all the default settings here... 
        $(".activateSedonaSimpleMode").click(function(){ 
          $(".sedonaSimpleMode").hide();
          $(".sedonaAdvantagesMode").hide();
          $(".journalEntry").fadeIn();
          $("#sedonaSimpleModeStep1").fadeIn();
          $("#emotions").slideDown();
          localStorage.emotionDestination = "sedonaSimpleChoice1CommentBody";
          journalDestination = "sedonaSimpleChoice1CommentBody";
           $(".clearings").hide(); // this class the default for closing ANYTHING related to this practice that is already open
          $("#SMC1").hide(); // collapses the initial inquiry


        });
        // look at the second option
        $(".goToSedonaSimpleModeStep2").click(function(){ 

         $("#deeperDecisionButton").fadeOut(800);
         $("#goToNextStepDecisionButton").fadeOut(800);
         $(".sedonaSimpleMode").hide();
         $(".journalEntry").fadeIn(800);
         $("#sedonaSimpleModeStep2").fadeIn(800);
         $(".clearings").hide();
         localStorage.emotionDestination = "sedonaSimpleChoice2CommentBody";
         journalDestination = "sedonaSimpleChoice2CommentBody";


       });

        // go back to the first option
        $(".goToSedonaSimpleModeStep1").click(function(){ 
          $(".sedonaSimpleMode").hide();
          $("#sedonaSimpleModeStep1").fadeIn(800);
          $(".journalEntry").fadeIn(800);
          $(".clearing").hide();
          localStorage.emotionDestination = "sedonaSimpleChoice1CommentBody";
          journalDestination = "sedonaSimpleChoice1CommentBody";

        });

        $(".journalEntryMade").click(function(){ 
          $(".journalEntry").slideUp();
        });



        $(".activateSedonaAdvantagesMode").click(function(){ 
          $(".sedonaAdvantagesMode").fadeIn();
          $(".sedonaSimpleMode").hide();
          $("#SMC1").hide();

        });

        $(".goToAdvantagesStep2").click(function(){ 
          $(".sedonaAdvantagesMode").hide();
          $(".sedonaAdvantagesModeStep2").fadeIn();

        });
        // Trigger looking underneath and clearing
        $(".startClearing").click(function(){ 
          $(".clearings").hide();
          $(".clearing1").slideDown(800);

        });

        // Trigger 2nd step of looking underneath and clearing
        $(".startClearing2").click(function(){ 
         $(".clearings").hide();
         $(".clearing2").fadeIn(800);

       });

        // Trigger 3rd step of looking underneath and clearing
        $(".startClearing3").click(function(){ 
          $(".clearings").hide();
          $(".clearing3").fadeIn(800);

        });

        // Trigger 3rd step of looking underneath and clearing
        $(".startClearing4").click(function(){ 
          $(".clearings").hide();
          $(".clearing4").fadeIn(800);

        });

        // Trigger 3rd step of looking underneath and clearing
        $(".doneClearing").click(function(){ 
          $(".clearings").slideUp(800);
          $("#deeperDecisionButton").fadeIn(800);
          $("#goToNextStepDecisionButton").fadeIn(800);


        });

        // Trigger deeper clearing
        $(".oneStepDeeper").click(function(){ 
          $(".clearings").slideUp(800);
          $(".clearing1B").slideDown(800);
          $(".journalEntry").slideDown(800);


        });





// Auto Toggle menu functions


$(".goalToolsToggle").click(function(){
  $(".goalTools").toggle();

});

$(".introToggle").click(function(){
  $(".introCollapse").hide(400);

});

$("#introB").click(function(){
  $(".introMain0").show(400);
  $(".introFormat").show(400);
  console.log("something happened");

});


$(".shadowIntroCollapse").click(function(){
  console.log("something");
  $("#shadowIntro").hide(400);

});




$("#doneJournalIntro").click(function(){
  $("#journalIntro").toggle(800);

});

      // goal section functions



  $("#3rdPersonToggle").click(function(){
    $(".3rd").toggle();

  });



        // primary controls to show and hide menus for the 2nd person inquiry or shadow work area... 
//@now
      $(".shadowMenuButton").not('.labelItem').click(function(){  // button menu parent toggle
       $(this).next().not("#3rdPersonToggle, .definePractice").toggle(400);
       $(this).siblings(".shadowMenuButton").not("#3rdPersonToggle, .definePractice").toggle(400);


     });  



        $("#beingNoticeButton").click(function(){  // all buttons with the injunction function for being 
          setText3("Being with you I notice ");
          $(".injunctions2ndPerson").hide();
          $("#BIN").fadeIn(800);
        });

       $("#beingFeelButton").click(function(){  // all buttons with the injunction function for being 
        setText3("Being with you I feel ");
        $(".injunctions2ndPerson").hide();
        $("#BIF").fadeIn(800);
      });

        $("#beingSenseButton").click(function(){  // all buttons with the injunction function for being 
          setText3("Being with you I sense ");
          $(".injunctions2ndPerson").hide();
          $("#BIS").fadeIn(800);
        });


        $("#beingWantButton").click(function(){  // all buttons with the injunction function for being 
          setText3("Being with you I want ");
          $(".injunctions2ndPerson").hide();
          $("#BIW").fadeIn(800);
        });


        $("#beingWantForButton").click(function(){  // all buttons with the injunction function for being 
          setText3("Being with you I want for you to ");
          $(".injunctions2ndPerson").hide();
          $("#BIWF").fadeIn(800);
        });


        $("#beingNeedButton").click(function(){  // all buttons with the injunction function for being 
          setText3("Being with you I need ");
          $(".injunctions2ndPerson").hide();
          $("#BINN").fadeIn(800);
        });

        <!--   -->


        $("#hearingNoticeButton").click(function(){  // all buttons with the injunction function for hearing 
          setText3("hearing that I notice ");
          $(".injunctions2ndPerson").hide();
          $("#HIN").fadeIn(800);
        });

       $("#hearingFeelButton").click(function(){  // all buttons with the injunction function for hearing 
        setText3("hearing that I feel ");
        $(".injunctions2ndPerson").hide();
        $("#HIF").fadeIn(800);
      });

        $("#hearingSenseButton").click(function(){  // all buttons with the injunction function for hearing 
          setText3("hearing that I sense ");
          $(".injunctions2ndPerson").hide();
          $("#HIS").fadeIn(800);
        });


        $("#hearingWantButton").click(function(){  // all buttons with the injunction function for hearing 
          setText3("hearing that you I want ");
          $(".injunctions2ndPerson").hide();
          $("#HIW").fadeIn(800);
        });


        $("#hearingWantForButton").click(function(){  // all buttons with the injunction function for hearing 
          setText3("hearing that I want for you to ");
          $(".injunctions2ndPerson").hide();
          $("#HIWF").fadeIn(800);
        });


        $("#hearingNeedButton").click(function(){  // all buttons with the injunction function for hearing 
          setText3("hearing that I need ");
          $(".injunctions2ndPerson").hide();
          $("#HINN").fadeIn(800);
        });


        $("#isItTrue").click(function(){  
          changeTextComment8("Is that True?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>Feel into whether this seems true to you<p>");
          $("#BBB").fadeIn(800);
        });




        $("#whoAreYou").click(function(){  
          changeTextComment8("Who are you?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

        $("#yourFunction").click(function(){  
          changeTextComment8("What is your function?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


        $("#serve").click(function(){  
          changeTextComment8("How do you serve the Self?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


        $("#want").click(function(){  
          changeTextComment8("What do you want?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

        $("#need").click(function(){  
          changeTextComment8("What do you need?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

        $("#feelLike").click(function(){  
          changeTextComment8("What would it feel like to get that?",destination, "myComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });




// @Access questions


       $("#clarifying1").click(function(){  
          changeTextComment8("What would you like to get out of this?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clarifying2").click(function(){  
          changeTextComment8("If you could have anything out of this what would it be?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clarifying3").click(function(){  
          changeTextComment8("What is it that you would like to change or create?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

       $("#clearing1").click(function(){  
          changeTextComment8("Everything that brought up, would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

       $("#clearing2").click(function(){  
          changeTextComment8("All of the thoughts, feelings, emotions and points of view that you have about this, would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });



       $("#clearing3").click(function(){  
          changeTextComment8("Everything you have aligned and agreed with, and resisted and reacted to around this, would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clearing4").click(function(){  
          changeTextComment8("  All of the expectations, projections, separations and rejections that you have about this, would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clearing5").click(function(){  
          changeTextComment8("All of the decisions, judgements, conclusions and computations that you have about this, would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clearing6").click(function(){  
          changeTextComment8("How much of this is yours, and how much of it have you picked up from others? And everything about this that isn’t yours would you be willing to return it to sender, consciousness attached?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#clearing7").click(function(){  
          changeTextComment8("What do you desire to create as your life and living? Everything that doesn’t allow you to perceive, know, be and receive that would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });



       $("#creating1").click(function(){  
          changeTextComment8("What if everything was just an interesting point of view? Would you be willing to say 'Interesting point of view, I have this point of view about this.'' and repeat it several times, pausing each time to notice if anything changes?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

       $("#creating2").click(function(){  
          changeTextComment8("What would it take for you to have total clarity and ease with all of this? Everything that doesn’t allow it would you destroy and uncreate as much of that as you are willing to right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

       $("#creating3").click(function(){  
          changeTextComment8("What else is possible here that you have not yet considered?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });

// ||========================================================||
// || immunity questions
// 


       $("#immunityClarifying1").click(function(){  
          changeTextComment8("What new behavior would you like to start doing?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("This coaching method is designed to help create new behaviors by identifying our unconscious 'immunity to change'");
          $("#BBB").slideDown(400);
        });



       $("#immunityClarifying2").click(function(){  
          changeTextComment8("What are you doing instead?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").slideUp(400);
        });


       $("#immunityClarifying3").click(function(){  
          changeTextComment8("What would it feel like to do the new behavior?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").slideUp(400);
        });



       $("#immunityClarifying4").click(function(){  
          changeTextComment8("What would you need to believe in order to be doing exactly what you are doing, instead of the new behavior?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").slideUp(400);
        });



       $("#immunityClarifying5").click(function(){  
          changeTextComment8("What would you need to be committed to in order to be doing exactly what you are doing?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("This coaching method is designed to help create new behaviors by identifying our unconscious 'immunity to change'");
          $("#BBB").slideDown(400);
        });



// ||========================================================||
// || sedona method triggers
// 

       $("#sedonaClearing1").click(function(){  
          changeTextComment8("Welcome this experience as best you can.  Include any resistance to this.  Take a breath into this.",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("This is intended to clear out blocks to being present");
          $("#BBB").slideDown(400);
        });


       $("#sedonaClearing2").click(function(){  
          changeTextComment8("Could you let all of this go?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("");
          $("#BBB").slideUp(400);
        });


       $("#sedonaClearing3").click(function(){  
          changeTextComment8("Would you be willing to let this go, as best you can?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("");
          $("#BBB").slideUp(400);
        });


       $("#sedonaClearing4").click(function(){  
          changeTextComment8("When?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("Consider this an invitation");
          $("#BBB").slideDown(400);
        });


// @looping button triggers



       $("#looping1").click(function(){  
          changeTextComment8("What is the trigger you want to look at?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("Notice any painful memory or trauma, and see if you can identify a pattern in it.  Ask yourself what happened, or what hurt, and see if there is an interpretation that comes up.");
          $("#BBB").slideDown(400);
        });


       $("#looping2").click(function(){  
          changeTextComment8("Describe a memory of this",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("Recall a memory of this pattern in vivid detail, and describe it, out loud, in your mind, or by writing until your attention is all the way on it, then move to the next step");
          $("#BBB").slideDown(400);
        });

       $("#looping3").click(function(){  
          changeTextComment8("What are you noticing right now?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").text("Describe something in the present moment in vivid detail, out loud, in your mind, or by writing until your attention is all the way on it, then repeat the last step");
          $("#BBB").slideDown(400);
        });



// @miscCoaching Buttons

       $("#acknowledgement").click(function(){  
          changeTextComment8(localStorage.currentAcknowledgement,destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });





       $("#emergence1").click(function(){  
          changeTextComment8("What does this bring up for you?.",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });




       $("#beingWith1").click(function(){  
          changeTextComment8("What is under this?.",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


       $("#under1").click(function(){  
          changeTextComment8("What is it like being with this?.",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").fadeOut(800);
        });


// @byron katie questions



        $("#isItTrue2").click(function(){  
          changeTextComment8("Can you know with absolute certainty that its true?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>Can you know with absolute certainty?<p>");
          $("#BBB").fadeIn(800);
        });

        $("#feelingImpact").click(function(){  
          changeTextComment8("How do you feel when you believe that thought?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>Notice your body sensations and your mood and how they change when you believe that thought<p>");
          $("#BBB").fadeIn(800);
        });
        $("#feelingImpact2").click(function(){  
          changeTextComment8("Who would you be without that thought?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>Just simply drop the thought for a moment and notice what is different<p>");
          $("#BBB").fadeIn(800);
        });

        $("#turnAround").click(function(){  
          changeTextComment8("Can you find a turn around?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>What is an example of an opposite thought that might be true also?<p>");
          $("#BBB").fadeIn(800);
        });
        $("#turnAroundExamples").click(function(){  
          changeTextComment8("What are 3 specific examples of how that is true?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>What are three specific examples of how that turnaround might be true?<p>");
          $("#BBB").fadeIn(800);
        });
        $("#anotherTurnAround").click(function(){  
          changeTextComment8("Can you find another turnaroud?",destination, "thirdPersonComment", "userInputS1");
          $(".injunctions2ndPerson").hide();
          $("#BBB").html("<p>What is another opposite thought that might also be true?<p>");
          $("#BBB").fadeIn(800);
        });



      });




//   Section 16   @16
//====================================================================================================================||

// Contents Include:
// || Older Functions for changing text 




function setText2(a,x){
  document.getElementById("userInputG"+x).value = a;
  document.getElementById("userInputG"+x).focus();
};



function setText3(a){
  document.getElementById("userInputS1").value = a
  document.getElementById("userInputS1").focus();
}

function setText4(a){
  document.getElementById("userInputA1").value = a
  document.getElementById("userInputA1").focus();
}

function jumpToPageBottom() {

$('#shadowCommentBody').scrollTop($('#shadowCommentBody').get(0).scrollHeight);

}

function changeTextComment3(destination){ 
  // ths function ADDS a comment from the comment field to the div w id comment near it... 
    var userInput = document.getElementById('userInputS1').value;  // get the input from the user
    var para = document.createElement("P");
    para.setAttribute("id", "myComment");
    var t = document.createTextNode(userInput);
    para.appendChild(t);  
    var destination = document.getElementById(destination)
    destination.appendChild(para, destination.firstChild);
    document.getElementById('userInputS1').value = "";
    document.getElementById('userInputS1').focus();
  }

  function changeTextComment6(destination, style){ 
    // identify the value of what the user inputted
    var userInput = document.getElementById('userInputS1').value;  
    
    // if theres something there, continue the function, if empty, do nothing
    if (userInput != ""){
    var para = document.createElement("P");
    // assignment of attributes
    para.setAttribute("id", style);
    var t = document.createTextNode(userInput);
    para.appendChild(t);  
    var destination = document.getElementById(destination)
    destination.appendChild(para, destination.firstChild);
    document.getElementById('userInputS1').value = "";
    document.getElementById('userInputS1').focus();
    jumpToPageBottom();};
  }

  function changeTextComment7(source, destination, style){ 
  // to be modified from the above to change the location of the dump
  // this function ADDS a comment from the comment field to the div w id comment near it... 

  var userInput = document.getElementById(source).value;  
    // get the input from the user
    
    // 3 make the div a panel

    var para = document.createElement("P");
    // assignment of attributes
    para.setAttribute("id", style);
    var t = document.createTextNode(userInput);
    para.appendChild(t);  


    // add comment area

    // place the item
    var destination = document.getElementById(destination)
    destination.appendChild(para, destination.firstChild);

    document.getElementById(source).value = "";
    document.getElementById(source).focus();}



    function changeTextComment8(phrase, destination, style, source){ 
  // to be modified from the above to change the location of the dump
  // this function ADDS a comment from the comment field to the div w id comment near it... 

    // get the input from the user
    
    // 3 make the div a panel

    var para = document.createElement("P");
    // assignment of attributes
    para.setAttribute("id", style);
    var t = document.createTextNode(phrase);
    para.appendChild(t);  


    // add comment area

    // place the item
    var destination = document.getElementById(destination)
    destination.appendChild(para, destination.firstChild);


    document.getElementById(source).focus();
    jumpToPageBottom();


  }


    




    function changeTextComment5(destination){ 
  // to be modified from the above to change the location of the dump
  // this function ADDS a comment from the comment field to the div w id comment near it... 




  var userInput = document.getElementById('spokenTo').value;  
  if (userInput.length > 0) {

    var x = "Conversation with: ";  
    var userInputx = (x + userInput)
    var userInput2 = document.getElementById('spokenTo2').value;  
    if (userInput2.length > 0) {
      var userInputx = (userInputx + " and " + userInput2)
    }
    // get the input from the user
    
    // 3 make the div a panel

    var para = document.createElement("P");
    // assignment of attributes
    para.setAttribute("id", "newConversationTitle");
    var t = document.createTextNode(userInputx);
    para.appendChild(t);  


    // add comment area

    // place the item
    var destination = document.getElementById(destination)
    destination.appendChild(para, destination.firstChild);

    document.getElementById('userInputS1').focus();}
    jumpToPageBottom();
  }









  function changeTextU(){
 // for each one
 var x = "What is Challenging: ";
    var userInput = document.getElementById('challenge').value; // 1 get first element <><>
    var userInputx = x + userInput;
    var panel = document.createElement("div");  //  2 create a div named panel
    panel.setAttribute("class","panel panel-default panel-body");  // 3 make the div a panel
    var para = document.createElement("P");     // 4 create a paragraph and call it para <><>
    var t = document.createTextNode(userInputx);  // 5  create a text node and call it t <><>
    para.appendChild(t);                         //6  put the text node onto the paragraph <><>
    panel.appendChild(para);                    // 7 put the paragraph onto the panel <><>


// so i tried to make this work where i could simply put an id into the function and that way i could simply run the function multiple times for each field and make this faster, it wouldn't work so I am creating one function that is just for the challenges field... i will have to figure this out soon though... 
var x = "The Opportunity I see within this challenge: ";

    var userInput2 = document.getElementById('challengeOpportunity').value; // get second element
    var userInput2x = x + userInput2;
    var para2 = document.createElement("P");  // create a paragraph and call it para <><>
    var t2 = document.createTextNode(userInput2x);  // create a text node and call it t2
    para2.appendChild(t2);  // put the text node onto the paragraph
    panel.appendChild(para2);  // put the paragraph onto the panel

    var x = "What I appreciate about this challenge: ";

// this is for the 3rd variable
    var userInput3 = document.getElementById('challengeAppreciation').value; // get second element
    var userInput3x = x + userInput3;
   var para3 = document.createElement("P");  // create a paragraph and call it para <><>
    var t3 = document.createTextNode(userInput3x);  // create a text node and call it t2
    para3.appendChild(t3);  // put the text node onto the paragraph
    panel.appendChild(para3);  // put the paragraph onto the panel

// this is for the 4th variable
var x = "Willingness to welcome this challenge: ";

    var userInput4 = document.getElementById('challengeWill').value; // get second element
    var userInput4x = x + userInput4;
   var para4 = document.createElement("P");  // create a paragraph and call it para <><>
    var t4 = document.createTextNode(userInput4x);  // create a text node and call it t2
    para4.appendChild(t4);  // put the text node onto the paragraph
    panel.appendChild(para4);  // put the paragraph onto the panel

// end once parts
    var list = document.getElementById("journal") // find the spot to put it all
    list.insertBefore(panel, list.firstChild);  // put it there
    document.getElementById("challenge").value = "";  //find the source fields and clear them
    document.getElementById("challenge").focus();}  // put the focus on the first field again 
    








function changeText3(){ // comments field needs a submit button... 
  var userInput = document.getElementById('userInput').value;
  var panel = document.createElement("div");
  var Commentspanel = document.createElement("div");
  panel.setAttribute("class","panel panel-default panel-body");  
  var para = document.createElement("P");
  var t = document.createTextNode(userInput);
  para.appendChild(t);  
    panel.appendChild(para);  // this is where a comments piece would go
    var c = document.createElement("INPUT");  // creating the comments field
    c.setAttribute("type", "text");
    c.setAttribute("id", "comment");
    c.setAttribute("placeholder", "comment here");
    c.setAttribute("class", "form-control input-lg");
    Commentspanel.appendChild(c);  // putting the comments field on the comments panel div
    var list = document.getElementById("journal");  // finding the desitnation div for the comments
    list.insertBefore(panel, list.firstChild);  // 
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();}


    function changeTextComment(){ 
  // to be modified from the above to change the location of the dump
  // this function ADDS a comment from the comment field to the div w id comment near it... 




    var userInput = document.getElementById('userInput').value;  // get the input from the user
    var panel = document.createElement("div");  // create a parent divider for everything

    
    

    // assignment of attributes
    panel.setAttribute("class","panel panel-default panel-body");  
    panel.setAttribute("id","panelBody");  
    var para = document.createElement("P");
    var t = document.createTextNode(userInput);
    para.appendChild(t);  
    
    // add comment area
    var c = document.createElement("INPUT");
    c.setAttribute("type", "text");
    c.setAttribute("id", "comment");
    c.setAttribute("placeholder", "comment here");
    c.setAttribute("class", "form-control input-lg");
    
    // add comment button attempt -- success <> now try to put it in the textarea
    var d = document.createElement("INPUT");
    d.setAttribute("type","button");
    d.setAttribute("class","btn btn-info active pull-right");
    d.setAttribute("onclick","commentThis()");
    d.setAttribute("value","Add Comment");
    panel.appendChild(para);  // this is where a comments piece would go

// the location for the journal is actually a set location!! not variant... 

    // place the item
    var destination = document.getElementById("journal")
    //destination.insertBefore(Commentaryarea, destination.firstChild);
    //destination.insertBefore(panel, destination.firstChild);
    destination.insertBefore(panel, destination.firstChild);
    panel.appendChild(c);
    panel.appendChild(d);

    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();}

    function setText(a){
      document.getElementById("userInput").value = a
      document.getElementById("userInput").focus();}



      function changeTextComment2(x){ 
  // to be modified from the above to change the location of the dump
  // this function ADDS a comment from the comment field to the div w id comment near it... 
    var userInput = document.getElementById('userInputG'+x).value;  // get the input from the user

    // assignment of attributes
    
    var para = document.createElement("P");
    var t = document.createTextNode(userInput);
    para.appendChild(t);  
    
    // add comment area

    
    // add comment button attempt -- success <> now try to put it in the textarea



    // place the item
    var destination = document.getElementById("goalcommentbody"+x)
    //destination.insertBefore(Commentaryarea, destination.firstChild);
    //destination.insertBefore(panel, destination.firstChild);
    destination.appendChild(para, destination.firstChild);


    document.getElementById('userInputG'+x).value = "";
    document.getElementById('userInputG'+x).focus();
  }

function commentThis(){ // to be modified from the above to change the location of the dump
    // success... loads a new location
    // needs attention: loads to the top (before last comment like the drum roll)
    // needs attention: loads contents from userInput rather then self... 

    var userInput = document.getElementById('comment').value;
    var para = document.createElement("P");
    var t = document.createTextNode(userInput); 
    para.appendChild(t);  
    $(para).insertBefore("#comment");
    clearField("comment");
  }


  function commentThis2(dataID, location){ 

    var userInput = document.getElementById('dataid').value;
    var para = document.createElement("P");
    var t = document.createTextNode(userInput); 
    para.appendChild(t);  
    $(para).insertBefore("#location");

    clearField("dataID");
  }


// this is the experiment... cleared out the experimental gunk


function clearField(a){
  document.getElementById(a).value = "";
  document.getElementById(a).focus();}

  function setText(a){
    document.getElementById("userInput").value = a
    document.getElementById("userInput").focus();
  }




  function changeText4(){
    var userInput = document.getElementById('userInput').value;
    var para = document.createElement("P");
    var t = document.createTextNode(userInput);
    para.appendChild(t);  
    var list = document.getElementById("journal")
    list.appendChild(para, list.firstChild);
    document.getElementById("userInput").value = "~";
    document.getElementById("userInput").focus();}












