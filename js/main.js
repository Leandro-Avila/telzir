function taxSelection (){
    let origin = document.getElementById("origin").value;
    let destination = document.getElementById("destination").value;
    let plan = document.getElementById("plan").value;
    let time = document.getElementById("time").value;
    let tax = 0;
    if (origin == 11 && destination == 16) {
        tax = 1.90;
    }
    else if(origin == 16 && destination == 11){
        tax = 2.90;
    }
    else if(origin == 11 && destination == 17){
        tax = 1.70;
    }
    else if(origin == 17 && destination == 11){
        tax = 2.70;
    }
    else if(origin == 11 && destination == 18){
        tax = 0.90;
    }
    else if(origin == 18 && destination == 11){
        tax = 1.90;
    }
    else{
        alert("Não há dados para esta conexão de origem e destino.");
    }
    if(tax != 0){
        taxCalculation(origin, destination, time, plan, tax);
    }
}

function taxCalculation (origin, destination, time, plan, tax){
    let minutesTotal;
    if(+time > +plan){
        minutesTotal = time - plan;
    }else{
        minutesTotal = 0;
    }
    let withFaleMais = minutesTotal * tax;
    withFaleMais += withFaleMais * 0.1;
    let withoutFaleMais = time * tax;
    document.getElementById("chosenOrigin").innerHTML = origin;
    document.getElementById("chosenDestination").innerHTML = destination;
    document.getElementById("chosenTime").innerHTML = time;
    document.getElementById("chosenPlan").innerHTML = plan;
    document.getElementById("withFaleMais").innerHTML = "R$" + withFaleMais.toFixed(2);
    document.getElementById("withoutFaleMais").innerHTML = "R$" + withoutFaleMais.toFixed(2);
}