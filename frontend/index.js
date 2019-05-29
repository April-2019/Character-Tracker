document.addEventListener('DOMContentLoaded', () => {


const CharacterURL = "http://localhost:3000/api/v1/characters"
const CharClassURL = "http://localhost:3000/api/v1/charclasses"
const RacesURL = "http://localhost:3000/api/v1/races"
let allChars = []
let allRaces = []
let allClasses = []
const dropdown1 = document.querySelector(".chardropdown")
const dropdown2 = document.querySelector(".racedropdown")
const dropdown3 = document.querySelector(".classdropdown")
const select1 = document.createElement('select')
const select2 = document.createElement('select')
const select3 = document.createElement('select')
const form = document.querySelector('#character_form')

let option1 = document.createElement('option')
option1.innerText = "Select a Character"
option1.selected = true
option1.disabled = true
select1.append(option1)

let option2 = document.createElement('option')
option2.innerText = "Select Race"
option2.selected = true
option2.disabled = true
select2.append(option2)

let option3 = document.createElement('option')
option3.innerText = "Select Class"
option3.selected = true
option3.disabled = true
select3.append(option3)

function fetchingCharacters(){
    fetch(CharacterURL)
    .then(res => res.json())
    .then(data => {
        allChars = data
        allChars.forEach(char => renderCharacter(char))
    })
}

function fetchingRaces(){
    fetch(RacesURL)
    .then(res=>res.json())
    .then(data=>{
        allRaces = data
        allRaces.forEach(race => renderRace(race))
    })
}

function fetchingClasses(){
    fetch(CharClassURL)
    .then(res=>res.json())
    .then(data =>{
        allClasses = data
        allClasses.forEach(pants => renderClass(pants))
    })
}

function renderCharacter(char){
    let opt = document.createElement("option")
    opt.innerText = char.name
    select1.append(opt)
}

function renderRace(race){
    let opt = document.createElement("option")
    opt.innerText = race.name
    select2.append(opt)
}

function renderClass(pants){
    let opt = document.createElement("option")
    opt.innerText = pants.name
    select3.append(opt)
}

select1.addEventListener('change',(e)=>{
    let char = allChars.find(char => char.id === e.target.selectedIndex)
    let race_name = allRaces.find(race => race.id === char.race_id)
    let shirt = allClasses.find(shirt => shirt.id === char.class_value)
 debugger
    document.querySelector('.name').innerText = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
    document.querySelector('.strength').innerText = `Strength: ${char.strength}`
    document.querySelector('.dexterity').innerText = `Dexterity: ${char.dexterity}`
    document.querySelector('.constitution').innerText = `Constitution: ${char.constitution}`
    document.querySelector('.intelligence').innerText = `Intelligence: ${char.intelligence}`
    document.querySelector('.wisdom').innerText = `Wisdom: ${char.wisdom}`
    document.querySelector('.charisma').innerText = `Charisma: ${char.charisma}`
    document.querySelector('.skills').innerText = `Skills: ${char.skill}`
    document.querySelector('.hp').innerText = `Health: ${char.hitpoints}`
    form.inventory.value = char.inventory
    let img = document.createElement('img')
    img.src = char.image_url
    document.querySelector('.image').append(img)
   
})



dropdown1.append(select1)
dropdown2.append(select2)
dropdown3.append(select3)
fetchingCharacters()
fetchingRaces()
fetchingClasses()
})
