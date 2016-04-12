


$(document).ready(function(){



$(".IntegrityTrigger").click(function(){

// For triggering modes that enable evalauting coherence of a given item, task, goal, aspiration with your
// values, set this functionality:

switch(localStorage.integrityTriggersVisible){

// if its false, 
    case "false":
      // show them
      $('.integritySoulCheck').show();
       // and change the mode to showing
      localStorage.integrityTriggersVisible = true;
    break;

     default:
// if its true or undefined, 
      // hide them
      $('.integritySoulCheck').hide();
      // and change the mode to hidden
      localStorage.integrityTriggersVisible = false;

       }  
})  


$(".PriorityTrigger").click(function(){

// For triggering modes that enable evalauting priority of a given item, task, goal or 
// aspiration set this functionality:

switch(localStorage.priorityTriggersVisible){

// if its false, 
    case "false":
      // show them
      $('.priorityCheck').show();
       // and change the mode to showing
      localStorage.priorityTriggersVisible = true;
    break;

     default:
// if its true or undefined, 
      // hide them
      $('.priorityCheck').hide();
      // and change the mode to hidden
      localStorage.priorityTriggersVisible = false;

       }  
})  




$(".integrityAimTrigger").click(function(){

// For triggering modes that enable evalauting priority of a given item, task, goal or 
// aspiration set this functionality:

switch(localStorage.integrityAimTriggersVisible){

// if its false, 
    case "false":
      // show them
      $('.integrityCheck').show();
       // and change the mode to showing
      localStorage.integrityAimTriggersVisible = true;
    break;

     default:
// if its true or undefined, 
      // hide them
      $('.integrityCheck').hide();
      // and change the mode to hidden
      localStorage.integrityAimTriggersVisible = false;

       }  
})  



$(".commitmentIntegrityTrigger").click(function(){

// For triggering modes that enable evalauting degree of commitment to an aim of a given item, task, goal or 
// aspiration set this functionality:

switch(localStorage.commitmentIntegrityTriggersVisible){

// if its false, 
    case "false":
      // show them
      $('.commitmentCheck').show();
       // and change the mode to showing
      localStorage.commitmentIntegrityTriggersVisible = true;
    break;

     default:
// if its true or undefined, 
      // hide them
      $('.commitmentCheck').hide();
      // and change the mode to hidden
      localStorage.commitmentIntegrityTriggersVisible = false;

       }  
})  

});  
