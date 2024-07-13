document.addEventListener('DOMContentLoaded', function() {
    loadExternalContent();
});

function loadExternalContent() {
    fetch('first.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('external-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading external content:', error));
}

function nextSection(current) {
    let inputValid = true;

    if (current === 1) {
        const externalContent = document.getElementById('external-content').innerText.trim();
        if (externalContent === '') {
            inputValid = false;
        }
    } else {
        const input = document.getElementById(`input${current}`);
        if (input.value.trim() === '') {
            inputValid = false;
        }
    }

    if (!inputValid) {
        alert('Please complete this section before moving to the next.');
        return;
    }

    document.getElementById(`section${current}`).classList.remove('active');
    document.getElementById(`step${current}`).classList.remove('active');
    const next = current + 1;
    document.getElementById(`section${next}`).classList.add('active');
    document.getElementById(`step${next}`).classList.add('active');
}

function submitForm() {
    alert('Form submitted!');
}
