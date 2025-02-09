let links = [];
let educations = [];
let experiences = [];
let projects = [];
let skills = [];
let cvHtml = "";
let name = "";
let email = "";


function addLinksField() {
    links = [];
    if (document.getElementById("phone_input").value != "") {
        let phone = document.getElementById("phone_input").value;
        links.push({ phone: phone });
    }
    if (document.getElementById("linkedin_input").value != "") {
        let linkedin = document.getElementById("linkedin_input").value;
        links.push({ linkedin: "https://" + linkedin });
    }
    if (document.getElementById("github_input").value != "") {
        let github = document.getElementById("github_input").value;
        links.push({ github: "https://" + github });
    }
    if (document.getElementById("portfolio_input").value != "") {
        let portfolio = document.getElementById("portfolio_input").value;
        links.push({ portfolio: "https://" + portfolio });
    }
    if (document.getElementById("twitter_input").value != "") {
        let twitter = document.getElementById("twitter_input").value;
        links.push({ twitter: "https://" + twitter });
    }
    if (document.getElementById("facebook_input").value != "") {
        let facebook = document.getElementById("facebook_input").value;
        links.push({ facebook: "https://" + facebook });
    }
    if (document.getElementById("instagram_input").value != "") {
        let instagram = document.getElementById("instagram_input").value;
        links.push({ instagram: "https://" + instagram });
    }
    alert("Links Saved Successfully");
}


function addEducationField() {
    if (document.getElementById("education_degree_input").value == "") {
        document.getElementById("education_error_message").innerHTML = "Please enter a degree";
        document.getElementById("education_error_message").style.display = "block";
    } else if (document.getElementById("education_institution_input").value == "") {
        document.getElementById("education_error_message").innerHTML = "Please enter an institution";
        document.getElementById("education_error_message").style.display = "block";
    } else if (document.getElementById("education_year_input").value == "") {
        document.getElementById("education_error_message").innerHTML = "Please enter Year";
        document.getElementById("education_error_message").style.display = "block";
    } else {
        let degree = document.getElementById("education_degree_input").value;
        let institution = document.getElementById("education_institution_input").value;
        let degree_year = document.getElementById("education_year_input").value;

        const education = {
            degree: degree,
            institution: institution,
            degree_year: degree_year
        }
        educations.push(education);
        document.getElementById("education_display_list").innerHTML += `<li>${degree} from ${institution} in ${degree_year}</li>`;
    }
}

function addExperienceField() {
    if (document.getElementById("experience_role_input").value == "") {
        document.getElementById("experience_error_message").innerHTML = "Please Enter a Role";
        document.getElementById("experience_error_message").style.display = "block";
    } else if (document.getElementById("experience_company_input").value == "") {
        document.getElementById("experience_error_message").innerHTML = "Please Enter an Institution";
        document.getElementById("experience_error_message").style.display = "block";
    } else {
        document.getElementById("experience_error_message").style.display = "none";
        let role = document.getElementById("experience_role_input").value;
        let company = document.getElementById("experience_company_input").value;
        let duration = document.getElementById("experience_duration_input").value;
        let duration_type = document.getElementById("experience_duration_type_input").value;

        const experience = {
            role: role,
            company: company,
            duration: duration,
            duration_type: duration_type
        }
        experiences.push(experience);
        document.getElementById("experience_display_list").innerHTML += `<li>${role} at ${company} for ${duration} ${duration_type}</li>`;
    }
}

function addProjectField() {
    if (document.getElementById("project_name_input").value == "") {
        document.getElementById("project_error_message").innerHTML = "Please enter Project Name";
        document.getElementById("project_error_message").style.display = "block";
    } else {
        document.getElementById("project_error_message").style.display = "none";
        let proName = document.getElementById("project_name_input").value;
        let description = document.getElementById("project_description_input").value || "";
        let link = document.getElementById("project_link_input").value || "";

        const project = {
            proName: proName,
            description: description,
            link: link
        }
        projects.push(project);
        document.getElementById("projects_display_list").innerHTML += `<li>${proName} - ${description} - <a href="${project.link}" class="proj_a">Site</a></li>`;
    }
}

