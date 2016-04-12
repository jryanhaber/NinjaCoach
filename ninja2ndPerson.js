


$(document).ready(function(){

// Firebase Data Storage

		var myFirebaseRef = new Firebase("https://integralinquiry.firebaseio.com/");



		var email;
		var password;


		var toggleLogIn = function(){
			$("#logInArea").toggle();
			$(".chomper").toggle();
	
		}

		$("#logInTrigger").on("click",function(){
			$("#logInArea").toggle();
			$(".chomper").toggle();

		});

// Sign in user
		$("#22").on("click",function(){

		console.log("attempting to log in");


				email = $("#login-email").val();
				password = $("#login-password").val();


			myFirebaseRef.authWithPassword({
			  email    : email,
			  password : password
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  	toggleLogIn();
			  }
			});


		});
// register new user
		$("#intiateRegistration").on("click",function(){

				email = $("#login-email").val();
				password = $("#login-password").val();


				myFirebaseRef.createUser({
				  email    : email,
				  password : password
				}, function(error, userData) {
				  if (error) {
				    console.log("Error creating user:", error);
				  } else {
				    console.log("Successfully created user account with uid:", userData.uid);
				  }
				});


});






// ||========================================================||
// || Original Function to save document state on exit
// 
 

var SaveThisDocumentState = (function (){
    // current memory situation
    console.log("++++ Save state just ran, and this document state saved");

    // save all contents to local variable localstorage.logs
    localStorage.logs = $("#initialLogDestination").html(); // save contents of initial log destination
    localStorage.personalLogs =   $("#personalLog").find(".modal-body").html();



    });

$(window).unload(function(){
  console.log(" ++ ++ ++  unload SEEMS TO BE running, thus document saving");

  SaveThisDocumentState();
    });






	if(localStorage.currentAcknowledgement != undefined){

		console.log("current acknlowlegement saved as "+localStorage.currentAcknowledgement);

	}else{ 
		console.log("no current Acknowledgement Saved, thus saving as 'Great work so far.  I love how you are showing up. You are incredible'" );
		localStorage.currentAcknowledgement = "Great work so far.  I love how you are showing up. You are incredible."

	}


	if(localStorage.currentEvaluationQuestion != undefined){

		console.log("current evaluation saved as "+localStorage.currentEvaluationQuestion);

	}else{ 
		console.log("no current evaluation question Saved, thus saving as 'How alive, vital, congruent and energized do you feel in this moment, on a scale of 1-10?'" );
		localStorage.currentEvaluationQuestion = "How alive, vital, congruent and energized do you feel in this moment, on a scale of 1-10?"

	}





// ||========================================================||
// || coach on integrity for an item function
// 

var coachOnIntegrity = function(){
	console.log("something happened");
	var integrityState = $(".bt2Focused:first").find(".integrityCheck").text(); 
       	  // identifying the integrity button here and creating a pointer to it
       	  var activeItemIntegrityButton = $(".bt2Focused").find(".integrityCheck");
       	  if($(activeItemIntegrityButton).hasClass("integrityCheckLow")){
       	  	integrityCheckCoachingResponse = ("It looks like you are way out of integrity with this. What would it take to come into integrity with this?");
       	  }
       	  else if($(activeItemIntegrityButton).hasClass("integrityCheckModerate")){
       	  	integrityCheckCoachingResponse = ("It looks like you are in low integrity with this. What would it take to come into deeper integrity with this?");


       	  }       	  

       	  else if($(activeItemIntegrityButton).hasClass("integrityCheckHigh")){
       	  	integrityCheckCoachingResponse = ("It looks like you are in moderate integrity with this. Great work with this. What would it take to come into even deeper integrity with this?");

       	  }       	  


       	  else if($(activeItemIntegrityButton).hasClass("integrityCheckVeryHigh")){
       	  	integrityCheckCoachingResponse = ("It looks like you are in high integrity with this. Excellent work with this. What would fierce interity with this look like?");

       	  }       	  


       	  else if($(activeItemIntegrityButton).hasClass("integrityCheckResetter")){
       	  	integrityCheckCoachingResponse = ("It looks like you are in fierce integrity with this. This is phenomenal, keep going.");

       	  }       	  


       	  else if($(activeItemIntegrityButton).hasClass("integrityCheckUndefined")){
       	  	integrityCheckCoachingResponse = ("To what degree are you in integrity with this? "); 
       	  }     

       	  else{}  	  


       	  	changeTextComment8(integrityCheckCoachingResponse ,destination, "thirdPersonComment", "userInputS1");
       	  $(".injunctions2ndPerson").hide();
       	  $("#BBB").fadeOut(800);
       	  if($(activeItemIntegrityButton).hasClass("integrityCheckUndefined")){
       	  	$(activeItemIntegrityButton).focus();}


       	  }

       	// ||========================================================||
// || coach on commitment function 
// 

var coachOnCommitment = function(){

	var commitmentState = $(".bt2Focused:first").find(".commitmentCheck").text(); 
       	  // identifying the commitment button here and creating a pointer to it
       	  var activeItemcommitmentButton = $(".bt2Focused").find(".commitmentCheck");
       	  if($(activeItemcommitmentButton).hasClass("commitmentCheckLow")){
       	  	commitmentCheckCoachingResponse = ("It looks like you are considering commiting to this. What would support your clarity and discernment?");
       	  }
       	  else if($(activeItemcommitmentButton).hasClass("commitmentCheckModerate")){
       	  	commitmentCheckCoachingResponse = ("It looks like you are intending to be in integrity with this Aim. What would it take to come into a deeper commitment with this?");


       	  }       	  

       	  else if($(activeItemcommitmentButton).hasClass("commitmentCheckHigh")){
       	  	commitmentCheckCoachingResponse = ("It looks like you are moderately committed to integrity with this aim. Excellent. What would it take to become more committed?");

       	  }       	  


       	  else if($(activeItemcommitmentButton).hasClass("commitmentCheckVeryHigh")){
       	  	commitmentCheckCoachingResponse = ("It looks like you are very committed to being in integrity with this aim. Wonderful. What would fierce commitment with this look like?");

       	  }       	  


       	  else if($(activeItemcommitmentButton).hasClass("commitmentCheckResetter")){
       	  	commitmentCheckCoachingResponse = ("It looks like you are in fierce commitment with this. This is phenomenal, keep going.");

       	  }       	  


       	  else if($(activeItemcommitmentButton).hasClass("commitmentCheckUndefined")){
       	  	commitmentCheckCoachingResponse = ("to what degree are you committed to this? "); 
       	  }     

       	  else{}  	  


       	  	changeTextComment8(commitmentCheckCoachingResponse ,destination, "thirdPersonComment", "userInputS1");
       	  $(".injunctions2ndPerson").hide();
       	  $("#BBB").fadeOut(800);
       	  if($(activeItemcommitmentButton).hasClass("commitmentCheckUndefined")){
       	  	$(activeItemcommitmentButton).focus();
       	  }

       	}



// make sure they dont show up on new item creation

// create a path for reactivating them... 



	// - 2nd person inquiry functions
	// ||========================================================||






 	// - Fade Comment Away Shortcuts//
	// || ======================================================== ||
	// || Defines what control click does on a comment (fade it away)

	$('body').on('click', '#myComment, #thirdPersonComment, #newConversationTitle', function (e) {

		if (e.metaKey == true) {
			e.preventDefault();
			thisItem = $(this)
			$(thisItem).fadeOut(400);

		}

	});

 	// - Auto Input Shortcuts //
	// ||========================================================||
	// Defines what enter does when logging in the chat window of the 2nd person inquiry space
	// sets it up so that 
	// // enter = logging as myself
	// // command + enter = logging as 'that which I am talking to'

	$('body').on('keydown', '#userInputS1', function (e) {

	      // command enter
	      if (e.keyCode == 13 && e.metaKey == true) {
	      	e.preventDefault();
	      	changeTextComment6("shadowCommentBody", "thirdPersonComment");
	      }

	      // enter
	      else if (e.keyCode == 13) {
	      	e.preventDefault();
	      	changeTextComment6("shadowCommentBody", "myComment");
	      }

	  });



// ||========================================================||
// || This function assigns a shortcut that, when entered into the 2nd person inquiry field, will trigger a click on the 
// || 1st, 2nd, 3rd  Corresponding Coaching Trigger button... which is visible :)

$('body').on('keyup', '#userInputS1', function (e) {


	var activeValue = $("#userInputS1").val();
	switch(activeValue){


		case ";01":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").click();
					break;

					case ";02":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().click();
					break;

					case ";03":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().click();
					break;

					case ";04":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().click();
					break;

					case ";05":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().click();
					break;

					case ";06":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().click();
					break;

					case ";07":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().click();
					break;

					case ";08":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().click();
					break;

					case ";09":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().click();
					break;

					case ";10":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().click();
					break;

					case ";11":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().next().click();
					break;

					case ";12":
					// $("#clarifying1").click();
					$("#userInputS1").val("");
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().next().next().click();
					break;

					case ";13":
					$("#userInputS1").val("");
					// $("#clarifying1").click();
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().next().next().next().click();
					break;

					case ";14":
					$("#userInputS1").val("");
					// $("#clarifying1").click();
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().next().next().next().next().click();
					break;

					case ";15":
					$("#userInputS1").val("");
					// $("#clarifying1").click();
					$(".hearingButtons:visible:first").next().next().next().next().next().next().next().next().next().next().next().next().next().next().click();
					break;




// ||========================================================||
// || This function assigns a shortcut that, when entered into the 2nd person inquiry field, will trigger a click on the 
// || 1st, 2nd, 3rd  Corresponding Coaching Menu button... which is visible :)
// 



case ";m01":
					// $("#clarifying1").click();
					$(".shadowMenuButton:visible:first").click();
					$("#userInputS1").val("");
					break;

					case ";m02":
					// $("#clarifying1").click();
					$(".shadowMenuButton:visible:first").next().click();
					$("#userInputS1").val("");
					break;

					case ";m03":
					// $("#clarifying1").click();
					$("#beingMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m04":
					// $("#clarifying1").click();
					$("#hearingMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m05":
					// $("#clarifying1").click();
					$("#bigMindMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m06":
					// $("#clarifying1").click();
					$("#demonsMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m07":
					// $("#clarifying1").click();
					$("#accessMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m08":
					// $("#clarifying1").click();
					$("#byronMenuTrigger:visible").click();
					$("#userInputS1").val("");
					break;

					case ";m09":
					// $("#clarifying1").click();
					$("#miscCoachingTools:visible").click();
					$("#userInputS1").val("");
					break;


					case ";m10":
					// $("#clarifying1").click();
					$("#immunityToChangeTriggers:visible").click();
					$("#userInputS1").val("");
					break;


					case ";m11":
					// $("#clarifying1").click();
					$("#sedonaMethodTriggers:visible").click();
					$("#userInputS1").val("");
					break;



// ||========================================================||
// || 
// 			





default:



				// do nothing


			}
			

		});



	// ||========================================================||
	// Defines what openapple e does when your in 2nd person inquiry mode, I am basically using the 
	// emotiondestination value to discern whether I am in shadow work mode here, should be updated
	// when doing shadow work is attributed its own mode or when emotiondestination is given
	// another means for being discerned... but good for temporary use

	$('body').on('keydown', '#userInputS1', function (e) {

// ||========================================================||
// || // command + fn + 1 WHEN Access Coaching Menu visible shortcuts
// 


		// Effect: If the key ; gets pressed, then then next key pressed should trigger the
		// next function... 
		// Method: If the keypress is ;, turn on keyboard shortcut mode, 
		//any other key, turn it off
		// Impact: the ; key will trigger shortcut mode and prepare for any other shortcuts... 



		// if return is hit, check value, if it matches, then trigger effect... 
		// if ; is hit, trigger mode,


		

// ||========================================================||
// || shortcuts for integrity and commitment coaching
// 





	      	 // command .
	      	 if (e.keyCode == 190 && e.metaKey == true) {

	      	 	if (localStorage.emotionDestination == "shadowCommentBody"){
	      	 		e.preventDefault();
	      	 		console.log("something happened");
	      	 		coachOnIntegrity();


	      	 	}}


	      	      // command /
	      	      if (e.keyCode == 191 && e.metaKey == true) {

	      	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      	      		e.preventDefault();
	      	      		console.log("something happened");
	      	      		coachOnCommitment();


	      	      	}}



	      // command b
	      if (e.keyCode == 71 && e.metaKey == true) {
	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      		e.preventDefault();

	      		$("#beingWith1").click();

	      	}}

	      // command g
	      if (e.keyCode == 66 && e.metaKey == true) {
	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      		e.preventDefault();

	      		$("#under1").click();

	      	}}



	      // command e
	      if (e.keyCode == 69 && e.metaKey == true) {
	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      		e.preventDefault();
	      		changeTextComment8("What does this bring up for you?.",destination, "thirdPersonComment", "userInputS1");
	      	}}

	      // command k
	      if (e.keyCode == 75 && e.metaKey == true) {

	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      		e.preventDefault();
	      		$("#acknowledgement").click();
	      	}}




	      // command y
	      if (e.keyCode == 89 && e.metaKey == true) {

	      	if (localStorage.emotionDestination == "shadowCommentBody"){
	      		e.preventDefault();
	      		$("#redefineAcknowledgement").click();

	      	}


	      }


// adding another shortcut
// - will define and ask an assessment question
// - command u trigger here:
// - button next
// - 

	   	 // command z
	   	 if (e.keyCode == 90 && e.metaKey == true) {
	        // if you appear to be in 2nd person inquiry mode then activate all of this
	        if (localStorage.emotionDestination == "shadowCommentBody"){
	        // eliminate any default keyboard shortcuts
	        e.preventDefault();
	        // ask the self evaluation question with a prompt window, save the response 
	        $("#evaluation").click();

	    }
	}

  	      // command u
  	      if (e.keyCode == 85 && e.metaKey == true) {



  	      	if (localStorage.emotionDestination == "shadowCommentBody"){
  	      		e.preventDefault();
  	      		$("#redefineEvaluation").click();

  	      	}


  	      }


  	  });





// ||========================================================||
// || coaching menu label button functionality
// 




$("#acknlowlegement").click(function(){

	changeTextComment8(localStorage.currentAcknowledgement,destination, "thirdPersonComment", "userInputS1");
	$("#BBB").fadeOut(400);


});


$("#redefineAcknowledgement").click(function(){



	response = prompt("How would you like to be acknowledged right now?");
	if (response !== ""){
		localStorage.currentAcknowledgement = response


	}


	$("#BBB").fadeOut(400);


});


$("#evaluation").click(function(){



 // in local storage 
 localStorage.newResponseToEvaluation = prompt(localStorage.currentEvaluationQuestion);
	        // if theres actually an answer, continue
	        // now, if there is no previous value for this, we cannot compare, so we simply save
	        if (localStorage.lastResponseToEvaluation == null)
	        {
	        	console.log("nothing happened bc nothing saved for last one");
	        	localStorage.lastResponseToEvaluation = localStorage.newResponseToEvaluation; 
	        	return false;

	        } 


	        // friendly fail if theres not a number entered
	        else if (localStorage.newResponseToEvaluation == NaN || localStorage.lastResponseToEvaluation == NaN)
	        {
	        	console.log("thats not a number");
	        	return false;

	        }

			// continue if all other flags not caught to stop this, with the following
			else 
			{
				        // if there is, we compare and offer responses based on increases or decreases

				        if (localStorage.lastResponseToEvaluation > localStorage.newResponseToEvaluation)
				        {
				        	changeTextComment8("Your losing ground here.  This is a loss of "+ (localStorage.lastResponseToEvaluation - localStorage.newResponseToEvaluation) + "0 percent.  Identify any causes to this and lets self-correct.",destination, "thirdPersonComment", "userInputS1");
				        }

				        else if (localStorage.lastResponseToEvaluation < localStorage.newResponseToEvaluation)
				        {
				        	changeTextComment8("Your gaining ground here.  This is an increase of "+(localStorage.newResponseToEvaluation - localStorage.lastResponseToEvaluation) + "0 percent.  Notice whats working and lean into this.",destination, "thirdPersonComment", "userInputS1");
				        }				    

				        else if (localStorage.lastResponseToEvaluation == localStorage.newResponseToEvaluation)
				        {
				        	changeTextComment8("No noticeable shift here.  Great work for checking in.  Keep going.",destination, "thirdPersonComment", "userInputS1");
				        }
				        else 
				        {
				        	console.log("somethings failing here");
				        }

				        	// testing
				        	console.log("last response: "+localStorage.lastResponseToEvaluation);
				        	console.log("new response: "+localStorage.newResponseToEvaluation);

	       					// save the new value as the last value for the next time this runs to complete... 
	       					localStorage.lastResponseToEvaluation = localStorage.newResponseToEvaluation

	       				}

	       				$("#BBB").fadeOut(400);


	       			});


$("#redefineEvaluation").click(function(){
	console.log("something happened");
	response = prompt("What question shall be used to self-evaluate?");
	if (response !== ""){
		localStorage.currentEvaluationQuestion = response
	}


	$("#BBB").fadeOut(400);


});




// ||========================================================||
// simple coaching on designing your practice
// 

$("#practiceDesign1").click(function(){  
	changeTextComment8("If anything were possible, what would you like to get out of this practice?",destination, "thirdPersonComment", "userInputS1");
	$(".injunctions2ndPerson").hide();
	$("#BBB").fadeOut(400);
});


$("#practiceDesign2").click(function(){  
	changeTextComment8("What means, methods, practices would be most conducive to this?",destination, "thirdPersonComment", "userInputS1");
	$(".injunctions2ndPerson").hide();
	$("#BBB").fadeOut(400);
});


$("#practiceDesign3").click(function(){  
	changeTextComment8("What of this, would you like to engage next?",destination, "thirdPersonComment", "userInputS1");
	$(".injunctions2ndPerson").hide();
	$("#BBB").fadeOut(400);
});

$("#practiceDesign4").click(function(){  
	changeTextComment8("What is working, and what is not?  Is anything missing?  Are there oversights?  Is there unspecified leverage?",destination, "thirdPersonComment", "userInputS1");
	$(".injunctions2ndPerson").hide();
	$("#BBB").fadeOut(400);
});


$("#generative").click(function(){  
	changeTextComment8("What could you do today which would be the most generative?",destination, "thirdPersonComment", "userInputS1");
	$(".injunctions2ndPerson").hide();
	$("#BBB").fadeOut(400);
});





       	// teaching the app to recognize the quality of integrity present in the item focused
       	// and then to respond appropriately based on what it sees... I want each logitem to have 
       	// a value based on this... so it can respond intelligently... but this is a starting point... 
       	// I can probably add an object value for each logItem on creation with defaults that would
       	// start this off.. but for now... here we go... 




       	$("#integrityCoaching1").click(function(){ 

       		coachOnIntegrity();

       	});



       	$("#commitmentCoaching1").click(function(){ 

       		coachOnCommitment();

       	});


// ||========================================================||
// || Reset button for clearing all today items
// 



$('body').on('click', '.todayItemReset', function () {

      $(".TodayItem").toggleClass("TodayItem").find(".honeIn2").toggleClass("btn-primary").toggleClass("btn-default");


});




//   coach me on this button
//========================================||


// || 
// || // || Focused on one item
// || // || // ||Coaching on one item




$('body').on('click', '.coachMeOnThisMain', function () {


// ||========================================================||
// || Triggers focus on one item for coaching on it, then transmutes into a zoom out button.. 
// || Triggers a honed in focused coaching state of the app... should probably alter the value of 
// || a variable for indicating this... 

// $(this).siblings(".coachingOptionButtons").show();
$(".activeItem").siblings().hide();
$(this).addClass("coachingMeOnThis");
$(this).html("Zoom Back Out");
$(this).removeClass("coachMeOnThisMain");
localStorage.coachingOnOneItem = true;

    // set up 2nd person inquiry
    var workingTitle = $(".bt2Focused").find(".logItemTitle").html();
    $(".2ndPerson").show(400);
    $("#shadowBody").show(400);
    //$("#aim2nd").show(400);

    $("#spokenTo").val("My Inner Coach");
    // $("#aim2ndInput").focus();
    $("#titleOf2ndPersonInquiry").html(workingTitle);
    $(".activeItem").find(".standardCheckInMethod").hide(400);
    $("#userInputS1").focus();

});


});








