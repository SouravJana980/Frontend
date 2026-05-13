let button = document.querySelector('button');
let p = document.querySelector('p');


button.addEventListener("click", async ()=>{
    let result = await getFact();
    p.innerText = result;
})

let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(err){
        return "error";
    }
}