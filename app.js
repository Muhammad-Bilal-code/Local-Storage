let inputField = document.getElementsByClassName("input-field")[0]
// console.log(inputField)
let inptFieldVal;

let mainDiv = document.getElementsByClassName("main")[0]
// console.log(mainDiv)
let listItem;

let gtitemArr
let itemArr = [];
let strItemArr;
let parsItemArr;
let getLocalItemArr;
// console.log(getLocalItemArr)

strItemArr = JSON.stringify(itemArr)
window.localStorage.setItem("itemArr",strItemArr)
// console.log()


console.log(itemArr)
gtitemArr = window.localStorage.getItem("itemArr");
console.log(gtitemArr)
parsItemArr = JSON.parse(gtitemArr)
console.log(parsItemArr)

if(parsItemArr.length == 0){
    mainDiv.innerHTML = ""
}
else{
    for(i=0;i<itemArr.length;i++){
        listItem = document.createElement("input");
        listItem.setAttribute("class","list-item")
        mainDiv.appendChild(listItem)
        // console.log(itemArr[i])
        listItem.value = itemArr[i]
    }
}


function handleAdd(){

    console.log(parsItemArr)
    inptFieldVal = inputField.value;
    // console.log(inptFieldVal)
    parsItemArr.push(inptFieldVal)
    console.log(parsItemArr)
    mainDiv.innerHTML = ""
    for(i=0;i<parsItemArr.length;i++){
        listItem = document.createElement("input");
        listItem.setAttribute("class","list-item")
        mainDiv.appendChild(listItem)
        // console.log(itemArr[i])
        listItem.value = parsItemArr[i]
    }

    strItemArr = JSON.stringify(parsItemArr)
    window.localStorage.setItem("itemArr",strItemArr)

}



function handleClearLocal(){
    window.localStorage.clear()
}
// console.log(itemArr)