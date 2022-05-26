const listcard=document.getElementById("listcard")

const btnNext=document.getElementById("next")

const btnPre=document.getElementById("pre")

const num=listcard.children.length-2

console.log(num)

listcard.addEventListener("mouseenter",()=>{
    if(num>=3){
        btnNext.style.display="block";
        btnPre.style.display="block";
    }
   
})

listcard.addEventListener("mouseover",()=>{
    btnNext.style.display="none";
    btnPre.style.display="none";
})





