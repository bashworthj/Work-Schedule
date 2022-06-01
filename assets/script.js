var dayAndTime = moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(dayAndTime);
var time = moment().hour();



$(".time-todo").each(function () {

    var colorDisplay = parseInt($(this).attr("id"));

    if (colorDisplay < time) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (colorDisplay === time) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

    }

})

$(".saveBtn").on('click', function () {
    var inputD = $(this).siblings(".todo").val();
    var whenD = parseInt($(this).attr("id"));

    localStorage.setItem(inputD, whenD);
    
    

});





$(".time-todo").each(function () {
    var stored = parseInt($(this).attr("id"));
    localStorage.getItem(stored);
    if (stored !== null) {
        $(this).find('textarea').text(stored);
    }
});
