document.addEventListener("DOMContentLoaded", function() {
let container= document.getElementById("outer-div");
let samllDiv = container.querySelectorAll(".small-text");

console.log(samllDiv[0]);
console.log(samllDiv.item(1));
console.log(samllDiv[2]);

console.log(samllDiv.length);
console.log(samllDiv);

let innerDiv = document.getElementById("inner-div");
let innerP = innerDiv.querySelectorAll(".inner-p");

console.log("Working with the inner..");
console.log(innerP.item(0));

// "outer-div"というidはinnerDivツリーの外側なので、querySelectorAllは空のノードを返します。なぜなら、innerDivの孫要素に何も発見されなかったからです。
let outerP = innerDiv.querySelectorAll("#outer-div");
console.log(outerP.length);

});
