let inputField = document.getElementsByClassName("input-field")[0]
// console.log(inputField)
let inptFieldVal;

let mainDiv = document.getElementsByClassName("main")[0]
// console.log(mainDiv)
let listItem;

let gtitemArr = [26]
let itemArr = [];
let strItemArr;
let parsItemArr;
let updatedArr ;
// console.log(getLocalItemArr)
console.log(itemArr)

gtitemArr = JSON.parse(window.localStorage.getItem("itemArr"))
console.log(gtitemArr)
// console.log(gtitemArr.length)

if(gtitemArr){
    updatedArr = [...gtitemArr]
    console.log(updatedArr)
    console.log(updatedArr.length)
}
// updatedArr = [...gtitemArr]
console.log(updatedArr)
console.log(updatedArr.length)


if(updatedArr.length != 0){
for(i=0;i<updatedArr.length;i++){
    // console.log("test")
    listItem = document.createElement("input");
    listItem.setAttribute("class","list-item")
    mainDiv.appendChild(listItem)
    // console.log(itemArr[i])
    listItem.value = updatedArr[i]
}
}


// for(i=0;i<gtitemArr.length;i++){
//     console.log(gtitemArr[i])
// }


function handleAdd(){

    // console.log(parsItemArr)
    inptFieldVal = inputField.value;
    // console.log(inptFieldVal)
    itemArr.push(inptFieldVal)
    console.log(itemArr)
    updatedArr = [...itemArr,...gtitemArr];
    console.log(updatedArr)
    mainDiv.innerHTML = ""
    for(i=0;i<updatedArr.length;i++){
        listItem = document.createElement("input");
        listItem.setAttribute("class","list-item")
        mainDiv.appendChild(listItem)
        // console.log(itemArr[i])
        listItem.value = updatedArr[i]
    }
    
    strItemArr = JSON.stringify(updatedArr)
    window.localStorage.setItem("itemArr",strItemArr)

    inputField.value = ""
}
console.log(itemArr)



function handleClearLocal(){
    window.localStorage.clear()
}
// console.log(itemArr)