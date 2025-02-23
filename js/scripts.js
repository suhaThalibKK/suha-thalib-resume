/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
document.querySelectorAll('[data-bs-toggle="modal"]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.getElementById('certificateModal')
      const title = button.getAttribute('data-title')
      const issuer = button.getAttribute('data-issuer')
      const description = button.getAttribute('data-description')
      const skills = button.getAttribute('data-skills')
      const logo = button.getAttribute('data-logo')
      const link = button.getAttribute('data-link')
  
      // Populate modal content
      modal.querySelector('#certificateTitle').textContent = title
      modal.querySelector('#certificateIssuer').textContent = issuer
      modal.querySelector('#certificateDescription').textContent = description
      modal.querySelector('#certificateSkills span').textContent = skills
      modal.querySelector('#certificateLogo').src = logo
      modal.querySelector('#certificateLink').href = link
    })
  })
  
  const texts = [
    'Senior Developer',
    'Backend Architect',
    'AI Integration Specialist'
  ]
  let count = 0
  let index = 0
  let currentText = ''
  let letter = ''
  
  function type() {
    if (count === texts.length) {
      count = 0 // Loop back to the start
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
  
    document.getElementById('typed-text').textContent = letter
  
    if (letter.length === currentText.length) {
      count++
      index = 0
      setTimeout(type, 2000) // Pause before next text
      return
    }
    setTimeout(type, 100) // Speed of typing
  }
  
  type()
  //
  // Dark Mode Toggle
  
  const toggleButton = document.getElementById('darkModeToggle')
  const currentTheme = localStorage.getItem('theme')
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
  })
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>'
  }
  
  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    if (isDark) {
      document.documentElement.removeAttribute('data-theme')
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>'
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>'
      localStorage.setItem('theme', 'dark')
    }
  })
  
  // Animated Progress Bars
  const animateProgressBars = () => {
    document.querySelectorAll('.progress-bar').forEach((bar) => {
      const level = bar.getAttribute('data-level')
      bar.style.width = level + '%'
      bar.setAttribute('aria-valuenow', level)
    })
  }
  
  // Intersection Observer for progress bars
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBars()
      }
    })
  })
  
  document.querySelectorAll('.progress-bar').forEach((bar) => {
    observer.observe(bar)
  })
  window.addEventListener('DOMContentLoaded', (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav')
    if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav',
        rootMargin: '0px 0px -40%'
      })
    }
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler')
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    )
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click()
        }
      })
    })
  })
  