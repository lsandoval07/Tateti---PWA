var boton = document.getElementsByTagName ("button")[0];
boton.onclick = ocultar;

function ocultar ()
    {
        var modal = document.getElementsByClassName ("modal")[0];
        modal.className+=" oculto";
        //modal.className="modal oculto" es casi lo mismo, en la anterior le agrega clase oculto  modal.
        //Este ciclo for borra todo el contenido del tablero.
        for(i=0; i<conte.length; i++)
            {
                conte[i].innerHTML="";
                conte[i].setAttribute("onclick","escribir("+i+")");
                conte[i].className="";
                turno=true;
            }
            boton.setAttribute("onclick","ocultar()");
    }
function mostrar ()
    {
        var modal = document.getElementsByClassName ("modal")[0];
        modal.className+="modal";
    }
var conte = document.getElementsByTagName ("div");
var turno = true;
conte[0].setAttribute("onclick", "escribir(0)");
conte[1].setAttribute("onclick", "escribir(1)");
conte[2].setAttribute("onclick", "escribir(2)");
conte[3].setAttribute("onclick", "escribir(3)");
conte[4].setAttribute("onclick", "escribir(4)");
conte[5].setAttribute("onclick", "escribir(5)");
conte[6].setAttribute("onclick", "escribir(6)");
conte[7].setAttribute("onclick", "escribir(7)");
conte[8].setAttribute("onclick", "escribir(8)");

function escribir (num)
    {
        var h2=document.createElement("h2");
        if(turno==true)
        {
            h2.innerHTML="X";
            h2.className="x";
            turno=false;
        }
        else
        {
            h2.innerHTML="O";
            h2.className="o";
            turno=true;
        }
        conte[num].appendChild(h2);
        conte[num].className="elegido";
        /*conte[num].setAttribute("onclick", ""); como alternativa*/
        conte[num].removeAttribute("onclick");
        ganar();
    }

    function ganar ()
        {
            if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[1].innerHTML && conte[0].innerHTML==conte[2].innerHTML)
            {
                var gano=conte[0].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[3].innerHTML!="" && conte[3].innerHTML==conte[4].innerHTML && conte[3].innerHTML==conte[5].innerHTML)
            {
                var gano=conte[3].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[6].innerHTML!="" && conte[6].innerHTML==conte[7].innerHTML && conte[6].innerHTML==conte[8].innerHTML)
            {
                var gano=conte[6].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[3].innerHTML && conte[0].innerHTML==conte[6].innerHTML)
            {
                var gano=conte[0].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[1].innerHTML!="" && conte[1].innerHTML==conte[4].innerHTML && conte[1].innerHTML==conte[7].innerHTML)
            {
                var gano=conte[1].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[5].innerHTML && conte[2].innerHTML==conte[8].innerHTML)
            {
                var gano=conte[2].firstChild.innerHTML;
                punto(gano);

 
            }
            if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[4].innerHTML && conte[0].innerHTML==conte[8].innerHTML)
            {
                var gano=conte[0].firstChild.innerHTML;
                punto(gano);


            }
            if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[4].innerHTML && conte[2].innerHTML==conte[6].innerHTML)
            {
                var gano=conte[2].firstChild.innerHTML;
                punto(gano);

            }
         if (conte[0].innerHTML!="" && conte[1].innerHTML!="" && conte[2].innerHTML!="" && conte[3].innerHTML!="" && conte[4].innerHTML!="" && conte[5].innerHTML!="" && conte[6].innerHTML!="" && conte[7].innerHTML!="" && conte[8].innerHTML!="")
            {
            var modal=document.getElementsByTagName("section")[0];
            modal.childNodes[0].innerHTML="Empate!!!"; 
            modal.childNodes[1].innerHTML=""; 
            modal.childNodes[2].innerHTML="Jugar otra vez"; 
            mostrar(); 
            }
         }
var puntoX=0;
var puntoO=0;
        function punto(anotar)
            {
                h1=document.getElementsByTagName("h1");
                if (anotar=="X")
                    {
                        puntoX+=1;
                        h1[0].innerHTML="X:"+puntoX;
                    }
                    else
                    {
                        puntoO+=1;
                        h1[1].innerHTML="O:"+puntoO;
                    }
                 var modal=document.getElementsByTagName("section")[0];
                 if (puntoX<3 && puntoO<3)  
                 {                 
                 modal.childNodes[0].innerHTML="Gano "+anotar+"!!!"; 
                 modal.childNodes[2].innerHTML="Jugar otra vez"; 
                 }
                 else
                 {
                 modal.childNodes[0].innerHTML="Campeón definitivo "+anotar+"!!!"; 
                 modal.childNodes[1].innerHTML="";
                 modal.childNodes[2].innerHTML="reiniciar";  
                 modal.childNodes[2].setAttribute("onclick","reiniciar()");
                 }
                 mostrar(); 
                   
            }
        function reiniciar()
            {
                puntoX=0;
                puntoO=0;
                h1[0].innerHTML="X:";
                h1[1].innerHTML="O:";
                ocultar();
            }