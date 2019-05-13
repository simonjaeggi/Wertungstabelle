$(function() {
  $("#ddGelaende").hide();
  console.log("test");
  $('#ddGeschlecht').on('change', function(){

    if ($('#ddDisziplin').val() !== "default") {
      console.log("not default");
      $("#ddGelaende").fadeIn("slow");
    }
  });
});
