const $box = document.querySelector('.box');

let offset = {x :0, y :0};
let isDown = false;
let thisBox = null;
let dragDom = null;

$box.addEventListener('mousedown', boxDown);

function startDragDom(d) {
    d.addEventListener('mousedown',(event) =>{
        isDown = true;
        dragDom = d
        offset.x = d.offsetLeft - event.clientX;
        offset.y = d.offsetTop - event.clientY;
     
    }); 

}
function addEvent(){
document.addEventListener('mouseup',()=>{
    console.log('mouseup');
    isDown = false;
 
});

document.addEventListener('mousemove',(event)=>{
    if(!isDown) return;
    console.log('mousemove');
    console.log(event.clientX,event.clientY);

    d.target.style.left = event.clientX +offset.x +'px';
    d.target.style.top = event.clientY +offset.y +'px';
})
     
}
addEvent();

startDragDom(document.querySelector('.box'))
startDragDom(document.querySelector('.box1 '))
