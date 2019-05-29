document.addEventListener('DOMContentLoaded', () => {


const CharacterURL = "http://localhost:3000/api/v1/characters"
const CharClassURL = "http://localhost:3000/api/v1/charclasses"
const RacesURL = "http://localhost:3000/api/v1/races"
const dropDown = document.querySelector(".chardropdown")
const selectTag = document.createElement('select')

let option = document.createElement('option')
option.innerText = "Select a Character"
option.selected = true
option.disabled = true
selectTag.append(option)


function fetchingCharacters(){
    fetch(CharacterURL)
    .then(res => res.json())
    .then(data => {
        data.forEach(char => renderCharacter(char))
    })
}

function renderCharacter(char){
    let opt = document.createElement("option")
    opt.innerText = char.name
    opt.setAttribute("id", char.id)
    selectTag.append(opt)
}

selectTag.addEventListener("change", (e) => {

})

// selectTag.addEventListener('change',(e)=>{
    
// })

dropDown.append(selectTag)
fetchingCharacters()
})
