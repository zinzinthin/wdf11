let getul = document.querySelector('ul.list-group');

// console.log(getul);

// console.log(getul.children);

// console.log(getul.children[0]);

//console.log(getul.children[0].children[0]);

//console.log(getul.children[0].children[0].children[0]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++ click event ++++++++++++++++++++++++++++++

// => addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

//Method1
// clearbtn.addEventListener("click",function(e){
//     // console.log(e);
//     //console.log(this);
// });

// clearbtn.addEventListener("click",(e)=>{
//     //console.log(e);
//     console.log(this); //window.this...
// });

//single click
//clearbtn.addEventListener('click',showEvent);

//double click
//clearbtn.addEventListener('dbclick',showEvent);

function showEvent(e){

    console.log(`Event type = ${e.type}`);
}

// ++++++++++++++++++++++++++++++++++++++++++++++ Mouse Event (Pointer Event) ++++++++++++++++++++++++

//mouseup (click)

//mousedown

//mouseenter

//mouseover (element to element within it boundary)

//mouseleave

//mousemove

//+++++++++++++++++++++++++++++++++++++++++++++++++ button type +++++++++++++++++++++++++++
//button & reset type
// document.getElementById('add-task').addEventListener('click',function(){
//    console.log("Click add task ",this.type);
// });

// document.getElementsByClassName('btn').addEventListener('click',function(){
//     console.log("Click add task ",this.type);
//  }); Error => ByClassName ,it occurs type error

//submit type
// document.getElementById('add-task').addEventListener('click',function(e){
//     e.preventDefault(); //without prevent default, form submit type doesn't work for js code bcz it works for server
//     console.log("Click add task ",this.type);
//  });


//++++++++++++++++++++++++++++++++++++++++++++++++++Input Event (Keyboard Event)+++++++++++

const getinput = document.querySelector('#task');

//keydown
// getinput.addEventListener('keydown',inputeventtype);

//keypress
//getinput.addEventListener('keypress',inputeventtype);

//keyup
// getinput.addEventListener('keyup',inputeventtype);

//input
getinput.addEventListener('input',inputeventtype);

//focus
getinput.addEventListener('focus',inputeventtype);

//blur
getinput.addEventListener('blur',inputeventtype);

//cut(cut+x)
getinput.addEventListener('cut',inputeventtype);

//copy
getinput.addEventListener('copy',inputeventtype);

//pase (ctl+v)
getinput.addEventListener('pase',inputeventtype);


function inputeventtype(e){

    //console.log(e.target);
    //console.log(this);

    // console.log(`Event type = ${e.type}`);

    // console.log(e.target.value);
    // console.log(this.value);
    // console.log(getinput.value);

}

//+++++++++++++++++++++++++= Event Bubbling =+++++++++++++++++++++++++++

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('I am card-title');
// });

// document.querySelector('.card-header').addEventListener('click',function(){
//     console.log('I am card header');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('I am card');
// });

//+++++++++++++++++++++++++= Event Delegation =+++++++++++++++++++++++++++

const getdeleteitem = document.querySelector('.delete-item');

getdeleteitem.addEventListener('click',function(e){
    // console.log('I am delete item');

    // console.log(e.target);

   // console.log(this);
});


// document.body.addEventListener('click',e =>{
//     //console.log(e.target);

//     //console.log(e.target.className);

//     // if(e.target.className === "fas fa-trash-alt"){
//     //     console.log(`Hi, ${e.target.value}`);
//     // }

//     if(e.target.classList.contains("delete-item")){
//         console.log(`Hi, ${e.target.parentElement}`);
//         e.target.parentElement.parentElement.remove();
//     }


// });

document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();
   const getnewtask = document.getElementById('task').value;
   //localStorage.setItem('name',task);

   //can't store array directly to localstorage

   let alltasks;

   if(localStorage.getItem('mytasks') === null){
    alltasks = [];
   }else{
   
     alltasks = JSON.parse(localStorage.getItem('mytasks'));
   }

    alltasks.push(getnewtask);
    
    localStorage.setItem('mytasks',JSON.stringify(alltasks));
    alltasks.forEach(task => {
        console.log(task);
    });
});

