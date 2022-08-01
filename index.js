// axios.get("https://swapi.dev/api/people/1/")
//     .then(res=>{
//         console.log("Response!",res);
//     })
//     .catch(err=>{
//         console.log("Error",err)
//     })

// const starWarsPeople = async (id) => {
//     try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data)
//     }
//     catch(err){
//         console.log("Error",err)
//     }
// }

// starWarsPeople(5);
// starWarsPeople(10);
const jokes = document.querySelector("#jokes")
const button = document.querySelector("button")
const getDadJokes = async () => {
    try{
    const config = {headers: {'Accept': 'application/json'}}
    const res = await axios.get(`https://icanhazdadjoke.com`,config)
    return res.data.joke    
    }
    catch(err){
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJokes()
    console.log(jokeText)
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}
button.addEventListener('click',addNewJoke)
