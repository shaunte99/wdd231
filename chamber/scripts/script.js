// Fetch and display data
async function fetchMembers() {
    const response = await fetch('members.json');
    const members = await response.json();
    displayMembers(members);
  }
  
  function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = ''; // Clear the container first
  
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
  
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h4>${member.name}</h4>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p>Membership Level: ${member.membership_level}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Trigger fetching data when the page loads
  window.onload = fetchMembers;
  
  // Toggle grid/list view
  document.getElementById('toggle-view').addEventListener('click', () => {
    const container = document.getElementById('member-container');
    container.classList.toggle('grid-view');
    container.classList.toggle('list-view');
  });
  