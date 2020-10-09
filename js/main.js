$(document).ready(function(){
    $(".active_share").hide()
    $(".share_btn").click(function(){
      $(".active_share").toggle();
      $(".share_btn").toggleClass("clicked");
    });
  });