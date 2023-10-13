function submitForm() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const bday = document.getElementById('bday').value;
  const genderElements = document.querySelectorAll('input[name="gender"]:checked');
  const add = document.getElementById('add').value;
  const desc = document.getElementById('desc').value;

if(!fname || !lname || !email || !number || !bday || genderElements.length === 0  || !add || !desc){
  alert('Fill all required Details');
  return;
}
  const selectedGenders = Array.from(genderElements).map(el => el.value);
  const popupData = 
      `First Name: ${fname}<br>
      Last Name: ${lname}<br>
      Email: ${email}<br>
      Phone Number: ${number}<br>
      Birth date: ${bday}<br>
      Gender: ${selectedGenders.join(', ')}<br>
      Address: ${add}<br>
      Profession: ${desc}`;

    document.getElementById('popupData').innerHTML = popupData;
    document.getElementById('popup').style.display = 'block';
}
function closeForm() {
    document.getElementById('popup').style.display = 'none';
}
function reset() {
  document.getElementById('formSubmission').reset();
}


