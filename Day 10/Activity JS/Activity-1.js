//Task 1

document.querySelector("button")
    .addEventListener('click', () => {
        document.querySelector("p")
            .innerText = "hello this is new paragraph"
    });


//Task 2

document.querySelector("img")
    .addEventListener('dblclick', () => {
        document.querySelector("img").style.visibility = "hidden";
    });