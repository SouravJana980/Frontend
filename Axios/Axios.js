let url = "https://catfact.ninja/fact";
let h1 = document.querySelector('h1');
let div = document.querySelector('div');

async function getJoke(){
    try{
        let response = await axios.get(url);
        console.log(response.data.fact);
    }catch(err){
        console.log(err);
    }
}

getJoke();