window.addEventListener("load", ()=>{
    let a = ["Marvel Sann","UI Specialist","Web Designer"];
    let dynamic_title = document.querySelector("#dynamic-title");
    dynamic_title.textContent = a[0];
    let active_index = 0;
    setInterval(function(){ 
        if (active_index >= a.length-1) {
            active_index = 0;
        }
        else{
            active_index += 1 ;
        }
        dynamic_title.textContent = a[active_index];
    }, 2000);
    let social_media_icons = document.querySelectorAll("#contact div.left div.bottom div.right span");
    social_media_icons.forEach(element => {
        element.addEventListener("mouseover", function( event ) {
            let children = element.children;
            for (let child of children) {            
                if (child.tagName === "SMALL") {
                    child.style.display = "block";
                }
            };
        }, false);
        element.addEventListener("mouseout", function( event ) {
            let children = element.children;
            for (let child of children) {            
                if (child.tagName === "SMALL") {
                    child.style.display = "none";
                }
            };
        }, false);
    });
    let mode = document.querySelector("header div.right a");
    document.querySelector("header div.right a").addEventListener("click", ()=>{
        document.querySelector("header").classList.toggle("active");
        document.querySelectorAll("header div.middle ul li a").forEach(item => {
            item.classList.toggle("active")
        });
        document.querySelector("header div.right a").classList.toggle("active")
        document.querySelector("#spotlight").classList.toggle("active");
        document.querySelector("#slider").classList.toggle("active");
        document.querySelector("#education").classList.toggle("active");
        document.querySelector("#contact").classList.toggle("active");
        document.querySelector("#contact div.right div.top form input[type='text']").classList.toggle("active");
        document.querySelector("#contact div.right div.top form input[type='email']").classList.toggle("active");
        document.querySelector("#contact div.right div.top form textarea").classList.toggle("active");
        document.querySelector("footer").classList.toggle("active");
        document.querySelector("#contact div.right div.bottom h3").classList.toggle("active");
        if (document.getElementById("spotlight").classList.contains("active")) {
                mode.innerHTML = `<i class='bx bx-sun'></i>Color mode`;
            }
            else {
                mode.innerHTML = `<i class='bx bx-moon'></i> Color mode`;
            }
    })
    let mobile_menu = document.getElementById("mobile-menu")

    let spanOverlay = document.querySelector('.overlay')
let menuIcon = document.getElementById("menu-icon");
let close = document.querySelector(".close");
let spotlight = document.querySelector("#spotlight");

menuIcon.addEventListener("click",()=>{
    mobile_menu.classList.toggle("active");
    spanOverlay.classList.toggle("active");
    close.classList.toggle("active");
    spotlight.classList.toggle("act");
})
spanOverlay.addEventListener("click",()=>{
    mobile_menu.classList.toggle("active");
    spanOverlay.classList.toggle("active");
    close.classList.toggle("active");
    spotlight.classList.toggle("act");
})
close.addEventListener("click",()=>{
    mobile_menu.classList.toggle("active");
    spanOverlay.classList.toggle("active");
    close.classList.toggle("active");
    spotlight.classList.toggle("act");
})
window.addEventListener("scroll", ()=> {
    mobile_menu.classList.remove("active",window.scrollY > 1);
    spanOverlay.classList.remove("active",window.scrollY > 1);
    close.classList.remove("act", window.scrollY > 1);
})
})
