import homepage from './homepage';
import menupage from './menupage';
import contactpage from './contactpage';
import footer from './footer';
import PizzaLogo from './pizzaLogo.png';

let curPage = 'home';

const pageload = () => {
    initHeader();
    homepage();
    footer();
    console.log(curPage);
}

function initHeader() {
        //  header
        //  init vars
        let header = document.createElement('header');
        let headerLogo = document.createElement('div');
        let headerBody = document.createElement('div');
        let headerHome = document.createElement('span');
        let headerMenu = document.createElement('span');
        let headerContact = document.createElement('span');
        let headerRight = document.createElement('div');
        let pizzaLogo = new Image();
        pizzaLogo.src = PizzaLogo;
            //  add text
        headerBody.classList.add('headerBody');
        headerLogo.textContent = 'logo';
        headerHome.textContent = 'Home';
        headerMenu.textContent = 'Menu';
        headerContact.textContent = 'Contact';
            //  add class
        headerHome.classList.add('headerHome');
        headerMenu.classList.add('headerMenu');
        headerContact.classList.add('headerContact');
        pizzaLogo.classList.add('pizzaLogo');
            //  append 
        headerHome.addEventListener('click', () => {
            if (curPage !== 'home') {
                removeBody();
                homepage();
                footer();
                curPage = 'home';
            }
        }, false);
        pizzaLogo.addEventListener('click', () => {
            if (curPage !== 'home') {
                removeBody();
                homepage();
                footer();
                curPage = 'home';
            }
        }, false);
        headerMenu.addEventListener('click', () => {
            if (curPage !== 'menu') {
                removeBody();
                menupage();
                footer();
                curPage = 'menu';
            }
        }, false);
        headerContact.addEventListener('click', () => {
            if (curPage !== 'contact') {
                removeBody();
                contactpage();
                footer();
                curPage = 'contact';
            }
        }, false);
        headerBody.append(headerHome);
        headerBody.append(headerMenu);
        headerBody.append(headerContact);
        //header.append(headerLogo);
        header.append(pizzaLogo);
        header.append(headerBody);
        header.append(headerRight);
        content.append(header);
}

function removeBody() {
    if (curPage === 'home') {document.querySelector('.homeBody').remove();}
    if (curPage === 'menu') {document.querySelector('.menuBody').remove();}
    if (curPage === 'contact') {document.querySelector('.contactBody').remove();}
    document.querySelector('footer').remove();
}


export default pageload;