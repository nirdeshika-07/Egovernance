document.addEventListener('DOMContentLoaded', (event) => {
    function showImageModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'block';
        // Set the image source if needed
        document.getElementById('sampleImage').src = 'sample.png';
    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    window.showImageModal = showImageModal;
    window.closeImageModal = closeImageModal;

    window.updateForm = function() {
        const purpose = document.getElementById('purpose').value;
        const citizenshipInfo = document.getElementById('citizenship-info');
        const passportInfo = document.getElementById('passport-info');

        if (purpose === 'citizenship-passport') {
            citizenshipInfo.style.display = 'block';
            passportInfo.style.display = 'block';

            // Set the required attribute for passport fields
            document.getElementById('passport-number').required = true;
            document.getElementById('passport-issue-date').required = true;
            document.getElementById('passport-expiry-date').required = true;
        } else if (purpose === 'citizenship-only') {
            citizenshipInfo.style.display = 'block';
            passportInfo.style.display = 'none';

            // Remove the required attribute for passport fields
            document.getElementById('passport-number').required = false;
            document.getElementById('passport-issue-date').required = false;
            document.getElementById('passport-expiry-date').required = false;
        } else {
            citizenshipInfo.style.display = 'none';
            passportInfo.style.display = 'none';
        }
    }

    window.submitForm = function() {
        const form = document.getElementById('personal-info-form');

        // Validate required fields
        if (!form.checkValidity()) {
            // If form is invalid, trigger HTML5 form validation UI
            form.reportValidity();
            return;
        }

        // If form is valid, proceed with submission Show alert for successful submission
        alert('Form submitted successfully!');

        // Redirect to login.html after OK is clicked
        window.location.href = 'message.html';

        // Optionally, clear the form fields after submission
        form.reset();
    }

    // Initially hide the sections
    updateForm();
});