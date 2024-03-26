document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');
  
    customerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const contact = document.getElementById('contact').value;
      const membership = document.getElementById('membership').value;
  
      if (name && contact && membership) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>Name:</strong> ${name}, 
          <strong>Contact:</strong> ${contact}, 
          <strong>Membership Type:</strong> ${membership}
          <button class="delete-btn">Delete</button>
        `;
        customerList.appendChild(listItem);
  
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('membership').value = 'basic';
  
        // Add event listener to delete button
        const deleteButton = listItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
      } else {
        alert('Please fill in all fields');
      }
    });
  });