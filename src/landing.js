const landing = () => {
  const container = document.getElementById("container");

  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-container__landing");

  const tagline = document.createElement("div");
  tagline.textContent = "the best dumplings you'll ever taste.";
  tagline.classList.add("img1-tagline")
  subContainer.appendChild(tagline);

  const img1 = document.createElement("img");
  img1.src = "../src/img/chinese-food-1.jpeg";
  img1.classList.add("img1");
  subContainer.appendChild(img1);

  container.appendChild(subContainer);

}
export default landing;
