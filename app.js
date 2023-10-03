// script.js

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Coordenadas de Nueva York (puedes ajustarlas)
        zoom: 12 // Nivel de zoom inicial
    });
}

const buildings = {
    A: {
        name: "Edificio A",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum..",
        location: { lat: 40.7111, lng: -74.0055 }, // Replace with actual coordinates
        subtitle1: "Building Type:",
        text1: "Administrative Office",
        subtitle2: "Number of Floors:",
        text2: "5",
    },
    B: {
        name: "Edificio B",
        description: "Building B is a lecture hall with a seating capacity of 200.",
        location: { lat: 40.7122, lng: -74.0066 }, // Replace with actual coordinates
    },
    C: {
        name: "Edificio C",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    D: {
        name: "Edificio D",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    E: {
        name: "Edificio E",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    F: {
        name: "Edificio F",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    G: {
        name: "Edificio G",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    H: {
        name: "Edificio H",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    I: {
        name: "Edificio I",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    J: {
        name: "Edificio J",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },
    K: {
        name: "Edificio K",
        description: "Building C is the library with a vast collection of books and study spaces.",
        location: { lat: 40.7133, lng: -74.0077 }, // Replace with actual coordinates
    },


    // Add more buildings as needed
};
for (const key in buildings) {
    const building = buildings[key];
    new google.maps.Marker({
        position: building.location,
        map: map,
        title: building.name,
    });
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

