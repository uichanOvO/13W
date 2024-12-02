let BOX = document.getElementById("BOX");
let resultDiv = document.getElementById("result");

BOX.addEventListener("change", function() {
    let select = BOX.options[BOX.selectedIndex].value;
    resultDiv.innerText = "마시고 싶은 카페 음료는?:" + select;
});