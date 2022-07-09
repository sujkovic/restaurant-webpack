const footer = () => {
    let footer = document.createElement('footer');
    let footerText = document.createElement('a');
    footerText.textContent = '© Adrian Sujkovic';
    footerText.addEventListener('click', () => window.open('https://github.com/sujkovic'), false);
    footer.append(footerText);
    document.querySelector('#content').append(footer);
}

export default footer;