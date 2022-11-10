// New Things Learnt :
// Window.resize
// Window.innerHeight     Window.innerWidth
// Array.from()    // To convert array like objects in array.

// Get hold of pupils.
let pupils = document.getElementsByClassName("pupil");

let pupilArray = Array.from(pupils);
console.log(pupilArray);

let windowXWidth = window.innerWidth;
console.log(windowXWidth);
let windowYHeight = window.innerHeight;
console.log(windowYHeight);


window.addEventListener("resize", function(){
   windowXWidth = window.innerWidth;
   windowYHeight = window.innerHeight;
   // console.log("Resized");
})

document.addEventListener("mousemove", function(evt){
console.log(windowXWidth);
console.log(windowYHeight);
  currXPos = evt.clientX / windowXWidth;
  // console.log(currXPos);

  currYPos = evt.clientY / windowYHeight;
  // console.log(currYPos);

  pupilArray.forEach(function(pup){
    pup.style.transform = `translate(${(currXPos* 90) - 45}px, ${(currYPos* 90)-45}px)`
  })

})
