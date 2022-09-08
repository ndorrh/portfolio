const setInput = () => {
  const retrive = localStorage.getItem('formDetails');
  const retrivedDetails = JSON.parse(retrive);
  document.getElementById('name').value = retrivedDetails.fullName;
  document.getElementById('email').value = retrivedDetails.email;
  document.getElementById('message').value = retrivedDetails.message;
};

const populateStorage = () => {
  const formData = {
    fullName: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  localStorage.setItem('formDetails', JSON.stringify(formData));
  setInput();
};