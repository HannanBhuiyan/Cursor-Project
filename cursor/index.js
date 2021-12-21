let cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", (e)=> {
     let x = e.pageX
     let y = e.pageY

     cursor.style.top = y + "px"
     cursor.style.left = x + "px"
     cursor.style.display = "block"

     // mouse none
     function mouseStop(){
          cursor.style.display = "none"
     }
     setTimeout(mouseStop, 1000)
})

document.addEventListener("mouseout", ()=> {
     cursor.style.display = "none"
})








