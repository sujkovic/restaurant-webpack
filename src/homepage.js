const homepage = () => {
    let homeBody = document.createElement('div');
    let homeBodyMainText = document.createElement('div');
    let homeBodySubText = document.createElement('div');
    homeBody.classList.add('homeBody');
    homeBodyMainText.classList.add('homeBodyMainText');
    homeBodySubText.classList.add('homeBodySubText');
    homeBodyMainText.textContent = 'Brooklyn\'s Finest Brick Oven Pizza';
    homeBodySubText.textContent = 'Established in 2006';
    homeBody.append(homeBodyMainText);
    homeBody.append(homeBodySubText);
    document.querySelector('#content').append(homeBody);
}

export default homepage;