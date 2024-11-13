const editBtn = document.querySelector('#editBtn');
const submitBtn = document.querySelector('#submitBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const containerForm = document.querySelector('.form-sec');
const tableProfile = document.querySelector('.table_profile');

editBtn.addEventListener('click', function() {
    containerForm.classList.toggle('form-block');
});

submitBtn.addEventListener('click', function() {  
    let nameValue = document.querySelector('#name').value;
    let roleValue = document.querySelector('#role').value;
    let availValue = document.querySelector('#availability').value;
    let ageValue = document.querySelector('#age').value;
    let locValue = document.querySelector('#location').value;
    let expValue = document.querySelector('#yearsExperience').value;
    let emailValue = document.querySelector('#email').value;

    const formData = {
        name: nameValue,
        role: roleValue,
        availability: availValue,
        age: ageValue,
        location: locValue,
        experience: expValue,
        email: emailValue
    };

    localStorage.setItem('formValue', JSON.stringify(formData));

    getValue();
});

resumeBtn.addEventListener('click', () => {
    localStorage.removeItem('formValue');
    resetProfileToDefault();
});

function getValue() {
    const forms = JSON.parse(localStorage.getItem('formValue'));

    if (forms) {
        document.querySelector('#name_profile').textContent = forms.name;
        document.querySelector('#role_profile').textContent = forms.role;

        tableProfile.innerHTML = `
            <tr>
                <th>Availability</th>
                <td>${forms.availability}</td>
            </tr>
            <tr>
                <th>Usia</th>
                <td>${forms.age}</td>
            </tr>
            <tr>
                <th>Lokasi</th>
                <td>${forms.location}</td>
            </tr>
            <tr>
                <th>Pengalaman</th>
                <td>${forms.experience}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${forms.email}</td>
            </tr>`;
    } else {
        resetProfileToDefault();
    }
}


function resetProfileToDefault() {
    document.querySelector('#name_profile').textContent = "Karina Ghaisani";
    document.querySelector('#role_profile').textContent = "Front End Developer";

    tableProfile.innerHTML = `
        <tr>
            <th>Availability</th>
            <td>Full time</td>
        </tr>
        <tr id="age_profile">
            <th>Usia</th>
            <td>21</td>
        </tr>
        <tr>
            <th>Lokasi</th>
            <td>Jakarta</td>
        </tr>
        <tr>
            <th>Pengalaman</th>
            <td>2</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>karinaghsn@gmail.com</td>
        </tr>`;
}

getValue();
