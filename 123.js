let BOX = document.getElementById("BOX");
let resultDiv = document.getElementById("result");

BOX.addEventListener("change", function() {
    let select = BOX.options[BOX.selectedIndex].value;
    resultDiv.innerText = "하고 싶은 게임은?:" + select;
});