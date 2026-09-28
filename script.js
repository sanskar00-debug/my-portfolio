// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('themeBtn')
let isLight = false

themeBtn.addEventListener('click', () => {
  isLight = !isLight
  document.body.classList.toggle('light', isLight)
  themeBtn.textContent = isLight ? '🌙' : '☀️'
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
})

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  isLight = true
  document.body.classList.add('light')
  themeBtn.textContent = '🌙'
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.borderBottomColor = 'rgba(188,140,255,0.15)'
  } else {
    navbar.style.borderBottomColor = 'var(--border)'
  }
})

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-links a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id')
    }
  })
  navLinks.forEach(link => {
    link.style.color = ''
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--purple)'
    }
  })
})

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
  '.project-card, .cert-card, .skill-group, .about-grid'
)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

revealElements.forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(20px)'
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
  observer.observe(el)
})

// ===== TYPING ANIMATION =====
const roles = [
  'Data Engineer',
  'Data Analyst',
  'Flutter Developer',
  'AI Enthusiast',
  'Problem Solver'
]

let roleIndex = 0
let charIndex = 0
let isDeleting = false

const heroName = document.querySelector('.hero-roles')
const typingEl = document.createElement('span')
typingEl.className = 'role-tag'
typingEl.id = 'typingRole'

// Find first role-tag and make it the typing element
const firstRoleTag = heroName.querySelector('.role-tag')
if (firstRoleTag) {
  firstRoleTag.id = 'typingRole'
}

function typeRole() {
  const currentRole = roles[roleIndex]
  const typingTarget = document.getElementById('typingRole')
  if (!typingTarget) return

  if (isDeleting) {
    typingTarget.textContent = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingTarget.textContent = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => { isDeleting = true }, 1800)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
  }

  const speed = isDeleting ? 60 : 100
  setTimeout(typeRole, speed)
}

setTimeout(typeRole, 800)

// ===== CONTACT FORM =====
function handleForm(e) {
  e.preventDefault()
  const name    = document.getElementById('nameInput').value.trim()
  const email   = document.getElementById('emailInput').value.trim()
  const msg     = document.getElementById('msgInput').value.trim()
  const formMsg = document.getElementById('formMsg')

  if (!name) {
    formMsg.textContent = '❌ Please enter your name!'
    formMsg.style.color = '#f87171'
    return
  }
  if (!email || !email.includes('@')) {
    formMsg.textContent = '❌ Please enter a valid email!'
    formMsg.style.color = '#f87171'
    return
  }
  if (!msg) {
    formMsg.textContent = '❌ Please write a message!'
    formMsg.style.color = '#f87171'
    return
  }

  formMsg.textContent = `✅ Thanks ${name}! I'll get back to you soon.`
  formMsg.style.color = '#4ade80'

  document.getElementById('nameInput').value  = ''
  document.getElementById('emailInput').value = ''
  document.getElementById('msgInput').value   = ''

  setTimeout(() => { formMsg.textContent = '' }, 4000)
}

// ===== STAT COUNTER ANIMATION =====
function animateCounter(el, target) {
  let current = 0
  const increment = target / 40
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      el.textContent = target + (el.dataset.suffix || '+')
      clearInterval(timer)
    } else {
      el.textContent = Math.floor(current) + (el.dataset.suffix || '+')
    }
  }, 40)
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num')
      nums.forEach(num => {
        const val = parseInt(num.textContent)
        if (!isNaN(val)) animateCounter(num, val)
      })
      statsObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

const heroStats = document.querySelector('.hero-stats')
if (heroStats) statsObserver.observe(heroStats)

// ===== SMOOTH SCROLL FOR NAV =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
