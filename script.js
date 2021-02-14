const themes = {
    LIGHT: "light",
    DARK: "dark"
}


window.onload = function(event){
    
    const theme = localStorage.getItem("theme");
    const navbar = document.querySelector(".navbar");
    const table = document.querySelector(".table");
    const homeLogo = document.getElementById('home-logo');
    const customSwitch = document.getElementById("customSwitch");
    const collapse = document.querySelector('.navbar-collapse');
    
    collapse.addEventListener('click', clickListener);
    
    customSwitch.checked = theme === themes.DARK;
    customSwitch.addEventListener("change", toggleTheme);

    if(theme === themes.DARK){
        setTheme(true);
    } else {
        setTheme(false);
    }
    
    function toggleTheme(event){
        customSwitch.checked = event.target.checked;
        setTheme(customSwitch.checked);
    }

    function setTheme(switchChecked){
        if(switchChecked){
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    function setDarkTheme(){
        document.querySelector('link[href="/style-light.css"]')
        .setAttribute("href", "/style-dark.css");
        localStorage.setItem("theme", themes.DARK);

        homeLogo.setAttribute('src', './images/SH DARK.png');
        homeLogo.classList.add('dark');
        
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

        homeLogo.setAttribute('src', './images/SH LIGHT.png');
        homeLogo.classList.remove('dark');

        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");

        if (table) {
            table.classList.remove("table-dark");
            table.classList.add("table-light");
        }
    }

    function clickListener({target}) {
        if (target.classList.contains('nav-link') || target.id === 'home-logo') {
            // document.querySelector('.collapse').collapse('hide');
            $('.collapse').collapse('hide');
        }
    }
}