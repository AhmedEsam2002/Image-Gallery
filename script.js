var figuresContainer = document.querySelector("#Figures");
var modal = document.querySelector("#modal");
var arrowRight = document.querySelector(".fa-arrow-right");
var arrowLeft = document.querySelector(".fa-arrow-left");
var ModalImg = modal.querySelector(".img-container");

var imgUrls = [
  "https://as2.ftcdn.net/v2/jpg/14/68/44/75/1000_F_1468447591_5CvW5SiuCaqgGhyfPKQ26TG5y1HMzPse.jpg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
];

var html = "";

for (let i = 0; i < imgUrls.length; i++) {
  html += `
                <div class="col-md-4">
                        <figure class="overflow-hidden position-relative">
                                <img
                                        src="${imgUrls[i]}"
                                        alt="Image ${i + 1}"
                                        class="w-100"
                                />
                                <figcaption class="position-absolute layer bg-white p-2 text-center">
                                        <h2>Image ${i + 1}</h2>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                </figcaption>
                        </figure>
                </div>
        `;
}

figuresContainer.innerHTML = html;
var figures = document.querySelectorAll("figure");
var imgSrcs = Array.from(figures).map((f) => f.querySelector("img").src);
modal.addEventListener("click", function (event) {
  if (
    event.target === modal ||
    event.target === modal.querySelector(".close-button")
  ) {
    modal.classList.add("d-none");
  } else if (event.target === arrowRight) {
    console.log("Right", SetNextImg());
  } else if (event.target === arrowLeft) {
    console.log("Left", SetPrevImg());
  } else {
    return;
  }
});

figures.forEach(function (figure) {
  figure.addEventListener("click", function (e) {
    // Show Modal
    modal.classList.remove("d-none");
    //   Change Modal Img
    setModelImg(e.target.src);
  });
});
function SetNextImg() {
  // Get the current image source from the modal
  var currentImgSrc = getImgSrc();
  var currentIndex = imgSrcs.indexOf(currentImgSrc);
  var nextIndex = (currentIndex + 1) % imgSrcs.length; // circle with mod
  var NextImgSrc = imgSrcs[nextIndex];
  // Update modal image using setModelImg
  setModelImg(NextImgSrc);
  return NextImgSrc;
}
function SetPrevImg() {
  var currentImgSrc = getImgSrc();

  var currentIndex = imgSrcs.indexOf(currentImgSrc);
  var prevIndex = (currentIndex - 1 + imgSrcs.length) % imgSrcs.length; // circle with mod
  var PrevImgSrc = imgSrcs[prevIndex];
  setModelImg(PrevImgSrc);
  return PrevImgSrc;
}
function getImgSrc() {
  // Extract the image URL from the background style
  var bg = ModalImg.style.background;
  var match = bg.match(/url\(['"]?(.*?)['"]?\)/);
  return match ? match[1] : "";
}

function setModelImg(imgSrc) {
  ModalImg.style.background = `url('${imgSrc}') center/cover no-repeat`;
}

document.addEventListener("keydown", function (event) {
  if (!modal.classList.contains("d-none")) {
    if (event.key === "ArrowRight") {
      SetNextImg();
    } else if (event.key === "ArrowLeft") {
      SetPrevImg();
    } else if (event.key === "Escape") {
      modal.classList.add("d-none");
    }
  }
});
