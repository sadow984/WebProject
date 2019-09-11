function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// for close

var popup = document.getElementById("abc");

window.onclick = function(even) {
    if (even.target === popup) {
        popup.style.display = "none";
    }
}