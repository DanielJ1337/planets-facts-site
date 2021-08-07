const internal = document.querySelector('.planet__link--internal');
const planetInfo = document.querySelector('.planet__info');

console.log(planets);
console.log(strippedURL);

internal.addEventListener('click', () => {
    planetInfo.innerHTML = planets[strippedURL].structure;
});
