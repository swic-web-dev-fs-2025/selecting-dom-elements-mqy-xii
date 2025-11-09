// import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1 class="text-3xl font-bold underline">
//     Hello Vite!
//   </h1>
// `;

// 1. Select the main header by ID and log it.
const header = document.getElementById("main-header");
console.info(header);

// 2. Select all links inside .navbar using querySelectorAll and log how many there are.
const navLinks = document.querySelectorAll("nav > a");
console.info(`# of nav links: ${navLinks.length}`);

// 3. Select internal links (those starting with /) and append " [internal]" to their text.
// Warp assisted – .querySelectorAll(<a> tags starting with (^=) "/", and then appending "[internal]" for each match)
document.querySelectorAll('a[href^="/"]').forEach((link) => {
  link.textContent += " [internal]";
});

// 4. Select all required inputs and add a yellow outline (style.outline = "2px solid gold").
document.querySelectorAll("[required]").forEach((reqInput) => {
  reqInput.style.outline = "2px solid gold";
});

// 5. Select all .card elements, loop through them, and add a data-viewed="true" attribute to each.
document.querySelectorAll(".card").forEach((card) => {
  card.setAttribute("data-viewed", "true");
});

// 6. Select the product with data-product-id="2" and change its price to "$24.99".
// I was super close to getting this one on my own, but Warp helped me realize I should use querySelector twice.
const product2 = document.querySelector("[data-product-id='2']");
if (product2) {
  product2.querySelector(".price").textContent = "$24.99";
} else {
  console.info("Product 2 not found.");
}

// Hands-On 2
// Original
// const title = document.querySelector("main .card .card-title");

// Refactor #1 – Using what's provided
// const title = document.querySelector("[data-product-id='1'] > .card-title");

// Refactor #2 – Adding my own data-* attribute
const title = document.querySelector("[data-title='a']");
console.info("Title:", title);