function addSkillField() {
    if (document.getElementById("skill_input").value == "") {
        document.getElementById("skill_error_message").innerHTML = "Please enter a Skill";
        document.getElementById("skill_error_message").style.display = "block";
    } else {
        document.getElementById("skill_error_message").style.display = "none";
        let skill = document.getElementById("skill_input").value;
        skills.push(skill);
        document.getElementById("skills_display_list").innerHTML += `<li>${skill}</li>`;
    }
}


function generateCV() {
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;

    // document.getElementsByClassName("to_close_later").style.display = "none";

    let linksHtml = "";
    linksHtml += `<table class="links_html">`;
    let count = 0;
    links.forEach((link) => {
        if (count % 2 === 0) {
            linksHtml += `<tr>`;
        }
        if (link.phone) {
            linksHtml += `<td><a href=tel:${link.phone}><p class="links_para"><span class="fa fa-phone" class="links_item"></span> ${link.phone}</p></a></td>`;
        } else if (link.linkedin) {
            linksHtml += `<td><a href=${link.linkedin}><p class="links_para"><span class="fa fa-linkedin" class="links_item"></span> ${link.linkedin}</p></a></td>`;
        } else if (link.github) {
            linksHtml += `<td><a href=${link.github}><p class="links_para"><span class="fa fa-github" class="links_item"></span> ${link.github}</p></a></td>`;
        } else if (link.portfolio) {
            linksHtml += `<td><a href=${link.portfolio}><p class="links_para"><span class="fa fa-globe" class="links_item"></span> ${link.portfolio}</p></a></td>`;
        } else if (link.twitter) {
            linksHtml += `<td><a href=${link.twitter}><p class="links_para"><span class="fa fa-twitter" class="links_item"></span> ${link.twitter}</p></a></td>`;
        } else if (link.facebook) {
            linksHtml += `<td><a href=${link.facebook}><p class="links_para"><span class="fa fa-facebook" class="links_item"></span> ${link.facebook}</p></a></td>`;
        } else if (link.instagram) {
            linksHtml += `<td><a href=${link.instagram}><p class="links_para"><span class="fa fa-instagram" class="links_item"></span> ${link.instagram}</p></a></td>`;
        }
        count++;
        if (count % 2 === 0) {
            linksHtml += `</tr>`;
        }
    });
    if (count % 2 !== 0) {
        linksHtml += `<td></td></tr>`;
    }
    linksHtml += `</table>`;

    let education = "";
    console.log(educations.length);
    educations.forEach((edu) => {
        education += `<li><span class="to_highligh">${edu.degree}</span> from <span class="to_highligh">${edu.institution}</span> in <span class="to_highligh">${edu.degree_year}</span></li>`;
    });

    let skill = "";
    skills.forEach((sk) => {
        skill += `<li>${(sk)}</li>`;
    });

    let experience = "";
    experiences.forEach((exp) => {
        experience += `<li><span class="to_highligh">${exp.role}</span> at <span class="to_highligh">${exp.company}</span> for <span class="to_highligh">${exp.duration}</span> ${exp.duration_type}</li>`;
    });

    let project = "";
    projects.forEach((pro) => {
        project += `<li>${pro.proName} - ${pro.description} - <span class="to_highligh"><a href="${pro.link}" class="proj_a">Site</a></li>`;
    });

    cvHtml += `<div class="pdf_cv"><h1>${name}</h1><a href=mailto:${email}><p class="links_para">${email}</p></a>`;

    if (linksHtml != "") {
        cvHtml += `<hr>${linksHtml}`;
    }

    if (education != "") {
        cvHtml += `<hr><h2>Education</h2>${education}`;
    }

    if (skill != "") {
        cvHtml += `<hr><h2>Skills</h2>${skill}`;
    }   

    if (experience != "") {
        cvHtml += `<hr><h2>Experience</h2>${experience}`;
    }

    if (project != "") {
        cvHtml += `<hr><h2>Projects</h2>${project}</div>`;
    }

    document.getElementById('cv-preview').innerHTML = cvHtml;
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-output').style.display = 'block';
}

function downloadPDF() {
    document.getElementById('cv-preview').style.display = 'none';
    // const element = document.getElementById('cv-preview');
    const options = {
        filename: document.getElementById('name_input').value + '_CV_by_Maaz.pdf',
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        html2canvas: { scale: 2 }
    };
    html2pdf().set(options).from(cvHtml).save();

    setTimeout(() => {
        location.reload();
    }, 5000);
}