let h1 = document.querySelector('h1');

//function for changing color

function changeColor(color,delay){
    //Each time create promise object
    return new Promise((resolve,reject) => {
        //task in promise block
        setTimeout(()=>{
            h1.style.color = color;
            //Call resolve() for automaticaly execute .then()
            resolve("color change");
        },delay);
    })
}

//function call
changeColor("red",1000)
//when resolve call then run .then()
.then((result)=>{
    console.log(result);
    console.log("red color");
    //return next function call
    return changeColor("blue",1000);
})
.then((result) => {
    console.log(result);
    console.log("blue color");
    return changeColor("green",1000);
})
.then((result)=>{
    console.log(result);
    console.log("green color");
})

.catch((error)=>{
    console.log(error);
    console.log("please try again");
})