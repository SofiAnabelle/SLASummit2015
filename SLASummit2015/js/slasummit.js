

$(document).ready(function() {
	
$('.view1 > tr > td').hover(function(){
    $(this).animate({
      opacity: "0.0",
    }, 125);
  },
  function(){
    $(this).animate({
      opacity: "1.0",
    }, 125);
  });

      $('#calendar').fullCalendar({
        googleCalendarApiKey: '<AIzaSyA3zzFzy3AbGYTCUAq0jHxdQIMKR1ho_dk>',
        events: {
            googleCalendarId: 'webslasummit@gmail.com'
        }
    });
});

