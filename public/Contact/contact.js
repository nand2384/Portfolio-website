const expression = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
const expNameWSpace = "[a-zA-Z][a-zA-Z ]+[a-zA-Z]$";
const expName = "^[a-zA-Z]*$";

function getWidth() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if(width > 1371) {
        scrollTo(0, 0);
    }
}

function navDropBtn(x) {
    x.classList.toggle("change");
}


function navDropMob() {
    let dropDown = document.querySelector(".nav-items-cont-mob");
    let dropBtn = document.querySelector(".nav-drop-mob");
    
    if(dropDown.style.display === "none") {
        window.scrollTo(0, findPosition(dropDown));
        dropDown.style.display = "flex";
        body.style.overflowY = "hidden";
    } else {
        dropDown.style.display = "none";
        body.style.overflowY = "auto";
    }
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
}


function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    var messageErr = document.getElementById("messageErr");

    nameErr.style.display = "none";
    emailErr.style.display = "none";
    messageErr.style.display = "none";

    if (name.trim() === "") {
        nameErr.style.display = "inline";
        return;
    } else if (!name.match(expNameWSpace)) {
        nameErr.style.display = "inline";
        return;
    }

    if (email.trim() === "") {
        emailErr.style.display = "inline";
        return;
    } else if (!email.match(expression)) {
        emailErr.style.display = "inline";
        return;
    }

    if (message.trim() === "") {
        messageErr.style.display = "inline";
        return;
    }

    fetch("https://nandworks.me/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
}