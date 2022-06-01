// using moment i captured the cureent date and time and then posted directly to page using j query.
var dayAndTime = moment().format('MMMM Do YYYY, h:mm:ss a')
$('#currentDay').text(dayAndTime);
var time = moment().hour();


//created this function to compare the created time slots against the curennt time classify them
//with the desired styling.
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
// when clicked, every save button related text value will be saved as well as its related time value.
$(".saveBtn").on('click', function () {
    var inputD = $(this).siblings(".todo").val();
    var whenD = parseInt($(this).attr("id"));

    localStorage.setItem(inputD, whenD);
    $(this).find('textarea').text(inputD);
    

});





$(".time-todo").each(function () {
    var stored = parseInt($(this).attr("id"));
    localStorage.getItem(stored);
    if (stored !== null) {
        $(this).find('textarea').text("add todo");
    }
});
