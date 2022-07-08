import './style.css';
import pageload from './pageload';
import homepage from './homepage';

let curPage = 'home';
let content = document.querySelector('#content');

function removeBody() {
    while (document.querySelector('.mainBody').firstChild) {
        document.querySelector('.mainBody').firstChild.remove();
    }
    document.querySelector('footer').remove();
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
pageload();
document.querySelector('.headerHome').addEventListener('click', () => {initBody();}, false);      //  has to be in function
document.querySelector('.headerMenu').addEventListener('click', () => {removeBody();}, false);




console.log('hi');