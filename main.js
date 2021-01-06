$(document).ready(function () {
    
    // listado dinamico
    var post = [
        {
            title: 'La nueva version de los telefonos apple',
            fecha: 'publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY")  ,
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae delectus harum! Temporibus assumenda, eveniet natus asperiores, rerum soluta pariatur blanditiis, laboriosam in veniam libero ullam modi consequatur sed odio.'
        },
        {
            title: 'Google anuncia nuevas actualizaciones',
            fecha: 'publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY")  ,
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae delectus harum! Temporibus assumenda, eveniet natus asperiores, rerum soluta pariatur blanditiis, laboriosam in veniam libero ullam modi consequatur sed odio.'
        },
        {
            title: '4 motivos para cambiarte a windows',
            fecha: 'publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY")  ,
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae delectus harum! Temporibus assumenda, eveniet natus asperiores, rerum soluta pariatur blanditiis, laboriosam in veniam libero ullam modi consequatur sed odio.'
        },
        {
            title: 'Lo mejor de las applicaciones',
            fecha: 'publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY")  ,
            contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae delectus harum! Temporibus assumenda, eveniet natus asperiores, rerum soluta pariatur blanditiis, laboriosam in veniam libero ullam modi consequatur sed odio.'
        },
    ]

    // para imprimir por pantalla
    post.forEach((item, index) => {
        var post = `
        <article class="post">
            <h3>${item.title}</h3>
            <span>${item.fecha}</span>
            <p>${item.contenido}</p> 
            <button id="to-black" class="btn  btn-primary" type="submit">Ver Mas</button> 
        </article>
        <br>
        <br>
        `;
        $(".posts").append(post);

    })

    //cambio de tema 
    var theme = $("#theme");
    var nav = $("#nav");
    var btn = $("#to-black");
    var container = $("#container");
    var footer = $("#footer");
   
    $("#to-black").click(() => {

        nav.toggleClass("navbar-dark bg-dark");
        container.toggleClass("bg-dark text-white");
        btn.toggleClass("btn-outline-light");
        footer.toggleClass("bg-light");

        if (btn.text() == "Dark View") {
            btn.text('Light View')
        } else {
            btn.text('Dark View')
        }
        
        //cambio de tema mas personalizado 
        if (theme.attr("href") == "css/light.css") {
            theme.attr("href", "css/black.css");
        } else if (theme.attr("href") == "css/black.css") {
            theme.attr("href", "css/light.css");
        }

        
        
    });

    // scroll suabizado 
    $('.subir').click((e) => {

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    //login falso
    $('#submit').click(() => {
        var usuario = {
            nombre: $('#nombre').val(),
            correo: $('#correo').val(),
            contraseña: $('#contra').val()
        }

        
        localStorage.setItem("nombre", usuario.nombre);
        localStorage.setItem("correo", usuario.correo);
        localStorage.setItem("contraseña", usuario.contra);
        location.reload()
        
    });

    var nombre = localStorage.getItem("nombre");
    if (nombre != null && nombre != "undefined") {
        
        $('#about').html("<strong>" + nombre + "</strong>");
        $('#about').append("<button type='button' id='logout' class='btn btn-sm btn-danger'>Cerrar Seccion</button>")
        $('.login').hide();

        $("#logout").click(() => {
            localStorage.clear();
            location.reload()
        })


    }

    // reloj en vivo
    setInterval(() => {
        $('#about').html(moment().format("hh:mm:ss"));
    }, 1000);
    

    //validacion 

    $("#commentForm").validate();

    
    

   




  

    


    

    
    
    
})