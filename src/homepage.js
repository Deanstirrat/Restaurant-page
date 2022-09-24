import './homepageStyle.css';
import logo from './cocktail-shaker.png';
export {buildHomepage}

const buildHomepage = function () {
    const content = document.getElementById('content')
    content.classList.add('content')

    //created elements
    const header = document.createElement('div');
    const main = document.createElement('div');


    //header elements
    const logoContainer = document.createElement('div')
    const logoImage = new Image()
    logoImage.src = logo
    const restaurantName = document.createElement('h3')
    restaurantName.textContent = "The Den"

    const tabsContainer = document.createElement('div')
    const aboveTabs = document.createElement('div')
    const tabs = document.createElement('div')
    const homeTabContainer = document.createElement('button')
    homeTabContainer.textContent = "Home"
    const menuTabContainer = document.createElement('button')
    menuTabContainer.textContent = "Menu"
    const aboutTabContainer = document.createElement('button')
    aboutTabContainer.textContent = "About"
    const contactTabContainer = document.createElement('button')
    contactTabContainer.textContent = "Contact"
    //header element classes
    header.classList.add('header')
    logoContainer.classList.add('logo-container')
    logoImage.classList.add('logo-image')
    restaurantName.classList.add('restaurant-name')
    tabsContainer.classList.add('tabs-container')
    tabs.classList.add('tabs')
    homeTabContainer.classList.add('tab')
    homeTabContainer.setAttribute('id', 'homeTabButton')
    menuTabContainer.classList.add('tab')
    menuTabContainer.setAttribute('id', 'menuTabButton')
    aboutTabContainer.classList.add('tab')
    aboutTabContainer.setAttribute('id', 'aboutTabButton')
    contactTabContainer.classList.add('tab')
    contactTabContainer.setAttribute('id', 'contactTabButton')
    //append header elements
    logoContainer.appendChild(logoImage)
    logoContainer.appendChild(restaurantName)
    header.appendChild(logoContainer)
    tabs.appendChild(homeTabContainer)
    tabs.appendChild(menuTabContainer)
    tabs.appendChild(aboutTabContainer)
    tabs.appendChild(contactTabContainer)
    tabsContainer.appendChild(aboveTabs)
    tabsContainer.appendChild(tabs)
    header.appendChild(tabsContainer)



    //main elements
    const mainTextContainer = document.createElement('div')
    const textHeading = document.createElement('h1')
    textHeading.textContent = "\"The best meal I've ever had\""
    const textHeading2 = document.createElement('h1')
    textHeading2.textContent = "-Dean Stirrat"
    const textBody = document.createElement('p')
    textBody.textContent = "His tota magna timeam an, eu sit iudico epicuri, mea ex epicurei eloquentiam. At quo alii minim torquatos, mea et brute assum. At clita accusam mea. Vel nemore numquam no."
    //main element classes
    main.classList.add('main')
    mainTextContainer.classList.add('main-text-container')
    textHeading.classList.add('text-heading')
    textBody.classList.add('text-body')
    //append main elements
    mainTextContainer.appendChild(textHeading)
    mainTextContainer.appendChild(textHeading2)
    mainTextContainer.appendChild(textBody)
    main.appendChild(mainTextContainer)


    //append content elements
    content.appendChild(header)
    content.appendChild(main)
}