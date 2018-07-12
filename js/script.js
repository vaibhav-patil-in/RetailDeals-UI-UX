      
$(document).on('click', '.navbar-toggle', function(){
	$('aside.left-panel').toggleClass('collapsed');
});

$(document).on('click', '.trigger-comment-popover', function(){
	//$(".popover").fadeOut() //Close the popover
	$(".popover").fadeIn(); //open the popover
});


$(".welcomePublishClick").click(function () {
  if ($("#welcomePublish").is( ":hidden" ) ) {
    $("#welcomePublish").slideDown("slow");
  } else {
    $("#welcomePublish").slideUp("slow");
  }
});


$(".happyHoursPublishClick").click(function () {
  if ($("#happyHoursPublish").is( ":hidden" ) ) {
    $("#happyHoursPublish").slideDown("slow");
  } else {
    $("#happyHoursPublish").slideUp("slow");
  }
});

$(".phoneSectionClick").click(function () {
  if ($("#phoneSection").is( ":hidden" ) ) {
    $("#phoneSection").slideDown("fast");
  } else {
    $("#phoneSection").slideUp("fast");
  }
});

$(".profileSectionClick").click(function () {
  if ($("#profileSection").is( ":hidden" ) ) {
    $("#profileSection").slideDown("slow");
  } else {
    $("#profileSection").slideUp("slow");
  }
});

$("input[name='backColor']").change(function(){
  $(".color-overlay").css({"backgroundColor": $(this).val()});
});

$("input[name='fontColor']").change(function(){
  $(".business-name-overlay").css({"color": $(this).val()});
});

$("input[name='welcomeText']").keyup(function(){
  $(".business-name-overlay").text($(this).val());
});