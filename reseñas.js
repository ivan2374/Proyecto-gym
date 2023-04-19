
let random = Math.floor(Math.random() * 30)
$.ajax({
    method: 'GET',
    url: `https://powergym-adm-default-rtdb.firebaseio.com/${random}.json`,
    headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
    contentType: 'application/json',
    success: function (results) {

        let quote = document.querySelector(".frase");
        let autor = document.querySelector(".autor")
        let foto = document.querySelector(".img")
        quote.innerHTML = results.reseñas
        autor.innerHTML = results.autor
        foto.src = results.foto
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});


let randomUno = Math.floor(Math.random() * 30)
$.ajax({
    method: 'GET',
    url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomUno}.json`,
    headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
    contentType: 'application/json',
    success: function (result) {

        let quote = document.querySelector(".frase_primer");
        let autor = document.querySelector(".autor_primer")
        let foto = document.querySelector(".img_primer")
        quote.innerHTML = result.reseñas
        autor.innerHTML = result.autor
        foto.src = result.foto
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});

let randomDos = Math.floor(Math.random() * 30)
$.ajax({
    method: 'GET',
    url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomDos}.json`,
    headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
    contentType: 'application/json',
    success: function (result) {

        let quote = document.querySelector(".frase_seg");
        let autor = document.querySelector(".autor_seg")
        let foto = document.querySelector(".img_seg")
        quote.innerHTML = result.reseñas
        autor.innerHTML = result.autor
        foto.src = result.foto
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});
let randomTres = Math.floor(Math.random() * 30)
$.ajax({
    method: 'GET',
    url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomTres}.json`,
    headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
    contentType: 'application/json',
    success: function (result) {

        let quote = document.querySelector(".frase_tercer");
        let autor = document.querySelector(".autor_tercer")
        let foto = document.querySelector(".img_tercer")
        quote.innerHTML = result.reseñas
        autor.innerHTML = result.autor
        foto.src = result.foto
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});

let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".slider-test");
let contador = 1
let tamanoWidth = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function () {
    tamanoWidth = sliderIndividual[0].clientWidth;
})

setInterval(function tiempo() {
    slices();
}, intervalo);


function slices() {
    slider.style.transform = 'translate(' + (- tamanoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if (contador == sliderIndividual.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
            let random = Math.floor(Math.random() * 30)
            $.ajax({
                method: 'GET',
                url: `https://powergym-adm-default-rtdb.firebaseio.com/${random}.json`,
                headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
                contentType: 'application/json',
                success: function (results) {

                    let quote = document.querySelector(".frase");
                    let autor = document.querySelector(".autor")
                    let foto = document.querySelector(".img")
                    quote.innerHTML = results.reseñas
                    autor.innerHTML = results.autor
                    foto.src = results.foto
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }

            });


            let randomUno = Math.floor(Math.random() * 30)
            $.ajax({
                method: 'GET',
                url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomUno}.json`,
                headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
                contentType: 'application/json',
                success: function (result) {

                    let quote = document.querySelector(".frase_primer");
                    let autor = document.querySelector(".autor_primer")
                    let foto = document.querySelector(".img_primer")
                    quote.innerHTML = result.reseñas
                    autor.innerHTML = result.autor
                    foto.src = result.foto
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }

            });

            let randomDos = Math.floor(Math.random() * 30)
            $.ajax({
                method: 'GET',
                url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomDos}.json`,
                headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
                contentType: 'application/json',
                success: function (result) {

                    let quote = document.querySelector(".frase_seg");
                    let autor = document.querySelector(".autor_seg")
                    let foto = document.querySelector(".img_seg")
                    quote.innerHTML = result.reseñas
                    autor.innerHTML = result.autor
                    foto.src = result.foto
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }

            });
            let randomTres = Math.floor(Math.random() * 30)
            $.ajax({
                method: 'GET',
                url: `https://powergym-adm-default-rtdb.firebaseio.com/${randomTres}.json`,
                headers: { 'X-Api-Key': 'fGHsEYf2bTch4u3yMZeREA==IFDxJlG0BTjYf9TE' },
                contentType: 'application/json',
                success: function (result) {

                    let quote = document.querySelector(".frase_tercer");
                    let autor = document.querySelector(".autor_tercer")
                    let foto = document.querySelector(".img_tercer")
                    quote.innerHTML = result.reseñas
                    autor.innerHTML = result.autor
                    foto.src = result.foto
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }

            });
        }, intervalo)
    }
}




