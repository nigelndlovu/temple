const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
	.then(function (response) {
		return response.json();
  })
  .then(function (jsonObject) {
		console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayDetails);
  });

function displayDetails(temple) {
  // Create elements to add to the document
  let card = document.createElement('section');
	let logoIcon = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let weburl = document.createElement('a');

  // set class attribute to the container
  card.classList.add('cards');
  logoIcon.classList.add('img');

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	logoIcon.setAttribute('src', temple.imageurl);
	logoIcon.setAttribute('alt', `Logo icon for ${temple.name}`);
	logoIcon.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.innerHTML = `${temple.name}`;
  address.innerHTML = temple.address;
  phone.innerHTML = temple.phone;
  weburl.innerHTML = `<a href="${temple.weburl}" target="_blank">Details</a>`;
	weburl.setAttribute('href', temple.weburl);

  // Add/append the section(card) with the h2 element
  card.appendChild(logoIcon);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);

	card.appendChild(weburl);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

const maingrid = document.querySelector('.cards')
const gridbutton = document.querySelector('#gridbtn');
const listbutton = document.querySelector('#listbtn');


gridbutton.addEventListener('click', () => {maingrid.classList.add('cards')}, false);
listbutton.addEventListener('click', () => {maingrid.classList.remove('cards')}, false);