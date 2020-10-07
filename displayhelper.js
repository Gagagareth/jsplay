if (!l) {
    var l = console.log;
}  

var arrD = [];

function d(any) {
    arrD.push(any);
}    

function onLoadDocument(event) {
    for(let i = 0; i < arrD.length; i++) {
        if (typeof arrD[i] === 'object') {
            if(Array.isArray(arrD[i])) {
                console.log('array', arrD[i]);
            } else {
                console.log('object', arrD[i]);
            }
        } else if(typeof arrD[i] === 'function') {
            console.log(arrD[i].name || 'unnamed function', arrD[i]);
        } else {
            let ul = document.getElementById('xxx');
            let li = document.createElement('li');
            li.innerHTML = '' + arrD[i];
            ul.appendChild(li);
        }
    }
}
window.addEventListener('load', onLoadDocument);

