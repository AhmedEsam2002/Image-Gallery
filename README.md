# Modern Image Gallery with Dynamic Slider

![Modern Image Gallery](https://img.shields.io/badge/Gallery-Interactive-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A beautiful, responsive image gallery with a dynamic modal slider built using HTML, CSS, and vanilla JavaScript. This project features smooth animations, interactive controls, and a modern UI design.

## 🌟 Features

- **Responsive Grid Layout**: Automatically adjusts to different screen sizes
- **Animated Image Cards**: Smooth hover effects with caption animations
- **Interactive Modal Viewer**: Click any image to view in fullscreen
- **Keyboard Navigation**: Use arrow keys to navigate between images
- **Touch-Friendly Controls**: Large navigation controls for better mobile experience
- **Modern UI Design**: Sleek design with animations and transitions
- **Cross-Browser Compatible**: Works across all modern browsers

## 📋 Implementation Details

The gallery is implemented using:

- **HTML5** structure with semantic markup
- **CSS3** animations, transitions, and modern layout techniques
- **JavaScript** for dynamic content generation and interaction handling
- **Bootstrap 5** for responsive grid and utility classes
- **Font Awesome** for navigation and UI icons

## 🖼️ Gallery Features

- Dynamic image loading from a JavaScript array
- Smooth transition effects when opening/closing the modal
- Caption display for each image
- Circular navigation (loops from last to first image and vice versa)
- Close button and backdrop click to exit modal view

## 🚀 Navigation Controls

The slider includes:

- Left/right arrow navigation buttons with hover effects
- Keyboard arrow key support
- ESC key to close the modal
- Interactive close button

## 📱 Responsive Design

- Adapts to desktop, tablet, and mobile screens
- Properly sized images that maintain aspect ratio
- Touch-friendly controls on mobile devices

## 💻 How It Works

1. Images are dynamically loaded from a JavaScript array
2. When a user clicks on an image, the modal opens displaying the selected image
3. Users can navigate through images using the arrow buttons or keyboard
4. The modal can be closed by clicking the X button, clicking outside the image, or pressing ESC

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript (ES6+)
- Bootstrap 5
- Font Awesome 6
- Google Fonts

## 📦 Project Structure

```
├── index.html          # Main HTML document
├── stylee.css          # Custom stylesheet
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/modern-image-gallery.git
   ```

2. Open `index.html` in any modern web browser.

## 🔍 Code Overview

### HTML Structure

The main structure consists of a responsive container for the gallery and a modal for the fullscreen view.

### CSS Styling

Advanced CSS features including:

- CSS variables for theme colors
- Transitions and animations
- Positioning techniques
- Backdrop filters
- Box shadows and other visual effects

### JavaScript Functionality

The JavaScript code powers all dynamic functionality in the project. Here's a detailed breakdown:

#### 1. Initialization and DOM Selection

```javascript
// Select key DOM elements
var figuresContainer = document.querySelector("#Figures");
var modal = document.querySelector("#modal");
var arrowRight = document.querySelector(".fa-arrow-right");
var arrowLeft = document.querySelector(".fa-arrow-left");
var ModalImg = modal.querySelector(".img-container");

// Array of image URLs
var imgUrls = [
  "https://as2.ftcdn.net/v2/jpg/14/68/44/75/1000_F_1468447591_5CvW5SiuCaqgGhyfPKQ26TG5y1HMzPse.jpg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  // ... more images
];
```

#### 2. Dynamic Gallery Generation

The script dynamically generates HTML for the image gallery based on the `imgUrls` array:

```javascript
var html = "";
for (let i = 0; i < imgUrls.length; i++) {
  html += `
    <div class="col-md-4">
      <figure class="overflow-hidden position-relative">
        <img src="${imgUrls[i]}" alt="Image ${i + 1}" class="w-100" />
        <figcaption class="position-absolute layer bg-white p-2 text-center">
          <h2>Image ${i + 1}</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </figcaption>
      </figure>
    </div>
  `;
}
figuresContainer.innerHTML = html;
```

#### 3. Event Handling System

Multiple event listeners manage user interactions:

```javascript
// Click events on the modal (close, navigate)
modal.addEventListener("click", function (event) {
  if (
    event.target === modal ||
    event.target === modal.querySelector(".close-button")
  ) {
    modal.classList.add("d-none"); // Hide modal
  } else if (event.target === arrowRight) {
    SetNextImg(); // Show next image
  } else if (event.target === arrowLeft) {
    SetPrevImg(); // Show previous image
  }
});

// Click events on figures (open modal)
figures.forEach(function (figure) {
  figure.addEventListener("click", function (e) {
    modal.classList.remove("d-none"); // Show modal
    setModelImg(e.target.src); // Set clicked image as modal image
  });
});

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  if (!modal.classList.contains("d-none")) {
    if (event.key === "ArrowRight") SetNextImg();
    else if (event.key === "ArrowLeft") SetPrevImg();
    else if (event.key === "Escape") modal.classList.add("d-none");
  }
});
```

#### 4. Navigation Functions

Circular navigation system using modulo arithmetic:

```javascript
function SetNextImg() {
  var currentImgSrc = getImgSrc();
  var currentIndex = imgSrcs.indexOf(currentImgSrc);
  var nextIndex = (currentIndex + 1) % imgSrcs.length; // Circular navigation
  var NextImgSrc = imgSrcs[nextIndex];
  setModelImg(NextImgSrc);
  return NextImgSrc;
}

function SetPrevImg() {
  var currentImgSrc = getImgSrc();
  var currentIndex = imgSrcs.indexOf(currentImgSrc);
  var prevIndex = (currentIndex - 1 + imgSrcs.length) % imgSrcs.length; // Circular navigation
  var PrevImgSrc = imgSrcs[prevIndex];
  setModelImg(PrevImgSrc);
  return PrevImgSrc;
}
```

#### 5. Helper Functions

Utility functions to manage the modal image:

```javascript
function getImgSrc() {
  // Extract image URL from background style
  var bg = ModalImg.style.background;
  var match = bg.match(/url\(['"]?(.*?)['"]?\)/);
  return match ? match[1] : "";
}

function setModelImg(imgSrc) {
  // Set background image of modal container
  ModalImg.style.background = `url('${imgSrc}') center/cover no-repeat`;
}
```

This code demonstrates several advanced JavaScript concepts:

- DOM manipulation
- Event delegation
- Template literals for HTML generation
- Regular expressions for string extraction
- Modulo arithmetic for circular navigation
- Array methods (map, forEach)
- Event handling for mouse and keyboard

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)

---

Created with ❤️ by Ahmed
