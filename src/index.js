getAllDogs()

function getAllDogs() {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => loadDog(dog)))
}

function fetchOne(id) {
    fetch(`http://localhost:3000/pups/${id}`)
    .then(res => res.json())
    .then(dog => showDog(dog))
}

function patchDog(dog) {
    fetch(`http://localhost:3000/pups/${dog.id}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isGoodDog: !dog.isGoodDog
        })
    })
    .then(res => res.json()) 
    .then(dog => {
        showDog(dog)
    })
}

function loadDog(dog) {
    let dogSpan = document.createElement('span')
    dogSpan.textContent = dog.name
    dogSpan.id = dog.id
    dogSpan.addEventListener('click', handleClick)
    let dogBar = document.querySelector('#dog-bar')
    dogBar.appendChild(dogSpan)
}

function showDog(e) {
    let dogInfo = document.querySelector('#dog-info')
    dogInfo.innerHTML = ""
    let img = document.createElement('img')
    img.src = e.image
    let h2 = document.createElement('h2')
    h2.textContent = e.name
    let dogBtn = document.createElement('button')
    dogBtn.innerText = e.isGoodDog

function goodOrBad(e) {
    if(e.isGoodDog === true) {
        document.createElement('button')
        return dogBtn.innerText = "Good Dog!"
    }
    else {
        document.createElement('button')
        return dogBtn.innerText = "Bad Dog!"
        }
    }
    dogBtn.innerText = goodOrBad(e)
    dogInfo.append(img, h2, dogBtn)
    dogBtn.addEventListener('click', () => patchDog(e))
}

function handleClick(e) {
    fetchOne(e.target.id)
}