$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var zipInput = $("input#zip").val();


    $(".personname").text(personnameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".zip").text(zipInput);


    $("#orderconfirmation").show();
    alert("Your order has been successfully placed! The confirmation of your order shipping details are below. Have a wonderful day!");


    event.preventDefault();
  });
});
