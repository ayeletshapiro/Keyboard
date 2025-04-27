
function loadHebrewKeyBoard() {
    title = document.createElement("h1")
    title.innerHTML = "virtual keyboard".toLocaleUpperCase()
    title.style.textAlign = "center"
    title.style.color = "rgb(241, 144, 220)"
    title.style.fontSize = "50px"
    document.getElementById("body").appendChild(title)
    main_div = document.createElement("div") //store the keyboard
    main_div.id = "main_div";
    main_div.style.direction = "rtl"
    document.getElementById("body").appendChild(main_div)
    section = document.createElement("section")
    // section.style.backgroundColor = "black"
    section.style.width = "90%"
    section.style.margin = "auto"
    main_div.appendChild(section)
    buildKeyBoard(section, main_div)
}

function buildKeyBoard(div_for_keyboard, main_div) {
    num = 0
    for (i = 1488; i <= "ת".charCodeAt(0); i++) {
        key = document.createElement("div")
        key.innerHTML = String.fromCharCode(i)
        key.className = "key"
        key.addEventListener("mouseover", (e) => {
            e.target.style.width = "60px";
            e.target.style.height = "60px";
        });
        key.addEventListener("mouseout", (e) => {
            e.target.style.width = "50px";
            e.target.style.height = "45px";
        });
        key.addEventListener("click", (e) => {
            document.getElementById("output").innerHTML += e.target.innerHTML
        });
        div_for_keyboard.appendChild(key)
        num++
        if (num == 9) {
            div_for_keyboard.appendChild(document.createElement("br"))
            num = 0
        }
    }
    space = document.createElement("footer")
    space.innerHTML = "Space"
    space.addEventListener("click", (e) => {
        document.getElementById("output").innerHTML += String.fromCharCode(32)
    })
    space.style.textAlign = "center"
    // space.style.backgroundColor = "black"
    space.className = "key big_keys"
    space.style.width = "99%"
    div_for_keyboard.appendChild(space)
    output = document.createElement("div")
    output.className = "key big_keys"
    output.id = "output"
    output.innerHTML = ""
    main_div.appendChild(output)
    btn1 = document.createElement("button")
    btn2 = document.createElement("button")
    btn1.innerHTML = "delete last char"
    btn1.addEventListener("click", (e) => {
        text = document.getElementById("output").innerHTML
        document.getElementById("output").innerHTML = text.slice(0, -1)
    })
    btn2.innerHTML = "delete all text"
    btn2.addEventListener("click", (e) => {
        document.getElementById("output").innerHTML = ""
    })
    buttons = document.createElement("div")
    buttons.style.marginRight = "30%"
    buttons.alignItems="center"
    buttons.style.width="60%"
    buttons.appendChild(btn1)
    buttons.appendChild(btn2)
    main_div.appendChild(buttons)
}
