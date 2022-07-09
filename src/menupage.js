const menupage = () => {
    //  vars
    let menuBody = document.createElement('div');
    let menuTitle = document.createElement('div');
    let menuItemsWrapper = document.createElement('div');
    let menuItem1 = document.createElement('div');
    let menuItem2 = document.createElement('div');
    let menuItem3 = document.createElement('div');
    let menuItem4 = document.createElement('div');
    //  text 
    menuTitle.textContent = 'Our menu';
    menuItem1.textContent = 'Chicken Alfredo • 12';
    menuItem2.textContent = 'Margarita Pizza • 15';
    menuItem3.textContent = 'Four Cheese Pizza • 16';
    menuItem4.textContent = 'Mussels in white wine sauce • 15';
    //  classes
    menuBody.classList.add('menuBody');
    menuTitle.classList.add('menuTitle');
    menuItemsWrapper.classList.add('menuItemsWrapper');
    //  append
    menuItemsWrapper.append(menuItem1);
    menuItemsWrapper.append(menuItem2);
    menuItemsWrapper.append(menuItem3);
    menuItemsWrapper.append(menuItem4);
    menuBody.append(menuTitle);
    menuBody.append(menuItemsWrapper);
    document.querySelector('#content').append(menuBody);
}

export default menupage;