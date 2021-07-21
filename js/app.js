function scrollHeader() {
  const nav = document.getElementById('header')

  if (this.scrollY >= 50) {
    nav.classList.add('active-header')
  } else {
    nav.classList.remove('active-header')
  }
}

window.addEventListener('scroll', scrollHeader)

const desktopNavLinks = document.querySelectorAll('.nav-link-desktop')
const dropdownMenu = document.querySelectorAll('.dropdown-menu')

desktopNavLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    showDropdown(index)
  })
})

dropdownMenu.forEach(item => {
  item.addEventListener('mouseleave', () => {
    removeDropdown(item)
  })
})

function showDropdown(index) {
  dropdownMenu.forEach(item => {
    item.classList.remove('active-dropdown-menu')
  })
  dropdownMenu[index].classList.toggle('active-dropdown-menu')
}

function removeDropdown(item) {
  item.classList.remove('active-dropdown-menu')
}

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile')
      toggle.classList.toggle('active-bx')
    })
  }
}
showMenu('bx', 'menu-mobile')
