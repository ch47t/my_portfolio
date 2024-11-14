// Check if Theres Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Start top Scroll
let span = document.querySelector(".up");
let header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }

  if (window.scrollY >= 1) {
    header.style.background = "#161718";
  } else {
    // Reset the style if needed when scrolling back up
    header.style.background = ""; // Resetting the background to its default state
  }
};


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
span.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*~~~~~~~~~~~~~~~ MENU BUTTON ~~~~~~~~~~~~~~~*/
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-nav");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");

  cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
  };
};
/*~~~~~~~~~~~~~~~ END MENU BUTTON ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const screenWidth = window.innerWidth;

let distanceValue;

if (screenWidth <= 768) {
  // If screen width is less than or equal to 768 pixels (e.g., for mobile devices)
  distanceValue = "10px"; // Adjusted distance value for smaller screens
} // Adjusted distance value for very small screens
else {
  // For larger screens (e.g., desktops, tablets)
  distanceValue = "60px";
}
/*~~~~~~~~~~~~~~~  ENdSCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

//  ~~~~~~~~~~~~~~~ POP UP ~~~~~~~~~~~~~~~
// Function to open the popup
function openPopup(imageSrc) {
  document.getElementById('popupImage').src = imageSrc;
  document.getElementById('overlay').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

//  ~~~~~~~~~~~~~~~ END POP UP ~~~~~~~~~~~~~~~

//  ~~~~~~~~~~~~~~~ START CONTACT ~~~~~~~~~~~~~~~

function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission

  let parms = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  let messageError = document.getElementsByClassName('messageError');

  // Validation functions for clarity
  const setError = (index, message) => {
    messageError[index].innerHTML = message;
    messageError[index].style.color = "red";
    messageError[index].style.fontWeight = "bold";
  };
  
  const clearError = (index) => {
    messageError[index].innerHTML = "";
  };

  // Validation flags
  let valid = true;

  // Validate Name
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (parms.name === "") {
    setError(0, "Name Required*");
    valid = false;
  } else if (!nameRegex.test(parms.name)) {
    setError(0, "Invalid name format*");
    valid = false;
  } else {
    clearError(0);
  }

  // Validate Email
  const emailRegex = /^[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,8}$/i;
  if (parms.email === "") {
    setError(1, "Email Required*");
    valid = false;
  } else if (!emailRegex.test(parms.email)) {
    setError(1, "Invalid email format*");
    valid = false;
  } else {
    clearError(1);
  }

  // Validate Subject
  const subjectRegex = /^[a-zA-Z\d\s.,!?-]+$/;
  if (parms.subject === "") {
    setError(2, "Subject Required*");
    valid = false;
  } else if (!subjectRegex.test(parms.subject)) {
    setError(2, "Invalid subject format*");
    valid = false;
  } else {
    clearError(2);
  }

  // Validate Message
  const messageRegex = /^[a-zA-Z\d\s.,!?-]+$/;
  if (parms.message === "") {
    setError(3, "Message Required*");
    valid = false;
  } else if (!messageRegex.test(parms.message)) {
    setError(3, "Invalid message format*");
    valid = false;
  } else {
    clearError(3);
  }

  // If all fields are valid, send the email
  if (valid) {
    emailjs.send("service_tw9odcu", "template_o7l2o4l", parms)
      .then(function () {
        alert("Email sent successfully!");
        document.getElementById("form").reset();
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  }
}

//  ~~~~~~~~~~~~~~~ END CONTACT ~~~~~~~~~~~~~~~