
// ||========================================================||
// || trigger for pressing enter from within part 3
// 


$(document).ready(function(){


	var _DEBUG = true;

	var items = [];

	// Intent: have it remember my patterns and then automatically guide me through them... 
	// how: track my pattern from a to b, b to d, d to a, etc.. .so that It can reproduce them.. 

	var lastSubmission = "notDefinedYet";

	$(".resetThis").on("click",function(){
		$("#log").empty();

	});


	$(".viewSpot").on("click",function(){
		$(".viewSpotActive").removeClass("viewSpotActive");
		$(this).addClass("viewSpotActive");

	});

// changing the destination for this one... 
	var logLocation = $(".viewSpotActive").find("#log");



	$('body').on('click', '._pItem', function () {

	 	// get the value of the items contents
	 	// save it in a variable
	 	// set it as the new focus 	
	 	var newFocus = $(this).find("._content").text();
	 	$(".focusLog").val(newFocus).focus();

	 });

	$('body').on('hover', '._pItem', function () {



	});


function jumpToPageBottom() {

		$('#logArea').scrollTop($('#logArea').get(0).scrollHeight);
		console.log("d");
}


	$('#logArea').change(function(){
		jumpToPageBottom();
		console.log("d2");

		});



	$('body').on('keydown', '.focusLog', function (e) {

		if (e.keyCode == 13) {
			if ($(this).val() != ""){
			  // prevent default keystroke function
			  e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem focusItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Focus: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

			// if lastSubmission is tracked, then I can save a likely next step here now

			// define what was submitted last and save it
			lastSubmission = "focusLog";

		}

	}

});

$('body').on('keydown', '.statusLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

	  		// prevent default keystroke function
	  		e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem statusItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Status Update: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();
			lastSubmission = "statusLog";


		}
	}


});



$('body').on('keydown', '.ideaLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem ideaItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Idea: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}


	}

	

});


$('body').on('keydown', '.challengeLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem challengeItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Challenge: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}


	}




});



$('body').on('keydown', '.timeLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem timeItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Time Spent: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}

	}





});




$('body').on('keydown', '.newDesireLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem desireItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("What I want from this: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}

	}





});




$('body').on('keydown', '.stateLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem stateItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("My State: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$("#lookingInwards").focus();
			jumpToPageBottom();

		}

	}




});



$('body').on('keydown', '.beingLog', function (e) {

	if (e.keyCode == 13) {

		if ($(this).val() != ""){

	  		 // prevent default keystroke function
	  		 e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem beingItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Being with this: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			$("#lookingInwards").attr("class","form-control input-lg emergenceLog")
			$("#lookingInwards").attr("placeholder", "What does this bring up for you?")
			jumpToPageBottom();

		}
	}

});



$('body').on('keydown', '.emergenceLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){
		  // prevent default keystroke function
		  e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem beingItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("What this brings up: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			$("#lookingInwards").attr("class","form-control input-lg beingLog")
			$("#lookingInwards").attr("placeholder","What is it like being with this?")
				jumpToPageBottom();
	}

	}

});




$('body').on('keydown', '.alivenessLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){
			 // prevent default keystroke function
			 e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem alivenessItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Alive for me: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$("#lookingInwards").focus();
				jumpToPageBottom();
	}

	}

});







});