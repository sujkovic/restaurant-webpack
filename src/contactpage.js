const contactpage = () => {
    //  vars
    let contactBody = document.createElement('div');
    let mainContactBody = document.createElement('div');
    let contactTitle = document.createElement('div');
    let contactEmail = document.createElement('div');
    let contactPhone = document.createElement('div');
    let contactAddress = document.createElement('div');
    //  text
    contactTitle.textContent = 'Contact Us!'
    contactEmail.textContent = 'Email: delicious@pizza.com';
    contactPhone.textContent = 'Phone: 123-467-7890';
    contactAddress.textContent = 'We are located at 123 Pizza Street, Brooklyn NY';
    //  classes
    contactBody.classList.add('contactBody');
    mainContactBody.classList.add('mainContactBody');
    contactTitle.classList.add('contactTitle');
    //  append
    mainContactBody.append(contactTitle);
    mainContactBody.append(contactEmail);
    mainContactBody.append(contactPhone);
    mainContactBody.append(contactAddress);
    contactBody.append(mainContactBody);
    document.querySelector('#content').append(contactBody);
}

export default contactpage;