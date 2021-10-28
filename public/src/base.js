// var config = {
//     apiKey: "AIzaSyDa46rpbjR4KnrHgvY9eLggYnkoGWxoLNQ",
//     authDomain: "basedatos-38951.firebaseapp.com",
//     databaseURL: "https://basedatos-38951-default-rtdb.firebaseio.com",
//     projectId: "basedatos-38951",
//     storageBucket: "basedatos-38951.appspot.com",
//     messagingSenderId: "596371466581",
//     appId: "1:596371466581:web:028fd2862964a1fd26e7dc",
//     measurementId: "G-S58Y2HJ9BD"
// };
// // Initialize Firebase

// firebase.initializeApp(config);
// let UserRef = firebase.database().ref("users");

// function downloadFile() {
//     let name;

//     let resultados = [];
//     // let busqueda = obtenerBusqueda();
//     // if (busqueda != -1) {

//     contador = 0;
//     document.getElementById("preview").innerHTML = '';

//     UserRef.on('value', function (snapshot) {
//         snapshot.forEach(function (e) {

//             resultados.push(e.val());

//             name = extraerNombre(e.val().URL);
//             document.getElementById("preview").innerHTML += (`<div id="${name}"></div>`);
//             ObtenerImagen(extraerNombre(e.val().URL), name, extraerNombre(e.val().audio));

//         });

//     });

//     // } else {
//     //     alert("No selecciono ningun tipo de busqueda");
//     // }
// }

// function extraerNombre(url) {
//     return url.replace("C:\\fakepath\\", "");

// }
var config = {
    apiKey: "AIzaSyDa46rpbjR4KnrHgvY9eLggYnkoGWxoLNQ",
    authDomain: "basedatos-38951.firebaseapp.com",
    databaseURL: "https://basedatos-38951-default-rtdb.firebaseio.com",
    projectId: "basedatos-38951",
    storageBucket: "basedatos-38951.appspot.com",
    messagingSenderId: "596371466581",
    appId: "1:596371466581:web:028fd2862964a1fd26e7dc",
    measurementId: "G-S58Y2HJ9BD"
};
// Initialize Firebase
var x1= 1;
var x2= 1;
var x3= 1;
var x4= 1;
var x5= 1;
var x6= 1;
var x7= 1;
firebase.initializeApp(config);
var firebaseref = firebase.database().ref("users");
firebaseref.on("value", function(e){
    e.forEach(function(element){
        document.querySelector('#email').innerHTML += `<div>${x1++}_${element.val().email}</div>`
        document.querySelector('#URL').innerHTML += `<div>${x2++}_${element.val().URL}</div>`
        document.querySelector('#Address').innerHTML += `<div>${x3++}_${element.val().address}</div>`
        document.querySelector('#city').innerHTML += `<div>${x4++}_${element.val().city}</div>`
        document.querySelector('#password').innerHTML += `<div>${x5++}_${element.val().password}</div>`
        document.querySelector('#state').innerHTML += `<div>${x6++}_${element.val().state}</div>`
        document.querySelector('#zip').innerHTML += `<div>${x7++}_${element.val().zip}</div>`
        // console.log(element.val());
    })
})
