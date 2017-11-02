// script.js

// Wait for html to load, then execute the following
$(function(){

  $('#start').click(function(){
    window.location.href = "sim_q1.html";
  });

  // When select is clicked
  $("#select").click(function(){
    // Show reason/correct

    var checkedid = $('input[type=radio][name=question]:checked').attr('id');

    if (typeof checkedid != 'undefined'){
      $("#description" + checkedid[checkedid.length-1]).show();
      // If revealed calue is correct, switch to next question button
      var reveal = $("#" + checkedid).val();

      if (reveal == "correct"){
        $('#next').show();
        $('#select').hide();
      }
    }

  });

  // When next is clicked
  $("#next").click(function(){

    // Go to the next question's page

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    console.log(filename);

    var questionNumber = parseInt(filename.substring(filename.lastIndexOf('.')-1));
    questionNumber = questionNumber + 1;

    newUrl = "sim_q" + questionNumber.toString() + ".html";

    window.location.href = newUrl;


  });

});
