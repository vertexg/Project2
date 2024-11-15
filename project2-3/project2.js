document.addEventListener("DOMContentLoaded", function() {
function applyOperation(op1, op2, operator){
  // str型からint型へ変更します。
  op1 = parseFloat(op1) || 0;
  op2 = parseFloat(op2) || 0;

  // 演算子によって返される値が変わります。
  let result;
  if(operator === "+") result = op1 + op2;
  else if(operator === "-") result = op1 - op2;
  else if(operator === "*") result = op1 * op2;
  else if(operator === "/") result = op2 === 0 ? "Cannot divide by zero" : op1 / op2;
  else return NaN;

  // 結果が数値の場合、小数点以下を適切に処理
  return typeof result === 'number' ? Number(result.toFixed(8)) : result;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");
const answer = document.getElementById("answer");

const operatorButtons = document.querySelectorAll(".operator-btn");


for (let i = 0; i < operatorButtons.length; i++) {
  let opElement = operatorButtons[i];
  opElement.addEventListener("click", function() {
      // 要素.innerHTMLで要素の中身を取得する
      answer.value = applyOperation(op1.value, op2.value, opElement.innerHTML);
  })
}
});
