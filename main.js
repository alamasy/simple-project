const toggleMenu = document.getElementById('toggle-menu')

toggleMenu.addEventListener('click', () => {
    const menuIcon = document.getElementById('menu-icon')

    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-xmark')

})