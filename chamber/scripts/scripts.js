document.addEventListener('DOMContentLoaded', () => {
  const membersContainer = document.getElementById('members-container');
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');
  
  // Load members from JSON
  async function fetchMembers() {
      const response = await fetch('data/members.json');
      const members = await response.json();
      displayMembers(members);
  }

  function displayMembers(members) {
      membersContainer.innerHTML = ''; // Clear existing content

      members.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
              <img src="images/${member.image}" alt="${member.name}">
              <h3>${member.name}</h3>
              <p>Address: ${member.address}</p>
              <p>Phone: ${member.phone}</p>
              <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
              <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
          `;
          membersContainer.appendChild(card);
      });
  }

  function getMembershipLevel(level) {
      switch (level) {
          case 1: return 'Member';
          case 2: return 'Silver';
          case 3: return 'Gold';
          default: return 'Unknown';
      }
  }

  // Toggle view
  gridViewButton.addEventListener('click', () => {
      membersContainer.classList.add('grid-view');
      membersContainer.classList.remove('list-view');
  });

  listViewButton.addEventListener('click', () => {
      membersContainer.classList.add('list-view');
      membersContainer.classList.remove('grid-view');
  });

  // Set footer dates
  const currentYear = document.getElementById('current-year');
  const lastModified = document.getElementById('last-modified');
  currentYear.textContent = new Date().getFullYear();
  lastModified.textContent = document.lastModified;

  // Fetch members
  fetchMembers();
});
