document.addEventListener('DOMContentLoaded', () => {


const CharacterURL = "http://localhost:3000/api/v1/characters"
const CharClassURL = "http://localhost:3000/api/v1/charclasses"
const RacesURL = "http://localhost:3000/api/v1/races"
const dropDown = document.querySelector("#dropdown")


fetch(CharacterURL)
.then((resp) => resp.json)
.then((respJson) => {
    debugger
    respJson.forEach((char) => {
        
    })

})


})

