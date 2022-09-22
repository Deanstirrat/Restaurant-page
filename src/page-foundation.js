import './style.css';
import logo from './sushi.png';
export {createPage}

const createPage = function () {
    const content = document.getElementById('content')
    content.classList.add('content')

    //created elements
    const header = document.createElement('div');
    //header elements
    const logoContainer = document.createElement('div')
    const logoImage = new Image()
    logoImage.src = logo
    const restaurantName = document.createElement('h3')
    restaurantName.textContent = "The Den"

    const tabsContainer = document.createElement('div')
    const menuTabContainer = document.createElement('div')
    menuTabContainer.textContent = "Menu"
    const aboutTabContainer = document.createElement('div')
    aboutTabContainer.textContent = "About"
    const contactTabContainer = document.createElement('div')
    contactTabContainer.textContent = "Contact"

    //header element classes
    header.classList.add('header')
    logoContainer.classList.add('logo-container')
    logoImage.classList.add('logo-image')
    restaurantName.classList.add('restraunt-name')
    tabsContainer.classList.add('tabs-container')
    menuTabContainer.classList.add('tab')
    aboutTabContainer.classList.add('tab')
    contactTabContainer.classList.add('tab')

    //append header elements
    logoContainer.appendChild(logoImage)
    logoContainer.appendChild(restaurantName)
    header.appendChild(logoContainer)
    tabsContainer.appendChild(menuTabContainer)
    tabsContainer.appendChild(aboutTabContainer)
    tabsContainer.appendChild(contactTabContainer)
    header.appendChild(tabsContainer)

    //append content elements
    content.appendChild(header)
}