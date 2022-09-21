document.addEventListener("DOMContentLoaded", function(){
 secondView.style.display="none"
 thirdView.style.display="none"
 fifthView.style.display="none"
 fourthView.style.display="none"
})

let aboutBtn= document.querySelector("#aboutBtn");
let projectsBtn= document.querySelector("#projectsBtn");
let skillsBtn= document.querySelector("#skillsBtn");
let contactsBtn= document.querySelector("#contactBtn");
let firstView= document.querySelector(".firstView");
let secondView= document.querySelector(".secondViewStyle");
let thirdView= document.querySelector(".thirdViewStyle");
let fourthView=document.querySelector(".fourthViewStyle")
let fifthView= document.querySelector(".fifthViewStyle");
let mapSections= [ home={name:"Home", section:firstView}, about={name:"About", section:secondView}, projects= {name:"Projects", section:thirdView}, skills={name:"Skills", section:fourthView}, contacts={name:"Contacts", section:fifthView}]
let auxiliar =""
let auxiliar2=""

aboutBtn = document.addEventListener("click", changingName);
projectsBtn= document.addEventListener("click", changingName);
skillsBtn= document.addEventListener("click", changingName);
contactsBtn= document.addEventListener("click", changingName);

function changingName(evt, lowOrderFunction, lowOrderFunction2){
  let element= evt.target;
  lowOrderFunction= confirmation(element.innerText)
  if(lowOrderFunction === true && element!=auxiliar2 ){
      auxiliar = evt.target.innerText;
  }
  if (lowOrderFunction=== true){
    if (element.innerText !== mapSections[0].name){
      element.innerText = mapSections[0].name
        lowOrderFunction2 = animationActivation(element, auxiliar)
    }else {
      element.innerText= auxiliar2
        lowOrderFunction2 = animationActivation(element, auxiliar)
        
    }
    let btns= document.getElementsByClassName("linkNavStyle");
    let btnsText= [btns[0].innerText,btns[1].innerText,btns[2].innerText,btns[3].innerText];
    for(let index=0; index<btns.length; index++){
      if(btnsText[index] === mapSections[0].name){
        btns[index].innerText= auxiliar2
        element.innerText= mapSections[0].name
      }
    }
  }
  auxiliar2 = auxiliar
}

function confirmation (clickedItem){
  if (clickedItem === "About" ||clickedItem === "Projects" ||clickedItem === "Skills" ||clickedItem === "Contacts" || clickedItem === "Home"){
    return true
  }
}

function animationActivation(elementCheck, elementCheck2){
let elementString=elementCheck.innerText
let checker = mapSections.find(element=> element.name === elementString)
let checker2= mapSections.find(element => element.name === elementCheck2)

if(elementCheck.innerText === elementString && auxiliar2 === ""){
  checker.section.style.animation=" moveOut 800ms linear 0s 1 normal"
  setTimeout(()=>{
    checker.section.style.display="none"
    checker2.section.style.display="flex"
  },800)
  checker2.section.style.animation="opacityChange 900ms linear 0s 1 normal"
}else{
  let sectionHook= mapSections.find(element=> element.name === auxiliar2)
    sectionHook.section.style.animation=" moveOut 800ms linear 0s 1 normal"
    setTimeout(()=>{
      sectionHook.section.style.display="none"
      checker2.section.style.display="flex"
    },800)
    checker2.section.style.animation="opacityChange 900ms linear 0s 1 normal"
    
    /*console.log("auxiliar element"+auxiliar)
    console.log("auxiliar 2 element"+auxiliar2)
    console.log(" checker element"+checker.name)
    console.log("checker 2 element"+checker2.name)
    */
    
    }
  }
