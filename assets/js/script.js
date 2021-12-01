var datetime = null,
        date = null;

var update = function () {
    date = moment()
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

$( function() {
    $( "#datepicker" ).datepicker();
  } );

var nameInp = $("#name")
var type = $("#project-type")
var wage = $("#wage")
var datepicker = $("#datepicher")
var formEl = $("#new-project")
var projectName ;
var projectType ;
var projectWage ;
var projectDueDate ;
var tbodyEl = $("#table-container")
var deleteProjectBtn ;

formEl.on("submit", function (event){
    event.preventDefault()
    var nameInp = $("#name")
    var type = $("#project-type")
    var wage = $("#wage")
    var datepicker = $("#datepicker")
    projectName = nameInp.val()
    projectType = type.val()
    projectWage = wage.val()
    projectDueDate = datepicker.val()
    printData(projectName,projectType,projectWage,projectDueDate);
})

var printData = function (a,b,c,d) {
    var newRow = $("<tr>")
    var newName = $("<td>").text(a);
    var newType = $("<td>").text(b);
    var newWage = $("<td>").text(c);
    var newDate = $("<td>").text(d);
    var e = moment(d, 'MM/DD/YYYY').diff(moment(), 'days')
    var newDays = $("<td>").text(e);
    var f = e * 8 * c
    var newTotal = $("<td>").text(f);
    deleteProjectBtn = $('<td>').addClass("btn-close");
    
    newRow.append(newName, newType, newWage, newDate, newDays, newTotal, deleteProjectBtn);
    tbodyEl.append(newRow)

    deleteProjectBtn.on("click",function(event){
    event.preventDefault()
    $(event.target).parent('tr').remove();})
}




