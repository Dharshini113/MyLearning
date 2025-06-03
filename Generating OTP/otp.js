// let btn=document.querySelector('button')
// let val=document.querySelector('span')
// console.log(btn)
// console.log(val)

// btn.addEventListener('click' , function(){
//     let otp= ''
//     for(i=0;i<6;i++){
//         otp+= Math.floor(Math.random()*10)
//     }
//     console.log(otp)
//     val.textContent=otp
// })

function randomnum(){
    let otp= ''
    for(i=0;i<6;i++){
        otp+= Math.floor(Math.random()*10)
    }
    console.log(otp)
    document.querySelector('span').textContent=otp
}