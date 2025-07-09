const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
// on click hamberger icon options will appear
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
//on clicking cross icon option will disapper
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    }
    )
}