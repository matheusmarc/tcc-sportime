volei = document.querySelectorAll('[tipo="volei"]')
futsal = document.querySelectorAll('[tipo="futsal"]')
society = document.querySelectorAll('[tipo="society"]')
campo = document.querySelectorAll('[tipo="campo"]')
imb = document.querySelectorAll('[cidade = "imb"]')
grb = document.querySelectorAll('[cidade = "grb"]')
pl = document.querySelectorAll('[cidade = "pl"]')

let societyinp = document.getElementById('societyinp')
let voleiinp = document.getElementById('voleiinp')
let futsalinp = document.getElementById('futsalinp')
let campoinp = document.getElementById('campoinp')

let imbinp = document.getElementById('imbinp')
let grbinp = document.getElementById('grbinp')
let plinp = document.getElementById('plinp')

let filtro = document.getElementsByClassName('filtro')
let fechar = document.getElementsByClassName('fechar')

let clicked = null

var checked = ['society','futsal','volei','campo','imb','pl','grb'];

function societyinput(){
    if(societyinp.checked == true){
        for (i = 0; i < society.length; i++) {
            society[i].style.display="flex"; 
        }
        checked.push("society");
    }
    else{
        for (i = 0; i < society.length; i++) {
            society[i].style.display="none"; 
        }
       
        getindex = checked.indexOf("society");
        
        checked.splice(getindex,1);
       
        }

        getindex = checked.indexOf("imb");
        
        if(getindex == -1){
            for (i = 0; i < imb.length; i++) {
                imb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("grb");
        
        if(getindex == -1){
            for (i = 0; i < grb.length; i++) {
                grb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("pl");
        
        if(getindex == -1){
            for (i = 0; i < pl.length; i++) {
                pl[i].style.display="none"; 
            }
        }
       
    }


function voleiinput(){
    if(voleiinp.checked == true){
        for (i = 0; i < volei.length; i++) {
            volei[i].style.display="flex"; 
        }
        checked.push("volei");
    }
    else{
        for (i = 0; i < volei.length; i++) {
            volei[i].style.display="none";}

            getindex = checked.indexOf("volei");
            checked.splice(getindex,1);
        }
        getindex = checked.indexOf("imb");
        
        if(getindex == -1){
            for (i = 0; i < imb.length; i++) {
                imb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("grb");
        
        if(getindex == -1){
            for (i = 0; i < grb.length; i++) {
                grb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("pl");
        
        if(getindex == -1){
            for (i = 0; i < pl.length; i++) {
                pl[i].style.display="none"; 
            }
        }
       
}

function futsalinput(){
    if(futsalinp.checked == true){
        for (i = 0; i < futsal.length; i++) {
            futsal[i].style.display="flex"; 
        }
        checked.push("futsal");
    }
    else{
        for (i = 0; i < futsal.length; i++) {
            futsal[i].style.display="none"; 
        }

        getindex = checked.indexOf("futsal");
        checked.splice(getindex,1);
        }
        getindex = checked.indexOf("imb");
        
        if(getindex == -1){
            for (i = 0; i < imb.length; i++) {
                imb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("grb");
        
        if(getindex == -1){
            for (i = 0; i < grb.length; i++) {
                grb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("pl");
        
        if(getindex == -1){
            for (i = 0; i < pl.length; i++) {
                pl[i].style.display="none"; 
            }
        }
       
}

function campoinput(){
    if(campoinp.checked == true){
        for (i = 0; i < campo.length; i++) {
            campo[i].style.display="flex"; 
        }
        checked.push("campo");
    }
    else{
        for (i = 0; i < campo.length; i++) {
            campo[i].style.display="none"; 
        }

        getindex = checked.indexOf("campo");
        checked.splice(getindex,1);
        }
        getindex = checked.indexOf("imb");
        
        if(getindex == -1){
            for (i = 0; i < imb.length; i++) {
                imb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("grb");
        
        if(getindex == -1){
            for (i = 0; i < grb.length; i++) {
                grb[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("pl");
        
        if(getindex == -1){
            for (i = 0; i < pl.length; i++) {
                pl[i].style.display="none"; 
            }
        }
       
}

function imbinput(){
    
    if(imbinp.checked == true){
        for (i = 0; i < imb.length; i++) {
            imb[i].style.display="flex"; 
        }
        checked.push("imb");
    }
    else{
        for (i = 0; i < imb.length; i++) {
            imb[i].style.display="none"; 
        }

        getindex = checked.indexOf("imb");
        checked.splice(getindex,1);
        }

    getindex = checked.indexOf("futsal");
    if(getindex == -1){
        for (i = 0; i < futsal.length; i++) {
            futsal[i].style.display="none"; 
        }
    }
    getindex = checked.indexOf("campo");
    if(getindex == -1){
        for (i = 0; i < campo.length; i++) {
            campo[i].style.display="none"; 
        }
    }
    getindex = checked.indexOf("volei");
    if(getindex == -1){
        for (i = 0; i < volei.length; i++) {
            volei[i].style.display="none"; 
        }
    }
    getindex = checked.indexOf("society");
    if(getindex == -1){
        for (i = 0; i < society.length; i++) {
            society[i].style.display="none"; 
            
        }
    }
}
function grbinput(){
    if(grbinp.checked == true){
        for (i = 0; i < grb.length; i++) {
            grb[i].style.display="flex"; 
        }
        checked.push("grb");
    }
    else{
        for (i = 0; i < grb.length; i++) {
            grb[i].style.display="none"; 
        }

        getindex = checked.indexOf("grb");
        checked.splice(getindex,1);
        
        }
        getindex = checked.indexOf("campo");
        
        if(getindex == -1){
            for (i = 0; i < campo.length; i++) {
                campo[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("futsal");
        
        if(getindex == -1){
            for (i = 0; i < futsal.length; i++) {
                futsal[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("volei");
        
        if(getindex == -1){
            for (i = 0; i < volei.length; i++) {
                volei[i].style.display="none"; 
            }
        }
            getindex = checked.indexOf("society");
        
            if(getindex == -1){
                for (i = 0; i < society.length; i++) {
                    society[i].style.display="none"; 
                
            
        }}
        
        
}
function plinput(){
    if(plinp.checked == true){
        for (i = 0; i < pl.length; i++) {
            pl[i].style.display="flex"; 
        }
        checked.push("pl");
    }
    else{
        for (i = 0; i < pl.length; i++) {
            pl[i].style.display="none"; 
        }

        getindex = checked.indexOf("pl");
        checked.splice(getindex,1);
        }
        getindex = checked.indexOf("campo");
        
        if(getindex == -1){
            for (i = 0; i < campo.length; i++) {
                campo[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("futsal");
        
        if(getindex == -1){
            for (i = 0; i < futsal.length; i++) {
                futsal[i].style.display="none"; 
            }
        }
        getindex = checked.indexOf("volei");
        
        if(getindex == -1){
            for (i = 0; i < volei.length; i++) {
                volei[i].style.display="none"; 
            }
        }
            getindex = checked.indexOf("society");
        
            if(getindex == -1){
                for (i = 0; i < society.length; i++) {
                    society[i].style.display="none"; 
                }
            
        }
       
        
}

function mostrarfiltros(){
    $(filtro[0]).slideToggle(300);
}
