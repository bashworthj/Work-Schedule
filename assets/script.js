var dayAndTime= moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(dayAndTime);
var time = moment().hour();
// $('button').addClass("saveBtn");
// $('textarea').addClass("textarea");


$(".time-todo").each(function(){

    var colorDisplay = parseInt($(this).attr("id"));

   if (colorDisplay < time){
       $(this).addClass("past");
       $(this).removeClass("present");
       $(this).removeClass("future");
   } else if (colorDisplay === time){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
   } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
       
   }

})

// setInterval(function(){
//     dayAndTime()

// })