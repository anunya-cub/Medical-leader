$("input[name=occupation]").change(function () {
  if ($("input[name=occupation]:checked").val() == 5) {
    $("#other_occupation").removeClass("d-none");
  } else {
    $("#other_occupation").addClass("d-none");
  }
});
$("input[name=placeWork]").change(function () {
  if ($("input[name=placeWork]:checked").val() == 7) {
    $("#other_placeWork").removeClass("d-none");
  } else {
    $("#other_placeWork").addClass("d-none");
  }
});
$("input[name=news]").change(function () {
  if ($("input[name=news]:checked").val() == 8) {
    $("#other_news").removeClass("d-none");
  } else {
    $("#other_news").addClass("d-none");
  }
});
