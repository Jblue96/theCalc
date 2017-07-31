//calculator
// $(document).ready(function());

  console.log("this thing work?");
function calculate (first, second, answer){
var solution = '';
if (answer  === 'addition'){
solution = parseInt(first) + parseInt(second);
console.log(solution);
return solution;
  } //end solution additions
  else if (answer ==='subtraction') {
  solution = parseInt(first) - parseInt(second);
  console.log(solution);
  return solution;
  }
    else if(answer ==='multiply'){
    solution = parseInt(first) * parseInt(second);
    console.log(solution);
    return solution;
}
      else {
      solution = parseInt(first) / parseInt(second);
      console.log(solution);
      return solution;
  }
} // end calc function



//export calc to mothership
module.exports = calculate;
