let btn=document.querySelector('button')
let body=document.querySelector('body')
mode=(e)=>{
    
    if (e.target.textContent=="light mode"){
        dark()
    }
    else{
        light()
    }
    console.log("mode changed")
    // console.log(e)


}

light=()=>{
    btn.innerText="light mode"
    body.style.backgroundColor="white"
    console.log("light function")

}

dark=()=>{
    btn.innerText="dark mode"
    body.style.backgroundColor = 'grey';
    console.log("dark function")

}





btn.addEventListener('click',mode)
