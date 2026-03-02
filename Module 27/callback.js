// document.getElementById('#btn').addEventListener('click', function(event){

// })

function settleLife(isBCS, marriage, patri){
    if(isBCS){
        marriage(patri);
    }
}
function boloKobul(patri){
    console.log('kobul',patri);
}

settleLife(true,boloKobul, 'nari');
// boloKobul('pori');

