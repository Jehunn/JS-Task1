var msg = document.getElementById('message');
msg.style.display='none';

function showBody(){
    var Text = "Yazini gormek isdiyirsiniz?"
    if (confirm(Text)===true) {
        msg.style.display='block'
    }
    else{
        msg.style.display='none';
    }
}
