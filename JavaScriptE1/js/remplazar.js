
function remplazar() {

    //pedir datos
    let valor = document.getElementById("parrafo").value;
    let remplaza = document.getElementById("idremplaz").value;
    let busca = document.getElementById("idbuscar").value;
    //mach a buscar
    let machh = new RegExp(`\\b${busca}\\b`, 'gi');
    //var machh = valor.match(busca);
    // busca toda la respuestas y la cambia

    let txt = valor.replace(machh, remplaza);
    //var bus = valor.match(new RegExp(machh,"gi"));

    // remplaza el contenido de text area
    document.getElementById("parrafo").value = txt;
    // document.getElementById("parrafo1").value = bus;
}
