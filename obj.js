const form = document.getElementById("my-form");
const nameIn = form["name"];
const emailIn = form["email"];
const numberIn = form["number"];
const main = document.querySelector(".item");

const submission = [];

const addSubmission = (name, email, number) => {
  submission.push({
    name,
    email,
    number,
  });
  return { name, email, number };
};

form.onsubmit = (e) => {
  e.preventDefault();

  // Retrieve existing submissions from localStorage
  let existingSubmissions = JSON.parse(localStorage.getItem("myObj")) || [];

  // Add the new submission to the array
  const newSub = addSubmission(nameIn.value, emailIn.value, numberIn.value);
  existingSubmissions.push(newSub);

  // Save the updated array back to localStorage
  localStorage.setItem("myObj", JSON.stringify(existingSubmissions));

  // Optionally, you can clear the form fields after submission
  form.reset();
};
let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("myObj")) || [];

  var final = "";

  userData.forEach((element, i) => {
    final += `<div class="items">${element.name} ${element.number} ${element.email}</div>`;
  });

  // Assuming there's a container with the id "displayContainer" where you want to append the final HTML
  document.getElementsByClassName("item").innerText = final;
};

// Call the function to display data
displayData();
