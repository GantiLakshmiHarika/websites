//JS CODE

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', filterImages);

    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(button => {
        button.addEventListener('click', () => filterCategory(button.dataset.category));
    });

    const imageLinks = document.querySelectorAll('.image-container a');
    imageLinks.forEach(imageLink => {
        imageLink.addEventListener('click', (e) => {
            e.preventDefault();
            const category = imageLink.dataset.category;
            scrollToCategory(category);
        });
    });
});

function filterImages() {
    const filter = searchBar.value.toUpperCase();
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.getElementsByTagName('a');

    for (let i = 0; i < images.length; i++) {
        const img = images[i].getElementsByTagName('img')[0];
        const altText = img.alt.toUpperCase();
        if (altText.indexOf(filter) > -1) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }
}

function filterCategory(category) {
    const imageContainer = document.querySelector('.image-container');
    const images = imageContainer.getElementsByTagName('a');
    const sections = document.querySelectorAll('div.website, div.content, div.search, div.load, div.mobile, div.social, div.feed, div.marketing, div.localization');

    for (let i = 0; i < images.length; i++) {
        if (category === 'ALL' || images[i].dataset.category === category) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }

    sections.forEach(section => {
        if (category === 'ALL' || section.id === category) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
}

function scrollToCategory(category) {
    const section = document.getElementById(category);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

