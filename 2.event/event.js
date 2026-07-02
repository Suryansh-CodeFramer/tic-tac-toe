let div=document.querySelector('div')

div.onclick=()=>{
    alert("nigga what yu doing")
}

let b1=document.querySelector('#b1')

let b2=document.querySelector('#b2')

let didv=document.querySelector('#didv')


b1.onclick=(e)=>{
    console.log(e)
}


b2.addEventListener("dblclick",(e)=>{
    alert("handle 1");
})

b2.addEventListener("dblclick",(e)=>{
    alert("handle 2");
})

b2.addEventListener("dblclick",elef)

b2.addEventListener("dblclick",(e)=>{
    alert("handle 4");
    
})
b2.removeEventListener("dblclick",elef)



function elef(){
    alert("handle elef");
}


