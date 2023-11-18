document.getElementById('serviceRequestForm').onsubmit = function(event) {
    // Prevent form from submitting normally
    event.preventDefault();
  
    // Create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Handle the request's state changes
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Close the modal
        document.getElementById('serviceRequestModalClose').click();
  
        // Show the alert on successful response
        document.getElementById('submitAlert').style.display = 'block';
      }
    };
  
    // Send the form data
    var formData = new FormData(document.getElementById('serviceRequestForm'));
    xhr.send(new URLSearchParams(formData).toString());
  };
  