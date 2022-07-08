import homepage from './homepage';
import menupage from './menupage';
import contactpage from './contactpage';

const pageload = () => {
    initHeader();
    initBody();
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
            //  append 
        headerBody.append(headerHome);
        headerBody.append(headerMenu);
        headerBody.append(headerContact);
        header.append(headerLogo);
        header.append(headerBody);
        header.append(headerRight);
        content.append(header);
}

function initBody() {
    let mainBody = document.createElement('div');
    let mainBodyMainText = document.createElement('div');
    let mainBodySubText = document.createElement('div');
    mainBody.classList.add('mainBody');
    mainBodyMainText.classList.add('mainBodyMainText');
    mainBodySubText.classList.add('mainBodySubText');
    mainBodyMainText.textContent = 'Brooklyn\'s finest brick oven pizza';
    mainBodySubText.textContent = 'Click here to view our menu';
    mainBody.append(mainBodyMainText);
    mainBody.append(mainBodySubText);
    content.append(mainBody);
    //  footer
    let footer = document.createElement('footer');
    let footerText = document.createElement('a');
    footerText.textContent = '© Adrian Sujkovic';
    footerText.addEventListener('click', () => window.open('https://github.com/sujkovic'), false);
    footer.append(footerText);
    content.append(footer);
}




export default pageload;