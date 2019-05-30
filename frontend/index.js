
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
let submitForm = document.querySelector(".submit")
let currentChar = ""

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


let button = document.createElement("button")
submitForm.append(button)
button.innerText = "Submit"

button.addEventListener("click", (e) =>{
    e.preventDefault()
    if (button.innerText == "Submit"){
        postChar()

        // fetchingCharacters()
            //switch divs inner text
        button.innerText = "Edit"
        console.log("switching to Edit")
    }
    else if(button.innerText == "Edit"){
        button.innerText = "Enter"
        let char = allChars.find(char => char.name === form[0].value)
        let imageInput = document.querySelector("#character_form")

        let strengthInput = document.createElement('input')
        strengthInput.type = "text"
        strengthInput.name = "strength"
        strengthInput.value = `${char.strength}`
        let dexterityInput = document.createElement('input')
        dexterityInput.type = "text"
        dexterityInput.name = "dexterity"
        dexterityInput.value = `${char.dexterity}`
        let constitutionInput = document.createElement('input')
        constitutionInput.type = "text"
        constitutionInput.name = "constitution"
        constitutionInput.value = `${char.constitution}`
        let intelligenceInput = document.createElement('input')
        intelligenceInput.type = "text"
        intelligenceInput.name = "intelligence"
        intelligenceInput.value = `${char.intelligence}`
        let wisdomInput = document.createElement('input')
        wisdomInput.type = "text"
        wisdomInput.name = "wisdom"
        wisdomInput.value = `${char.wisdom}`
        let charismaInput = document.createElement('input')
        charismaInput.type = "text"
        charismaInput.name = "charisma"
        charismaInput.value = `${char.charisma}`
        let skillInput = document.createElement('textarea')
        skillInput.type = "text"
        skillInput.name = "skill"
        skillInput.value = `${char.skill}`
        let hpInput = document.createElement('input')
        hpInput.type = "text"
        hpInput.name = "hp"
        hpInput.value = `${char.hitpoints}`
        document.querySelector('.strength').innerText = "Strength:"
        document.querySelector('.dexterity').innerText = "Dexterity:"
        document.querySelector('.constitution').innerText = "Constitution:"
        document.querySelector('.intelligence').innerText = "Intelligence:"
        document.querySelector('.wisdom').innerText = "Wisdom:"
        document.querySelector('.charisma').innerText = "Charisma:"
        document.querySelector('.skills').innerText = "Skills:"
        document.querySelector('.hp').innerText = "Health:"
        document.querySelector('.strength').append(strengthInput)
        document.querySelector('.dexterity').append(dexterityInput)
        document.querySelector('.constitution').append(constitutionInput)
        document.querySelector('.intelligence').append(intelligenceInput)
        document.querySelector('.wisdom').append(wisdomInput)
        document.querySelector('.charisma').append(charismaInput)
        document.querySelector('.skills').append(skillInput)
        document.querySelector('.hp').append(hpInput)
        imageInput[13].value = `${char.image_url}`
        console.log("switching to Enter")
    }

    else if(button.innerText == "Enter"){
        let char = allChars.find(char => char.name === form[0].value)
        let race_name = allRaces.find(race => race.id === char.race_id)

        let shirt = allClasses.find(shirt => shirt.id === char.class_value)
        patchChar(char.id)
        button.innerText = "Edit"
        document.querySelector('.name').innerText = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
        //form[3].value = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
        document.querySelector('.strength').innerText = `Strength: ${char.strength}`
        //form[4].value = `Strength: ${char.strength}`
        document.querySelector('.dexterity').innerText = `Dexterity: ${char.dexterity}`
        document.querySelector('.constitution').innerText = `Constitution: ${char.constitution}`
        document.querySelector('.intelligence').innerText = `Intelligence: ${char.intelligence}`
        document.querySelector('.wisdom').innerText = `Wisdom: ${char.wisdom}`
        document.querySelector('.charisma').innerText = `Charisma: ${char.charisma}`
        document.querySelector('.skills').innerText = `Skills: ${char.skill}`
        document.querySelector('.hp').innerText = `Health: ${char.hitpoints}`
        console.log("switching back to Edit")
    }
})

