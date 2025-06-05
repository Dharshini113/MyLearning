// let hap=document.getElementById('happy')
// let sad=document.getElementById('sad')
// console.log(hap)
// console.log(sad)

let photo = document.querySelector('img')
console.log(photo)


let b1=document.getElementsByTagName('button')[0]
console.log(b1)

let b2=document.getElementsByTagName('button')[1]
console.log(b2)


b1.addEventListener('click' ,function(){
    setTimeout(() => {
        photo.src="normal.jpg"
    }, 2000);
    photo.src="Happy.jpg"
})

b2.addEventListener('click' ,function(){
    setTimeout(() => {
        photo.src="normal.jpg"
        
    }, 5000);
    photo.src="Sad.jpg"
})

// function hemj(){
//     alert("I am Happy")
//     photo.src="Happy.jpg"
// }

// function semj(){
//     alert("I am sad")
//     photo.src="Sad.jpg"
// }

