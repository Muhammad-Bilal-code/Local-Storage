let inputField = document.getElementsByClassName("input-field")[0]
console.log(inputField)
let inptFieldVal;

let mainDiv = document.getElementsByClassName("main")[0]
console.log(mainDiv)
let listItem;

let itemArr = [];

function handleAdd(){
    inptFieldVal = inputField.value;
    itemArr.push(inptFieldVal)
    console.log(itemArr)
    mainDiv.innerHTML = ""
    for(i=0;i<itemArr.length;i++){
        listItem = document.createElement("input");
        listItem.setAttribute("class","list-item")
        mainDiv.appendChild(listItem)
        console.log(itemArr[i])
        listItem.value = itemArr[i]
    }
}
// console.log(itemArr)