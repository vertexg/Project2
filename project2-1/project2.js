document.addEventListener("DOMContentLoaded", function() {
  function caliculate(op1, op2, operator) {
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    // 演算子によって返される値が変わります。
    if(operator === "+") return op1 + op2;
    if(operator === "-") return op1 - op2;
    if(operator === "*") return op1 * op2;
    if(operator === "/") return op1 / op2;

    // NaNキーワードはNot A Numberを意味します。
    return NaN;

  }


const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

// 答えを出力するinputタグ
const answer = document.getElementById("answer");

document.getElementById("plusOperator").addEventListener("click", function(){answer.value = caliculate(op1.value, op2.value, "+")});

// 引き算のタグがクリックされると関数が実行されます。
document.getElementById("minusOperator").addEventListener("click", function(){answer.value = caliculate(op1.value, op2.value, "-")});

// 掛け算
document.getElementById("timesOperator").addEventListener("click", function(){answer.value = caliculate(op1.value, op2.value, "*")});

// 割り算
document.getElementById("divideOperator").addEventListener("click", function(){answer.value = caliculate(op1.value, op2.value, "/")});
});
