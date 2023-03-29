var groupNo = document.getElementById('groupNo');


function selectColor() {
    var groupText=document.getElementById('groupText').value
    var groupCut = document.getElementById('groupText').value.slice(-3);

    if (groupCut[0] == 1) {
        groupNo.innerHTML = groupText;
        groupNo.style.color = 'green';
    }
    else if (groupCut[0] == 2) {
        groupNo.innerHTML = groupText
        groupNo.style.color = 'red';
    }
    else {
        groupNo.innerHTML = groupText
        groupNo.style.color = 'black';
    }
}