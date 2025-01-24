document.addEventListener("DOMContentLoaded", function () {
    // Add skill
    document.getElementById("add-skill").addEventListener("click", function () {
        let skillsList = document.getElementById("skills-list");
        let skillInput = document.createElement("input");
        skillInput.type = "text";
        skillInput.className = "skill";
        skillInput.name = "skills[]";
        skillInput.placeholder = "Enter skill";
        skillsList.appendChild(skillInput);
    });

    // Add experience
    document.getElementById("add-experience").addEventListener("click", function () {
        let experienceList = document.getElementById("experience-list");
        let experienceInput = document.createElement("input");
        experienceInput.type = "text";
        experienceInput.className = "experience";
        experienceInput.name = "experience[]";
        experienceInput.placeholder = "Enter experience";
        experienceList.appendChild(experienceInput);
    });

    // Add education
    document.getElementById("add-education").addEventListener("click", function () {
        let educationList = document.getElementById("education-list");
        let educationInput = document.createElement("input");
        educationInput.type = "text";
        educationInput.className = "education";
        educationInput.name = "education[]";
        educationInput.placeholder = "Enter education";
        educationList.appendChild(educationInput);
    });

    // Add achievement
    document.getElementById("add-achievement").addEventListener("click", function () {
        let achievementsList = document.getElementById("achievements-list");
        let achievementInput = document.createElement("input");
        achievementInput.type = "text";
        achievementInput.className = "achievement";
        achievementInput.name = "achievements[]";
        achievementInput.placeholder = "Enter achievement";
        achievementsList.appendChild(achievementInput);
    });

    // Generate live preview
    document.getElementById("resumeForm").addEventListener("input", function () {
        const formData = new FormData(this);
        let previewContent = `<h3>${formData.get('name')}</h3>`;
        previewContent += `<p>${formData.get('summary')}</p><h4>Skills:</h4><ul>`;
        formData.getAll('skills[]').forEach(skill => {
            previewContent += `<li>${skill}</li>`;
        });
        previewContent += `</ul><h4>Experience:</h4><ul>`;
        formData.getAll('experience[]').forEach(exp => {
            previewContent += `<li>${exp}</li>`;
        });
        previewContent += `</ul><h4>Education:</h4><ul>`;
        formData.getAll('education[]').forEach(edu => {
            previewContent += `<li>${edu}</li>`;
        });
        previewContent += `</ul><h4>Key Achievements:</h4><ul>`;
        formData.getAll('achievements[]').forEach(ach => {
            previewContent += `<li>${ach}</li>`;
        });
        previewContent += `</ul>`;

        document.getElementById("resume-preview").innerHTML = previewContent;
    });
});