let deleteButton = document.createElement('button')
deleteButton.innerText = "Delete"
submitForm.append(deleteButton)

deleteButton.addEventListener("click",(e)=>{
    e.preventDefault()
    let charToDelete = currentChar
    deleteChar(charToDelete)
})



function postChar(){
    let race_name = allRaces.find(race => race.name === form[1].value)
    let class_name = allClasses.find(clas => clas.name === form[2].value)
    fetch(CharacterURL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name' : form[3].value,
            'race_id' : race_name.id,
            'class_value' : class_name.id,
            'skill' : form[10].value,
            'inventory' : form[13].value,
            // 'exp' : placeholder,
            'strength' : form[4].value,
            'dexterity' : form[5].value,
            'constitution' : form[6].value,
            'intelligence' : form[7].value,
            'wisdom' : form[8].value,
            'charisma' : form[9].value,
            'hitpoints' : form[12].value,
            'image_url' : form.image.value
            // 'level' : placeholder
        })
    })
    .then(res => res.json())
    .then((resp) => newCharRender(resp))
}

function patchChar(id){
    fetch(`http://localhost:3000/api/v1/characters/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            //'name' : form[3].value,
            //'race_id' : form[1].value,
            //'class_value' : form[2].value,
            'skill' : form[9].value,
            'inventory' : form[12].value,
            // 'exp' : placeholder,
            'strength' : form[3].value,
            'dexterity' : form[4].value,
            'constitution' : form[5].value,
            'intelligence' : form[6].value,
            'wisdom' : form[7].value,
            'charisma' : form[8].value,
            'hitpoints' : form[11].value,
            'image_url' : form[13].value
            // 'level' : placeholder
        })
    })
    .then(res => res.json())
    .then(obj => {
      let race_name = allRaces.find(race => race.id === obj.race_id)
      let shirt = allClasses.find(shirt => shirt.id === obj.class_value)
      document.querySelector('.name').innerText = `${obj.name} the level ${obj.level} ${race_name.name} ${shirt.name}`
      //form[3].value = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
      document.querySelector('.strength').innerText = `Strength: ${obj.strength}`
      //form[4].value = `Strength: ${char.strength}`
      document.querySelector('.dexterity').innerText = `Dexterity: ${obj.dexterity}`
      document.querySelector('.constitution').innerText = `Constitution: ${obj.constitution}`
      document.querySelector('.intelligence').innerText = `Intelligence: ${obj.intelligence}`
      document.querySelector('.wisdom').innerText = `Wisdom: ${obj.wisdom}`
      document.querySelector('.charisma').innerText = `Charisma: ${obj.charisma}`
      document.querySelector('.skills').innerText = `Skills: ${obj.skill}`
      document.querySelector('.hp').innerText = `Health: ${obj.hitpoints}`
      let hp = document.querySelector('.hp')//.firstElementChild
      hp.innerText = "Health:"
      let div = document.createElement('div')
      div.innerText = `${obj.hitpoints}`
      div.setAttribute("class","hpInt")
      let img = document.querySelector('.image').children[1]
      img.src = obj.image_url
      hp.append(div)
      let hpUp = document.createElement('button')
      hpUp.innerText = "HP UP"
      hpUp.addEventListener('click',(e)=>{
          e.preventDefault()
          let newHp = parseInt(document.querySelector(".hpInt").innerText)+1
          document.querySelector(".hpInt").innerText = newHp

      })
      document.querySelector('.hp').append(hpUp)

      let hpDown = document.createElement('button')
      hpDown.innerText = "HP DOWN"
      hpDown.addEventListener('click',(e)=>{
          e.preventDefault()
          let newHp = parseInt(document.querySelector(".hpInt").innerText)-1
          document.querySelector(".hpInt").innerText = newHp
      })
      document.querySelector('.hp').append(hpDown)

    })

}

function deleteChar(charToDelete){
    let id = charToDelete.id
    let url = `${CharacterURL}` + `/` + `${id}`
    // debugger
    return fetch(url,{
        method: `DELETE`
    })
    .then(response => response.json())
}

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
    // debugger
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


    // debugger
    // let race_name = allRaces.find(race => race.id === char.race_id)

    // let shirt = allClasses.find(shirt => shirt.id === char.class_value)

    newCharRender(char)

//     currentChar = char
//     button.innerText = "edit"
//     document.querySelector('.name').innerText = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
//     // form[3].value = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
//     document.querySelector('.strength').innerText = `Strength: ${char.strength}`
//     // form[4].value = `Strength: ${char.strength}`
//     document.querySelector('.dexterity').innerText = `Dexterity: ${char.dexterity}`
//     document.querySelector('.constitution').innerText = `Constitution: ${char.constitution}`
//     document.querySelector('.intelligence').innerText = `Intelligence: ${char.intelligence}`
//     document.querySelector('.wisdom').innerText = `Wisdom: ${char.wisdom}`
//     document.querySelector('.charisma').innerText = `Charisma: ${char.charisma}`
//     document.querySelector('.skills').innerText = `Skills: ${char.skill}`
//     let hp = document.querySelector('.hp').firstElementChild
//     hp.innerText = "Health:"
//     let div = document.createElement('div')
//     div.innerText = `${char.hitpoints}`
//     div.setAttribute("class","hpInt")
//     hp.append(div)
//     form.inventory.value = char.inventory
//     let img = document.querySelector('.image').firstElementChild
//     img.src = char.image_url

//     document.querySelector('.image').append(img)


})

let hpUp = document.createElement('button')
hpUp.innerText = "HP UP"
hpUp.addEventListener('click',(e)=>{
    e.preventDefault()
    let newHp = parseInt(document.querySelector(".hpInt").innerText)+1
    document.querySelector(".hpInt").innerText = newHp

})
document.querySelector('.hp').append(hpUp)

let hpDown = document.createElement('button')
hpDown.innerText = "HP DOWN"
hpDown.addEventListener('click',(e)=>{
    e.preventDefault()
    let newHp = parseInt(document.querySelector(".hpInt").innerText)-1
    document.querySelector(".hpInt").innerText = newHp
})
document.querySelector('.hp').append(hpDown)


dropdown1.append(select1)
dropdown2.append(select2)
dropdown3.append(select3)
fetchingCharacters()
fetchingRaces()
fetchingClasses()



function newCharRender(char){
    // let char = allChars.find(char => char.id === e.target.selectedIndex)
    // debugger
    let race_name = allRaces.find(race => race.id === char.race_id)

    let shirt = allClasses.find(shirt => shirt.id === char.class_value)

    currentChar = char
    button.innerText = "Edit"
    document.querySelector('.name').innerText = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
    // form[3].value = `${char.name} the level ${char.level} ${race_name.name} ${shirt.name}`
    document.querySelector('.strength').innerText = `Strength: ${char.strength}`
    // form[4].value = `Strength: ${char.strength}`
    document.querySelector('.dexterity').innerText = `Dexterity: ${char.dexterity}`
    document.querySelector('.constitution').innerText = `Constitution: ${char.constitution}`
    document.querySelector('.intelligence').innerText = `Intelligence: ${char.intelligence}`
    document.querySelector('.wisdom').innerText = `Wisdom: ${char.wisdom}`
    document.querySelector('.charisma').innerText = `Charisma: ${char.charisma}`
    document.querySelector('.skills').innerText = `Skills: ${char.skill}`
    let hp = document.querySelector('.hp').firstElementChild
    hp.innerText = "Health:"
    let div = document.createElement('div')
    div.innerText = `${char.hitpoints}`
    div.setAttribute("class","hpInt")
    hp.append(div)
    form.inventory.value = char.inventory
    let img = document.querySelector('.image').children[1]
    img.src = char.image_url


}

})
