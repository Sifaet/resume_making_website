document.getElementById("generate-pdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const formData = new FormData(document.getElementById("resumeForm"));
    let content = `Name: ${formData.get('name')}\nSummary: ${formData.get('summary')}\n\nSkills:\n`;
    formData.getAll('skills[]').forEach(skill => {
        content += `${skill}\n`;
    });
    content += `\nExperience:\n`;
    formData.getAll('experience[]').forEach(exp => {
        content += `${exp}\n`;
    });
    content += `\nEducation:\n`;
    formData.getAll('education[]').forEach(edu => {
        content += `${edu}\n`;
    });
    content += `\nKey Achievements:\n`;
    formData.getAll('achievements[]').forEach(ach => {
        content += `${ach}\n`;
    });

    doc.text(content, 10, 10);
    doc.save("resume.pdf");
});
