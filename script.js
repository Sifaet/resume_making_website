function addWorkHistory() {
    const workHistoryList = document.getElementById('work-history-list');
    const newWorkHistoryItem = document.createElement('li');
    newWorkHistoryItem.classList.add('work-history-item');
    newWorkHistoryItem.innerHTML = `<span contenteditable="true" class="editable">New Work History</span>`;
    workHistoryList.appendChild(newWorkHistoryItem);
}

function addLanguage() {
    const languagesList = document.getElementById('languages-list');
    const newLanguageItem = document.createElement('li');
    newLanguageItem.classList.add('language-item');
    newLanguageItem.innerHTML = `<span contenteditable="true" class="editable">New Language</span>`;
    languagesList.appendChild(newLanguageItem);
}

function addSkill() {
    const skillsList = document.getElementById('skills-list');
    const newSkillItem = document.createElement('li');
    newSkillItem.classList.add('skill-item');
    newSkillItem.innerHTML = `<span contenteditable="true" class="editable">New Skill</span>`;
    skillsList.appendChild(newSkillItem);
}
function addEducation() {
    const educationList = document.getElementById('education-list');
    const newEducationItem = document.createElement('li');
    newEducationItem.innerHTML = `
        <strong contenteditable="true" class="editable">New Degree</strong>
        <ul class="education-details">
            <li><span contenteditable="true" class="editable">New Institution</span></li>
            <li><span contenteditable="true" class="editable">Location</span></li>
            <li><span contenteditable="true" class="editable">Graduation Year</span></li>
        </ul>`;
    educationList.appendChild(newEducationItem);
}
function printResume() {
    const printContent = document.querySelector('.container').outerHTML; // Get the HTML content of the container
    const originalContent = document.body.innerHTML; // Save the original content

    document.body.innerHTML = printContent; // Replace the body content with the resume content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContent; // Restore the original content after printing
}
function updateProfilePic(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    const fileLabel = document.getElementById("file-label");

    reader.onload = function (e) {
        const img = document.getElementById("profile-img");
        img.src = e.target.result; // Update the src with the selected image
    };

    if (file) {
        reader.readAsDataURL(file); // Read the file as data URL
        fileLabel.textContent = file.name; // Update the label to show the file name
    }
}

