document.addEventListener("DOMContentLoaded", () => {

    const anna = {
        name: "Anna Baugart",
        position: "Programistka JS",
        colorImg: "s1.png",
        grayscaleImg: "s1a.png"
    };

    const marek = {
        name: "Marek Feliksiak",
        position: "UX i UI Designer",
        colorImg: "s2.png",
        grayscaleImg: "s2a.png"
    };

    const arek = {
        name: "Arek Pawłowicz",
        position: "Front-End Developer",
        colorImg: "s3.png",
        grayscaleImg: "s3a.png"
    };

    const team = [anna, marek, arek];
    // console.log(team.length);

    const img = document.querySelectorAll("img");
    const h1 = document.querySelector(".member h1");
    const h2 = document.querySelector(".member h2");

    let nr = 1;

    function changeElement() {
        console.log(team[nr].name);
        console.log(nr);
        img[0].src = "img/" + team[nr].colorImg;
        img[1].src = "img/" + team[nr].grayscaleImg;
        h1.textContent = team[nr].name;
        h2.textContent = team[nr].position;
        nr++;
        if (nr === team.length) {
            nr = 0;
        }
    }

   setInterval(changeElement, 4000);

})


