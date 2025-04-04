// Load the JSON data and dynamically create cards
fetch('data/locations.json')
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main');
        data.locations.forEach(location => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <h2>${location.name}</h2>
                <figure>
                    <img src="${location.image}" alt="Image of ${location.name}">
                </figure>
                <address>${location.address}</address>
                <p>${location.description}</p>
                <button>Learn More</button>
            `;
            
            main.appendChild(card);
        });
    });

// Function for managing localStorage and visit message
window.onload = function() {
    const visitMessage = document.createElement('div');
    visitMessage.id = 'visit-message';
    document.body.appendChild(visitMessage);
    
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    const lastVisitDate = lastVisit ? new Date(parseInt(lastVisit)) : null;
    
    if (!lastVisitDate) {
        visitMessage.innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
    } else {
        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        
        if (daysDiff < 1) {
            visitMessage.innerHTML = "<p>Back so soon! Awesome!</p>";
        } else {
            visitMessage.innerHTML = `<p>You last visited ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago.</p>`;
        }
    }
    
    visitMessage.style.display = 'block';
    localStorage.setItem('lastVisit', currentDate.getTime().toString());
};
