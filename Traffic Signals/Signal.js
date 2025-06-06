let lights=document.querySelectorAll('.light')
console.log(lights)
console.log(lights[0])


let currentLight=0
//initialize the first light
lights[currentLight].classList.add('active')

setInterval(()=>{
    changeLight()
},2000)

const changeLight=()=>{
    //turn off
    lights[currentLight].classList.remove('active')
    //move to next light
    currentLight++;

    //reset after second index
    if(currentLight>2){
        currentLight=0
    }

    //turn on
    lights[currentLight].classList.add('active')
    console.log("hello lights")
}