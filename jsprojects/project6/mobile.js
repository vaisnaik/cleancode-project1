const mobileNumberInput = document.getElementById("mobileNumber");
const validationMessage = document.getElementById("validationMessage");
const validationForm = document.getElementById("validationForm");

validationForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const mobileNumber = mobileNumberInput.value;

 
  const isValid = validateMobileNumber(mobileNumber); 
  if (isValid) {
    validationMessage.textContent = "Valid Mobile Number!";
    validationMessage.style.color = "green";
  } else {
    validationMessage.textContent = "Invalid Mobile Number. Please check the format.";
  }
});


function validateMobileNumber(mobileNumber) {
  
  const regex = /^\d{10}$/; 
  return regex.test(mobileNumber);
}
