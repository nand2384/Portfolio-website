function getWidth() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    // console.log(width);
    // console.log(height);
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