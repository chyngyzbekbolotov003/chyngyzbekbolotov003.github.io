let button = document.querySelector("button");
let input1 = document.querySelector("#name");
let input2 = document.querySelector("#massage");
let input3 = document.querySelector("#color");
button.addEventListener("click", function() {
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    let div = document.createElement("div");
    let spantext = document.createElement("span");
    let spanmass = document.createElement("span");
    spantext.innerText = input1.value + ':';
    spanmass.innerText = input2.value;
    spantext.style.color = input3.value;
    div.append(spantext);
    div.append(spanmass);
    document.body.append(div)
})
button.addEventListener('click', function(){
    fetch("https://live-chat-e33d1-default-rtdb.firebaseio.com/chat.json" , {
        method: "POST",
        body: JSON.stringify({
            name: inputName.value,
            message: inputMessage.value,
            color: inputColor.value,
        }),
    });