function calcularSalario(){
    const
    hValue = parseFloat(document.getElementById('valor-hora').value),
    hWorked = parseFloat(document.getElementById('horas').value),
    radioButtons = document.querySelectorAll('input[type="radio"]'),
    slots = document.querySelector('.result').querySelectorAll('span')
    ;
    let tDiscount = 0, deductions = parseFloat(document.getElementById('deductions').value),salBruto = 0;

    salBruto = hValue * hWorked;
   
    if(radioButtons[0].checked){
        tDiscount = salBruto*0.06;
    }

    let inss = 0;
    if(salBruto <0){
        return;
    }else if(salBruto<1320){
        inss = salBruto*0.075;
    } else if(salBruto<2571.29){
        inss = salBruto*0.09;
    } else if(salBruto<3856.94){
        inss = salBruto*0.12;
    } else{
        inss = salBruto*0.14;
    }
    
    let irpf = 0, salBrutoInss = salBruto-inss;
    if(salBrutoInss<2112){
        irpf = 0;
    }else if(salBrutoInss < 2826.65){
        irpf = salBrutoInss*0.0075;
    } else if(salBrutoInss<3751.06){
        irpf = salBrutoInss*0.015;
    } else if(salBrutoInss<4664.68){
        irpf = salBrutoInss*0.225;
    } else{
        irpf = salBrutoInss*0.275;
    }

    if(isNaN(deductions)){
        deductions = 0;
    }

    let salLiq = salBruto-inss-irpf-tDiscount-deductions;

    slots[0].innerHTML = salBruto.toFixed(2);
    slots[1].innerHTML = inss.toFixed(2);
    slots[2].innerHTML = irpf.toFixed(2);
    slots[3].innerHTML = tDiscount.toFixed(2);
    slots[4].innerHTML = deductions.toFixed(2);
    slots[5].innerHTML = salLiq.toFixed(2);
}