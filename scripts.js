function calcBMI(){
  var weight, height, total;
  weight = document.bmi.weight.value;
  height = document.bmi.height.value;
  total = weight / height / height;
  document.bmi.result.value = parseFloat(total);
}
