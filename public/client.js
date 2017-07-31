$(document).ready(doMath);
console.log('test sourced');
var mathMethod ='';

function doMath(){
  console.log('in ready');
  $('.button').on('click',inputChg);
  $('.operator').on('click',operator);
  $('#ceterisparibus').on('click',finish);
  $('#clear').on('click',clear);
} //end of onReady func

//on num or operator btn clk, create str of nums in #input
function inputChg() {
  input = $(this).text();//get text operator clk
  $('.input').append(input);//binding to #input @ dom
}

function operator(){
  var input = $(this).text();//get text val from Operator clk
  $('#answer').append(input);//add method symbol to dom
  $('span').toggleClass("input");


if ($(this).data('name')==='addition'){
              mathMethod = 'addition';
  }
else if ($(this).data('name')==='subtraction'){
                  mathMethod  = 'subtraction';
  }
else if ($(this).data('name')==='multiply'){
                   mathMethod = 'multiply';
  }
else {
                    mathMethod = 'divide';
  }
return mathMethod;
}

function finish(){
    //switch to Second, First, MM send to calculator
    // Machine for Work!
  $('#total').text("√** computing **√");
  var first = $('.first').text();
  var second = $('.second').text();
  // var toMath = '';
  var sendData = {
    x: first,
    y: second,
    type: mathMethod
  };
  console.log(sendData);
  //send to server as object
  $.ajax({
    url: '/calcdat',
    method: 'POST',
    data: sendData,
    success: function(response){
      console.log('success');
      getResolution();
    }
  });//end of ajax

}//end of finish func


  function getResolution(){
    //get
    console.log('in getResolution func');
    $.ajax({
      url: '/solution',
      method: 'GET',
      success: function(res){
        console.log('success');
        console.log( 'back from Mothership with:', res.totalSum);
        $('#total').empty();
        $('#total').append(' = ' + res.totalSum);
      }
    });//end of ajax GET
  }//end of getResults func

  function clear (){ $('.first, .second, #answer, #total').empty();}
