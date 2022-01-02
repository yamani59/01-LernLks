const header = document.querySelector('.header');
const site = document.querySelector('.site');
const cta = document.querySelector('.cta');

const imageOverlay = document.querySelector('.image-container').children[0];
const mainImage = document.querySelector('.image-container').children[1];

const link = Array.from(document.querySelectorAll('.link'));

function animate() {
  setTimeout(() => {
    header.classList.add('active');
    imageOverlay.style.animation = 'slide 1s forwards';
    mainImage.style.animation = 'slide-perm 1.5s forwards';
  }, 2000);

  setTimeout(() => {
    site.classList.add('active');
    cta.classList.add('active');
  }, 3000)

  link.forEach((lin, idx) => {
    setTimeout(() => {
      lin.classList.add('active');
      console.log(`ini idx ke - ${idx}`)
    }, (idx * 200) + 2500)
  })
}

animate()