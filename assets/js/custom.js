// slide click
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slider");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


// typed
let typed = new Typed('.typed', {
    strings: ["Web Developer.", "Mobile Apps Developer.", "Desktop Apps Developer.", "UI/UX Designer.", "System Analyst."],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});


// modal action
// function getId() {
//     // cek value btn yg diklik
//     window.onclick = e => {
//         const targetId = e.target.value;
//         // dapatkan id modal berdasarkan value btn yg diklik
//         const modal = document.getElementById(targetId);
//         const span = document.getElementsByClassName("close")[0];
//         modal.style.display = "block";

//         span.onclick = function () {
//             modal.style.display = "none";
//         }

//         // ketika diklik diluar modal display none atau tdk ada
//         window.onclick = function (event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         }
//     }

// }


function getId(e) {
    const modal = document.getElementById(e);
    modal.style.display = "block";


    const span = document.getElementsByClassName("close");
    Array.from(span).forEach((el) => {
        el.onclick = function () {
            modal.style.display = "none";
        }
    });

    // ketika diklik diluar modal display none atau tdk ada
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
