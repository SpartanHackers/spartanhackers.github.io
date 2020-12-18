const themes = {
    LIGHT: "light",
    DARK: "dark"
}

let theme = localStorage.getItem("theme");
init(theme);

window.onload = function(event){

    const navbar = document.querySelector(".navbar");
    const table = document.querySelector(".table");
    const customSwitch = document.getElementById("customSwitch");
    
    customSwitch.checked = theme === themes.DARK;
    customSwitch.addEventListener("change", toggleTheme);

    if(theme === themes.DARK){
        setDarkTheme();
    } else {
        setLightTheme();
    }
    
    function toggleTheme(event){
        customSwitch.checked = event.target.checked;
        
        if(customSwitch.checked){
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    function setDarkTheme(){
        document.querySelector('link[href="/style-light.css"]')
        .setAttribute("href", "/style-dark.css");
        localStorage.setItem("theme", themes.DARK);
        
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
        
        if(table){
            table.classList.add("table-dark");
            table.classList.remove("table-light");
        }
    }

    function setLightTheme(){
        document.querySelector('link[href="/style-dark.css"]')
        .setAttribute("href", "/style-light.css");
        localStorage.setItem("theme", themes.LIGHT);

        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");

        if (table) {
            table.classList.remove("table-dark");
            table.classList.add("table-light");
        }
    }
}

function init(theme){
    if(theme === themes.DARK){
        document.querySelector('link[href="/style-light.css"]')
        .setAttribute("href", "/style-dark.css");
        localStorage.setItem("theme", themes.DARK);
    }
}