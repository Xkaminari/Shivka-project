// Baground effect S1

var BgCercles = document.getElementById("BgCercles");

document.onmousemove = function() {
    var x = event.pageX / 50;
    var y = event.pageY / 50;

    // console.log("positionX" + x + " positionY" + y)

    BgCercles.style.transform = "translate(-" + x + "px,-" + y + "px)";
}


// Select Menu S2

const Details = {
    button: document.getElementById("MyDetails"),
    Info: document.getElementById("my-details-sec")
}

const Awards = {
    button: document.getElementById("MyAwards"),
    Info: document.getElementById("my-awards-sec")
}

const Skills = {
    button: document.getElementById("MySkills"),
    Info: document.getElementById("my-skills-sec")
}


function NewMenuInfo(MenuButton) {
    MenuButton.button.style.background = "linear-gradient(90deg, rgba(194,120,251,1) 0%, rgba(249,115,255,1) 100%)";
    MenuButton.button.style.color = "#FFFFFF";
}

function OldMenuInfo(MenuButton1, MenuButton2) {
    let MenuButtonS = [MenuButton1, MenuButton2]
    for (let i = 0; i < MenuButtonS.length; i++) {
        MenuButtonS[i].button.style.background = "none";
        MenuButtonS[i].button.style.color = "#3E4347";
    }
}

function DisplayNewInfo(Section) {
    Section.Info.style.display = "block";
}

function HideDisplayInfo(Section1, Section2) {
    Section1.Info.style.display = "none";
    Section2.Info.style.display = "none";
}

Details.button.onclick = function() {
    NewMenuInfo(Details);
    OldMenuInfo(Awards, Skills);
    DisplayNewInfo(Details)
    HideDisplayInfo(Awards, Skills)
}

Awards.button.onclick = function() {
    NewMenuInfo(Awards);
    OldMenuInfo(Details, Skills);
    DisplayNewInfo(Awards)
    HideDisplayInfo(Details, Skills)
}
Skills.button.onclick = function() {
    NewMenuInfo(Skills);
    OldMenuInfo(Awards, Details);
    DisplayNewInfo(Skills)
    HideDisplayInfo(Awards, Details)
}