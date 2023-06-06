let taskInput = document.querySelector('.inputArea')
let addBtn = document.querySelector('.addBtn')
let inputList = document.querySelector('.input-lists')
let li;
let input;
let inputArray = [];

getLocalStorage();

// inputList.addEventListener('click',deleteFunction )
// inputList.addEventListener('click', editFunction)

addBtn.addEventListener('click', function () {
    input = taskInput.value;
    inputArray.push(input)
    setLocalStorage();
    getLocalStorage();

})

function setLocalStorage() {
    localStorage.setItem("taskInput", JSON.stringify(inputArray));
}
function getLocalStorage() {
    if (localStorage.getItem("taskInput")) {
        inputArray = JSON.parse(localStorage.getItem("taskInput"));
        buildUI();
    }
}

function buildUI() {
    inputList.innerHTML = '';
    inputArray.forEach(function (value, index) {

        li = document.createElement('li')
        let span = document.createElement('span')
        li.appendChild(span)
        span.innerHTML = value;
        taskInput.value = "";
        inputList.appendChild(li);
        taskInput.focus();

        // delete button
        deleteBtn = document.createElement('i')
        deleteBtn.classList.add('fa-solid', 'fa-trash')
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', function () {
            let indexofInput = index;
            deleteFunction(indexofInput);
        })

        // edit button
        editBtn = document.createElement('i')
        editBtn.classList.add('fa-solid', 'fa-pen')
        li.appendChild(editBtn)
        editBtn.addEventListener('click', function () {
            let indexofInput = index;
            editFunction(indexofInput)
        })



    })
}

function deleteFunction(id) {
    inputArray = inputArray.filter((item, index) => index != id)
    console.log(inputArray);
    setLocalStorage();
    getLocalStorage();
}

function editFunction(id){
    let edited=prompt('enter text');
inputArray.forEach((item,index)=>{
    if(index === id){
        inputArray[id]=edited
    }
    setLocalStorage();
    getLocalStorage();
})
}

// function deleteFunction(event) {
//     if (event.target.classList[1] === 'fa-trash') {
//         let item = event.target.parentElement;
//         item.remove();
//     }
// }

// function editFunction(event){
//     let item=event.target.parentElement
//     if(event.target.classList[1]=== 'fa-pen'){
//         let edited=prompt("text to enter")
//         let span=item.querySelector('span')
//         span.innerText=edited
//     }
// }





