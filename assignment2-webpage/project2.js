$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });

  $("#receivespambutton").keypress(function(e) {
    if(e.which == 13){
    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
    }
  });

  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

  $("#videoplayer").keypress(function(e){
    if(e.which == 13) {
      if ($($("#videoplayer").children()[0]).attr("src") == "pics/play.png") {
        $($("#videoplayer").children()[0]).attr("src", "pics/pause.jpg");
        $("#thevideo")[0].play();
      } else {
        $($("#videoplayer").children()[0]).attr("src", "pics/play.png");
        $("#thevideo")[0].pause();
      }
    }
  });



  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");
      if($("#fn").val()==""){
        alert("First Name is Empty!");
      }
      else if($("#mi").val()==""){
        alert("Middle Name is Empty!");
      }
      else if($("#ln").val()==""){
        alert("Last Name is Empty!");
      }

        return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");
      alert("Email is Empty!");
      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });



});


