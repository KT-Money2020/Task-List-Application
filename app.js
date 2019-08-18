



// Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
}

function addTask(e){
    if(taskInput.value === ''){
       alert('Add a task');
       }else{
        //Create an li element
        const li = document.createElement('li');
        //Add a class name to the list item
        li.className = 'collection-item';
        //Create text node and append to li, another specialized version of inner.html
        //Giving the list item a value 
        li.appendChild(document.createTextNode(taskInput.value));
           
           
        //Creating the 'a' link element
        const link = document.createElement('a');
        //Adding class name to the link element
        link.className = 'delete-item secondary-content';
        //Add the "x" remove icon beside the values displayed
        link.innerHTML = '<i class="fa fa-remove"></i>';
           
        //Appending the link to li
        //Looks something like this <a><li></li></a>   
        li.appendChild(link);
        //Append li to ul
        //Adds the list item to the empty box hidden within the html
        taskList.appendChild(li);
        //Clear input
        taskInput.value = '';

        e.preventDefault();
       }
}


// Remove Task 

function removeTask(e) {
    //Targetting the a tag which is the parent element of the li item tag
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
    e.target.parentElement.parentElement.remove();
        }
}

}




























