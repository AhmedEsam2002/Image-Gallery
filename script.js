var figuresContainer = document.querySelector("#Figures");
var modal = document.querySelector("#modal");
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
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    this.classList.add("d-none");
  }
  if (event.target == this.querySelector(".close-button")) {
    this.classList.add("d-none");
  }
});

document.querySelectorAll("figure").forEach(function (figure) {
  figure.addEventListener("click", function () {
    modal.classList.remove("d-none");
    modal.querySelector(".img-container ").style.background = `url('${
      this.querySelector("img").src
    }') center/cover no-repeat`;
  });
});
