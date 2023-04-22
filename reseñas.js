//Funcion que genera un numero aleatorio que se usa como indice para obtener los datos de la api rest
let numeroRandom = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

// Funcion que realiza una peticion ajax dada como parametro y actualiza los elementos recibidos, todo esto lo realiza de forma asincronica sin bloquear la pagina mientras se espera la respuesta de la misma
function getReview(url, reviewSelector, authorSelector, photoSelector) {
    $.ajax({
        method: 'GET',
        url: url,
        contentType: 'application/json',
        success: function (result) {
            let quote = document.querySelector(reviewSelector);
            let author = document.querySelector(authorSelector);
            let photo = document.querySelector(photoSelector);
            quote.innerHTML = result.reseñas;
            author.innerHTML = result.autor;
            photo.src = result.foto;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Url para las peticiones ajax agregando la funcion numeroRandom para generar aleatoriamente las distintas reseñas
let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;

// Función encargada de la animacion del slider
function moveSlider(sliderContainer, sliderItems, width, interval) {
    let counter = 1;
    setInterval(function tiempo() {
        sliderContainer.style.transform = 'translate(' + (-width * counter) + 'px)';
        sliderContainer.style.transition = 'transform 1s';
        counter++;

        if (counter == sliderItems.length) {
            counter = 0;
            setTimeout(function () {
                sliderContainer.style.transform = 'translate(0px)';
                sliderContainer.style.transition = 'transform 1s';
                counter = 1;
                updateReview();
            }, interval)
        }
    }, interval);
}

// Se utiliza la funcion getReview para acutalizar los nodos 
getReview(reviewUrl, '.review', '.author', '.photo');
getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');

//Funcion que se ejecuta una vez que este cargada la pagina y todos los elementos
window.onload = function () {
    let sliderContainer = document.querySelector('.slider-contenedor');
    let sliderItems = document.querySelectorAll('.slider-test');
    let width = sliderItems[0].clientWidth;
    let interval = 5000;

    moveSlider(sliderContainer, sliderItems, width, interval);
};

//Funcion encargada de actualizar los datos una vez que se llega al ultimo slide
function updateReview() {
    let reviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
    let firstReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
    let secondReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;
    let thirdReviewUrl = `https://powergym-adm-default-rtdb.firebaseio.com/${numeroRandom(0, 31)}.json`;

    getReview(reviewUrl, '.review', '.author', '.photo');
    getReview(firstReviewUrl, '.first-review', '.first-author', '.first-photo');
    getReview(secondReviewUrl, '.second-review', '.second-author', '.second-photo');
    getReview(thirdReviewUrl, '.third-review', '.third-author', '.third-photo');

}





