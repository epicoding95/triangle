

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    //debugger;

    var number1 = parseInt($("#length1").val());
    var number2 = parseInt($("#length2").val());
    var number3 = parseInt($("#length3").val());

debugger;
    if(number1 === number2 && number1 === number3 ){
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#nottriangle").hide();
    }else if(number1 === number2 && number1 != number3){
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
      $("#nottriangle").hide();
    }else if(number2 === number3 && number1 != number2){
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
      $("#nottriangle").hide();
    }else if(number1 === number3 && number2 != number1){
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
      $("#nottriangle").hide();
    }else if (number1 + number2 <= number3 || number1 + number3 <= number2 || number2 + number3 <= number1){
      $("#isosceles").hide();
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#nottriangle").show();
    }else if (number1 != number2 && number2 != number3 &&number3 != number1){
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").show();
      $("#nottriangle").hide();
    }
// else if(number1 === number2  || number1 === number3 || number1)

// number1 && number2 ===number3 || number2 && number3 === number1 || number1 && number3 === number2
  });
});
