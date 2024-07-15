document.addEventListener('DOMContentLoaded', function() {
    loadExternalContent('first.html', 'external-content');
});

function loadExternalContent(file, targetElementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

function validateSection1() {
    const requiredFields = document.querySelectorAll('#external-content input[required]');
    for (const field of requiredFields) {
        if (field.value.trim() === '') {
            return false;
        }
    }
    return true;
}

function nextSection(current) {
    let inputValid = true;

    if (current === 1) {
        if (!validateSection1()) {
            inputValid = false;
        }
    } else {
        const input = document.getElementById(`input${current}`);
        if (input.value.trim() === '') {
            inputValid = false;
        }
    }

    if (!inputValid) {
        alert('Please complete all required fields before moving to the next section.');
        return;
    }

    document.getElementById(`section${current}`).classList.remove('active');
    document.getElementById(`step${current}`).classList.remove('active');
    const next = current + 1;
    document.getElementById(`section${next}`).classList.add('active');
    document.getElementById(`step${next}`).classList.add('active');

    // Load external content for the next section
    if (next === 2) {
        loadExternalContent('second.html', 'input2');
    } else if (next === 3) {
        loadExternalContent('third.html', 'input3');
    } else if (next === 4) {
        loadExternalContent('fourth.html', 'input4');
    }
}

function previousSection(current) {
    document.getElementById(`section${current}`).classList.remove('active');
    document.getElementById(`step${current}`).classList.remove('active');
    const prev = current - 1;
    document.getElementById(`section${prev}`).classList.add('active');
    document.getElementById(`step${prev}`).classList.add('active');
}

function submitForm() {
    alert('Form submitted!');
}

function showImageModal() {
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("sampleImage");
    img.src = "sample.png";
    modal.style.display = "block";
}
  
function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
  
// Close the modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
