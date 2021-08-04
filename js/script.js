$(window).resize(function () { 
    if(screen.width < 992) {
        $(".main-container").css('height', "100%");
        $(".left-icons").css('height', $(".main-container").height());
    }
});
if(screen.width < 992) {
    //alert("true");
    $(".main-container").css('height', "100%");
    $(".left-icons").css('height', $(".main-container").height());
    //alert("mainContainer " + $(".main-container").height());
}

//Current time

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    //var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    //sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + ":" + min + " " + midday; /* adding time to the div */
      var t = setTimeout(currentTime, 1000); /* setting timer */
  }
  
  function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();



  //current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var dayName = today.toString().split(' ')[0];

today = dayName + " " + mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerText  = today;