const txtinput = document.querySelector(".inputs input");
checkbtn = document.querySelector(".inputs button"),
    infotxt = document.querySelector(".info-txt");
let filterinput;

checkbtn.addEventListener("click", () => {
    let reverseinput = filterinput.split("").reverse().join("");
    infotxt.style.display = "block";
    if (filterinput != reverseinput) {
        return infotxt.innerHTML = `No, <span>'${txtinput.value}'</span> isn't a palindrome!`;
    }
    infotxt.innerHTML = `Yes, <span>'${txtinput.value}'</span> is a palindrome!`;
})

txtinput.addEventListener("keyup", () => {
    filterinput = txtinput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterinput) {
        return checkbtn.classList.add("active");
    }
    infotxt.style.display = "none";
    checkbtn.classList.remove("active");
});