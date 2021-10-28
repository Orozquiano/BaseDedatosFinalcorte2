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

firebase.initializeApp(config);
var firebaseref = firebase.database().ref("users");

async function BuscarUser() {
    let email = await document.getElementById("UserEmail").value;
    let password = await document.getElementById("UserPassword").value;
    let email2,password2;
    // let name;
    // let resultados = [];
    // let busqueda = obtenerBusqueda();

    // if(obtenerBusqueda()!= -1)
    // {
    
    firebaseref.on('value', function (snapshot) {
        snapshot.forEach(function (element) {
            email2 =  element.val().email;
            password2 =  element.val().password;

            alert(email2 + "  "+ password2+ "  "+email+"   "+password);
            
            if(email == email2 && password == password2)
            {
                alert("entre");
                // alert("usuario encontrado: "+ element.val().email + "   con la contraseña: "element.val().password);
                location.href="../Admin.html";
            }
            else{
                alert("usuario no encontrado");
            }
            // document.getElementById("UserEmail")
            // document.querySelector('#email').innerHTML += `<div>${x1++}_${element.val().email}</div>`

        });
    })

    // }else{
    //     alert("no se encontro el user");
    // }
}

// function obtenerBusqueda()
// {

// }