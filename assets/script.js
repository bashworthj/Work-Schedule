var dayAndTime= moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').html(dayAndTime);

$('button').addClass("saveBtn");
$('textarea').addClass("textarea");


$(".table").each(function(){
    var time = moment().hour();
    var colorDisplay = parseInt($(this));

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