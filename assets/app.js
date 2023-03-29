


var answer=document.getElementById('netice');


function Sum(){
    var firstNum=parseFloat(document.getElementById('first_num').value);
    var secondNum=parseFloat(document.getElementById('second_num').value); 
    var cem = firstNum+secondNum;
    answer.innerHTML=cem; 
}
function Ferq(){
    var firstNum=parseFloat(document.getElementById('first_num').value);
    var secondNum=parseFloat(document.getElementById('second_num').value); 
    var cixma = firstNum-secondNum;
    answer.innerHTML=cixma; 
}
function Vurma(){
    var firstNum=parseFloat(document.getElementById('first_num').value);
    var secondNum=parseFloat(document.getElementById('second_num').value); 
    var vurma = firstNum*secondNum;
    answer.innerHTML=vurma; 
}
function Bolme(){
    var firstNum=parseFloat(document.getElementById('first_num').value);
    var secondNum=parseFloat(document.getElementById('second_num').value); 
    var bolme = firstNum/secondNum;
    var net=answer.innerHTML=bolme;
    net.toFixed(2); 
}



