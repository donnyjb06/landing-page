// VARIABALES
let sourcesBtn = document.getElementById("sources-btn");
let modal = document.getElementById("sources-modal");

// FUNCTIONS
function toggleSources () {
    if (modal.style.display == 'none') {
        modal.style.display = 'flex';
    }

    else {
        modal.style.display = 'none';
    }
}

// EVENT LISTENERS
sourcesBtn.addEventListener("click", toggleSources);

// window.addEventListener("click", function() {
//     if (modal.style.display === 'flex') {
//         modal.style.display = 'none';
//     }
// });