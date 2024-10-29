// EMAIL JS
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    sendEmail.sendForm('','','','')

    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully'

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContant = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
    
}

contactForm.addEventListener('submit', sendEmail)

// EMAIL.com  - docs  -  create Contact Form - EmailJS SDK

// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 350 viewport, add the class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrooUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            }  else {
                sectionsClass.classList.remove('active-link')
            }

    })
}
window.addEventListener('scroll', scrollActive)


// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,  // Animations repeat
})

sr.reveal(`.perfil`)
sr.reveal(`.info`, { origin: 'left', delay: 800 })
sr.reveal(`.skills`, { origin: 'left', delay: 1000 })
sr.reveal(`.about`, { origin:  'left', delay: 1200 })
sr.reveal(`.projects__card, services__card, .experience-card`, { interval: 100 })