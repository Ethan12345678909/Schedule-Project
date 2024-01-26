// Wait for document to  be ready before making call
$(document).ready( function () {
    // make a GET request to the JSON API using JQuery method
    $.getJSON("schedule.json", function (data) {
        //global variable to store data
        let myScheduleData = data.mySchedule;
         let adilScheduleData = data.adilSchedule;
          let samScheduleData = data.samSchedule;
    populateTable(scheduleData);

//event listen for changes to the dropdown menu
$('#day-selector').on("change", function () {
    //Get selected day
    let selectedDay = $(this).val();

    //filter schedule data based on the selected day
    let filteredData = scheduleData.filter( function (schedule){
        return selectedDay === 'all' || schedule.days.includes(selectedDay);
    })
})

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