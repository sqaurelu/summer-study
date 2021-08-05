const images = ["a.jpeg", "b.jpeg", "c.jpeg", "0.jpeg", "1.jpeg", "2.jpeg"]

const todaysimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysimage}`;

document.body.appendChild(bgImage);