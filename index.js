const MAX_BACKGROUNDS = 15
const IP = "play.aresarena.net"

let currentBackground = 1

const backgroundElement = document.querySelector('.background')

// slide show
setInterval(() => {
    backgroundElement.classList.remove(`img-${currentBackground}`)
    currentBackground = (currentBackground + 1) % MAX_BACKGROUNDS
    backgroundElement.classList.add(`img-${currentBackground}`)
}, 7000)

// fade in animation
setTimeout(() => {
    backgroundElement.style.opacity = 1
}, 1)

const copyIpButton = document.querySelector('#copy-ip')
const ipElement = document.querySelector('#ip')
copyIpButton.addEventListener("click", () => {
    navigator.clipboard.writeText(IP)
    ipElement.textContent = "Copié!"
    setTimeout(() => {
        ipElement.textContent = IP
    }, 1000)
})