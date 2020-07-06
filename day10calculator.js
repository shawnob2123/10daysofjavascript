<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 10 Binary Calculator</title>

  <style>

    body {
    width: 33%;
    }


  #res {
    background-color: lightgray;
    border: solid;
    height: 48px;
    font-size: 20px;
}


  #btn0, #btn1 {
    background-color: lightgreen;
    color: brown;
}


  #btnClr, #btnEql {
    background-color: darkgreen;
    color: white;
}


  #btnSum, #btnSub, #btnMul, #btnDiv {
    background-color: black;
    color: red;
}


  .buttonClass {
    width: 25%;
    height: 36px;
    font-size: 18px;
    margin: 0px;
    float: left;
}

  </style>
</head>
<body>
  <div id ="res" class="resultClass"> </div>
  <div id="btns" class="buttonContainer">
      <button id="btn0" class="buttonClass">0</button>
      <button id="btn1" class="buttonClass">1</button>
      <button id="btnClr" class="buttonClass">C</button>
      <button id="btnEql" class="buttonClass">=</button>
      <button id="btnSum" class="buttonClass">+</button>
      <button id="btnSub" class="buttonClass">-</button>
      <button id="btnMul" class="buttonClass">*</button>
      <button id="btnDiv" class="buttonClass">/</button>
  </div> 
  


  <script>
// On clicking either 0 or 1, add the corresponding text to the result inner html
// On clicking any operator, add that operator text to the result inner html
// On clicking button clear, clear the results field
// On clicking equals, evaluate the expression

document.getElementById('btn0').addEventListener('click', function() {

  // Insert Adjecent HTML method parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element.

  // before end specified as "legal position" - Before the end of the element (as the last child)
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function() {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve) {
    let btn = eve.target; // The target event property returns the element that triggered the event.

    // Add the inner html for the operator buttons for results field
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function() {

    document.getElementById('res').innerHTML = "";
};
  </script>
</body>
</html>
