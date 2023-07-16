const nav = document.querySelector(".openLeftNav")
const closedNav = document.querySelector(".closedLeftNav")
const leftNav = document.querySelector(".leftNav")

const hidden = document.querySelector('.hidden')


closedNav.addEventListener('click', () => {
hidden.classList.toggle('hidden')
leftNav.classList.toggle("openLeftNav")
leftNav.classList.toggle("closedLeftNav")

console.log("element was clicked!")
})

