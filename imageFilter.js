
const buttons=document.querySelectorAll(".btn")
const images=document.querySelectorAll(".store-items")

buttons.forEach(function(button){

    button.addEventListener("click",(e)=>{
e.preventDefault()
        const filteredImage=e.target.dataset.filter
        console.log(filteredImage)

images.forEach((image)=>{  
if(filteredImage=="all"){image.style.display="block"}
else if(image.classList.contains(filteredImage)){image.style.display="block"}
else{image.style.display="none"}



})
 


    })

}) 