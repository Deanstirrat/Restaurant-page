import './menuPageStyle.css';
import logo from './cocktail-shaker.png';
export {buildMenuPage}

const buildMenuPage = function () {
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
    const menuTextContainer = document.createElement('div')
    const menuHeading = document.createElement('h1')
    menuHeading.textContent = "Menu"
    const appitizerHeader = document.createElement('h2')
    appitizerHeader.textContent = "Appitizers"
    const entreeHeading = document.createElement('h2')
    entreeHeading.textContent = "Entrees"
    const drinksHeading = document.createElement('h2')
    drinksHeading.textContent = "Drink Selection"

    const menuItemContainer1 = document.createElement('div')
    const menuItemContainer2 = document.createElement('div')
    const menuItemContainer3 = document.createElement('div')
    const menuItemContainer4 = document.createElement('div')
    const menuItemContainer5 = document.createElement('div')
    const menuItemContainer6 = document.createElement('div')
    const menuItemContainer7 = document.createElement('div')
    const menuItemContainer8 = document.createElement('div')
    const menuItemContainer9 = document.createElement('div')
    const menuItemContainer10 = document.createElement('div')
    const menuItemContainer11 = document.createElement('div')
    const menuItemContainer12 = document.createElement('div')

    const menuItem1 = document.createElement('p')
    menuItem1.textContent = "APPETIZER PLATER - (mozzarella (4pcs.), zuccidi (4pcs), jahpeno cheese popper (4pcs), breaded mushroom (6pca), onion rings (6pcs))"
    const menuItem2 = document.createElement('p')
    menuItem2.textContent = "DOUBLE CRUNCH BONE-IN WINGS - Twice battered and fried, these crisp outside, tender inside wings are tossed in your choice of sauce. Served with Bleu cheese or house-made ranch dressing with real buttermilk."
    const menuItem3 = document.createElement('p')
    menuItem3.textContent = "BREW PUB PRETZELS & BEER CHEESE DIP - The perfect balance of crunchy and chewy, warm pretzel sticks are ready to dip in BLUE MOON® white Cheddar beer cheese and honey Dijon mustard."
    const menuItem4 = document.createElement('p')
    menuItem4.textContent = "Steaks provided by SNAKE RIVER - Includes mash potatoes and seasonal veggies with a choice of house glaze or Szechuan pepper corn crust"
    const menuItem5 = document.createElement('p')
    menuItem5.textContent = "Korean BBQ Short Ribs - 1lb beef ribs in house marinade served with sautéed veggies, mushrooms, and 2 styles of kimchi (cucumber and cabbage) "
    const menuItem6 = document.createElement('p')
    menuItem6.textContent = "Orange Chicken - Battered and tossed in a house made orange sauce"
    const menuItem7 = document.createElement('p')
    menuItem7.textContent = "Pan Seared Sesame Crusted Wild Yellowfin Tuna (Ahi)."
    const menuItem8 = document.createElement('p')
    menuItem8.textContent = "FLAT IRON STEAK SHISH KABOB - Charbroiled, All Natural, Antibiotic-and-Hormone Free Flat Iron Steak from"
    const menuItem9 = document.createElement('p')
    menuItem9.textContent = "CHARBROILED CHICKEN SHISH KABOB (A MUST) - Charbroiled Wayne Farms Fresh Tenders with No Antibiotics. Skewered with Grilled Vegetables."
    const menuItem10 = document.createElement('p')
    menuItem10.textContent = "COMBO KABOB - Charbroiled ABF (Antibiotic & Hormone Free) Chicken Tenders Skewered With Grilled Vegetables and a Half Pound (1 Skewer) of Charbroiled, All-Natural, ABF (Antibiotic & Hormone Free) Seasoned Ground Beef."
    const menuItem11 = document.createElement('p')
    menuItem11.textContent = "COMBO KA-BOX - Charbroiled ABF (Antibiotic & Hormone Free) Chicken Tenders in a Skewer With Grilled Vegetables and 1/2 Pound (1 Skewer) of Charbroiled, All-Natural, ABF (Antibiotic & Hormone Free) Seasoned Ground Beef. Served with Your Choice of Rice and Spread."
    const menuItem12 = document.createElement('p')
    menuItem12.textContent = "water"
    
    //main element classes
    main.classList.add('main')
    menuTextContainer.classList.add('menu-text-container')
    menuHeading.classList.add('menu-heading')
    appitizerHeader.classList.add('appitizer-heading')
    entreeHeading.classList.add('entree-heading')
    drinksHeading.classList.add('drinks-heading')
    menuItemContainer1.classList.add('menu-item-container')
    menuItemContainer2.classList.add('menu-item-container')
    menuItemContainer3.classList.add('menu-item-container')
    menuItemContainer4.classList.add('menu-item-container')
    menuItemContainer5.classList.add('menu-item-container')
    menuItemContainer6.classList.add('menu-item-container')
    menuItemContainer7.classList.add('menu-item-container')
    menuItemContainer8.classList.add('menu-item-container')
    menuItemContainer9.classList.add('menu-item-container')
    menuItemContainer10.classList.add('menu-item-container')
    menuItemContainer11.classList.add('menu-item-container')
    menuItemContainer12.classList.add('menu-item-container')
    menuItem1.classList.add('menu-item')
    menuItem2.classList.add('menu-item')
    menuItem3.classList.add('menu-item')
    menuItem4.classList.add('menu-item')
    menuItem5.classList.add('menu-item')
    menuItem6.classList.add('menu-item')
    menuItem7.classList.add('menu-item')
    menuItem8.classList.add('menu-item')
    menuItem9.classList.add('menu-item')
    menuItem10.classList.add('menu-item')
    menuItem11.classList.add('menu-item')
    menuItem12.classList.add('menu-item')
    
    
    //append main elements
    menuTextContainer.appendChild(menuHeading)
    menuItemContainer1.appendChild(menuItem1)
    menuItemContainer2.appendChild(menuItem2)
    menuItemContainer3.appendChild(menuItem3)
    menuItemContainer4.appendChild(menuItem4)
    menuItemContainer5.appendChild(menuItem5)
    menuItemContainer6.appendChild(menuItem6)
    menuItemContainer7.appendChild(menuItem7)
    menuItemContainer8.appendChild(menuItem8)
    menuItemContainer9.appendChild(menuItem9)
    menuItemContainer10.appendChild(menuItem10)
    menuItemContainer11.appendChild(menuItem11)
    menuItemContainer12.appendChild(menuItem12)

    menuTextContainer.appendChild(appitizerHeader)
    menuTextContainer.appendChild(menuItemContainer1)
    menuTextContainer.appendChild(menuItemContainer2)
    menuTextContainer.appendChild(menuItemContainer3)
    menuTextContainer.appendChild(entreeHeading)
    menuTextContainer.appendChild(menuItemContainer4)
    menuTextContainer.appendChild(menuItemContainer5)
    menuTextContainer.appendChild(menuItemContainer6)
    menuTextContainer.appendChild(menuItemContainer7)
    menuTextContainer.appendChild(menuItemContainer8)
    menuTextContainer.appendChild(menuItemContainer9)
    menuTextContainer.appendChild(menuItemContainer10)
    menuTextContainer.appendChild(menuItemContainer11)
    menuTextContainer.appendChild(drinksHeading)
    menuTextContainer.appendChild(menuItemContainer12)

    main.appendChild(menuTextContainer)


    //append content elements
    content.appendChild(header)
    content.appendChild(main)
}