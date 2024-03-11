// Scrolling Header Color Change
window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.header');

    var scrollTop = window.scrollY;

    //console.log(scrollTop)

    if (scrollTop < 765) {
        navbar.classList.remove('color2', 'color3');
        navbar.classList.add('color1');
    } else if (scrollTop < 2500) {
        navbar.classList.remove('color1', 'color3',);
        navbar.classList.add('color2');
    } else if (scrollTop<3685) {
        navbar.classList.remove('color1', 'color2',);
        navbar.classList.add('color3');
    } else {
        navbar.classList.remove('color1', 'color3');
        navbar.classList.add('color2');
    }

    var links = document.querySelectorAll('.header_font_color a');

    links.forEach(function(link) {
        if (scrollTop < 765) {
            link.style.color = '#845007';
        } 
        else if (scrollTop < 2500) {
            link.style.color = 'white';
        } else if (scrollTop < 3685) {
            link.style.color = '#3A4660';
        } else {
            link.style.color = 'white';
        }
    });

    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
} )

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});



// Get all links
var links = document.querySelectorAll('.navbar a');

// Add scroll event listener for each link
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get target element id
        var targetId = this.getAttribute('href').substring(1);

        // Scroll to the target element smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projet_list = document.querySelector(".start_add_project")

fetch('./infor.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(Element => {
            projet_list.insertAdjacentHTML('beforebegin',`<a class="notlinkshow" target="_blank" href="${Element.projectURL}">
            <div class="project">
                <div class="projectbox">
                    <div class="project-image">
                        <img src="${Element.pojectImg}" alt="" width="100%" height="auto">
                    </div>
                </div>
                <div class="project-detail">
                    <h4>${Element.projectName}</h4>
                    <hr width="200" color="#ED8A63" size="6">
            </div>
        </a>`);
        });
    })