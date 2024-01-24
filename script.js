// Wait for document to  be ready before making call
$(document).ready( function () {
    // make a GET request to the JSON API using JQuery method
    $.getJSON("schedule.json", function (data) {
        //global variable to store data
        let scheduleData = data.schedule;
    populateTable(scheduleData);
    }) ;

    function populateTable(scheduleData){
        $('#schedule-table-body').empty();

        $.each(scheduleData, function (i, schedule) {
             let row = "<tr>";
             row += '<td>'+ schedule.class_name + '<td>'
             row += '<td>' + schedule.teacher_name + '<td>'
             row += '<td>' + schedule.room_number + '<td>'
             row += '<td>' + schedule.days.join(', ') + '<td>'
             row += '</tr>'

             $('#schedule-table-body').append(row)
        })




        
    }
}

)