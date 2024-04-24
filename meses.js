function goToIndex(){
    window.location.href='index.html'
}
Mes()
function Mes(){
    const mes = parseInt(prompt('Ingrese el número del mes:'));
    if(isNaN(mes)){
        console.log('Numero de mes invalido: ' + mes)
    }
    switch(mes){
        case 12:
            document.write('<h2>Mes ingresado Diciembre... ' + mes + '</h2>')
            break;
        case 11:
            document.write('<h2>Mes ingresado Noviembre... ' + mes + '</h2>')
            break;
        case 10:
            document.write('<h2>Mes ingresado Octubre... ' + mes + '</h2>')
            break;
        case 9:
            document.write('<h2>Mes ingresado Septiembre... ' + mes + '</h2>')
            break;
        case 8:
            document.write('<h2>Mes ingresado Agosto... ' + mes + '</h2>')
            break;
        case 7:
            document.write('<h2>Mes ingresado Julio... ' + mes + '</h2>')
            break;
        case 6:
            document.write('<h2>Mes ingresado Junio... ' + mes + '</h2>')
            break;
        case 5:
            document.write('<h2>Mes ingresado Mayo... ' + mes + '</h2>')
            break;
        case 4:
            document.write('<h2>Mes ingresado Abril... ' + mes + '</h2>')
            break;
        case 3:
            document.write('<h2>Mes ingresado Marzo... ' + mes + '</h2>')
            break;
        case 2:
            document.write('<h2>Mes ingresado Febrero... ' + mes + '</h2>')
            break;
        case 1:
            document.write('<h2>Mes ingresado Enero... ' + mes + '</h2>')
            break;
        case '':
            break;
        default:
            alert('Debe ingresar un numero de mes válido desde el 1 hasta 12');
            goToIndex()
    }
}