
//Creando filtado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
document.getElementById("imgbtsch").addEventListener("click", BuscarPro);
document.querySelector('#inputSearch').addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {


        event.preventDefault();
        box_search.style.display = "none";
        box2.style.display = "none";
        document.getElementById("imgbtsch").click();
        

    }

});
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");







function buscador_interno() {


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    val1 = 0;
    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";

            box_search.style.display = "block";
            box2.style.display = "block";
            val1 = 1;

            if (inputSearch.value === "") {

                box_search.style.display = "none";

            }


        } else {
            li[i].style.display = "none";

        }



    }

    if (val1 === 0) {

        box_search.style.display = "none";

    }

}


function BuscarCad(texto, subt, num) {
    var i, x, n;
    n = num || 0;
    for (x = n; x <= texto.length - subt.length; x++) {
        i = 0;
        while (i < subt.length && texto.toUpperCase()[x + i] == subt.toUpperCase()[i])
            i++;
        if (i == subt.length)
            return x;
    }
    return -1;
}

function BuscarPro() {
    box_search.style.display = "none";
    box2.style.display = "none";
    cib1.style.display = "none"; 
    
    var K, ti, padre, Schp;
    Schp = document.getElementById('inputSearch');
    const Vp = document.querySelectorAll('.todo data');
    const Vpa = document.querySelectorAll('.todo i');
    val2 = 0;

    if (Schp.value == "" || Schp.value == " ") {
        { t20.style.display = "block"; }
        t0.style.display = "none";
    }
    else {
        for (K = 0; K < Vp.length; K += 1) {
            
            var taa5 = Vp[K].dataset.tipo;
            ti = BuscarCad(taa5, Schp.value);
            tia = BuscarCad(Vpa[K].innerHTML, Schp.value);
            padre = Vp[K].parentNode.parentNode;
            padrea = Vpa[K].parentNode.parentNode.parentNode;
            if (ti == -1 && tia == -1) {
                { padre.style.display = "none"; }
                { padrea.style.display = "none"; }

            } else if (ti == -1) {
                { padrea.style.display = "block"; }
                { t0.style.display = "block"; }
                { t20.style.display = "none"; }
                { cib1.style.display = "none"; }
                { val2 = 1; }
            } else {
                { padre.style.display = "block"; }
                { t0.style.display = "block"; }
                { t20.style.display = "none"; }
                { cib1.style.display = "none"; }
                { val2 = 1; }
            }

        }
    }

    if (val2 === 0) {
        { t1.style.display = "none"; }
        { t2.style.display = "none"; }
        { t3.style.display = "none"; }
        { t4.style.display = "none"; }
        { t5.style.display = "none"; }
        { t6.style.display = "none"; }
        { t7.style.display = "none"; }
        { t8.style.display = "none"; }
        { t9.style.display = "none"; }
        { t10.style.display = "none"; }
        { t11.style.display = "none"; }
        { t12.style.display = "none"; }
        { t13.style.display = "none"; }
        { t14.style.display = "none"; }
        { t15.style.display = "none"; }
        { t16.style.display = "none"; }
        { t17.style.display = "none"; }
        

        { t20.style.display = "block"; }
        { t0.style.display = "none"; }

    }


    document.getElementById("inputSearch").value = "";

}




