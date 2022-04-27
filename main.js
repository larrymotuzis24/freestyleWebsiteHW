const simBTN = document.getElementById('simulatorBTN')

simBTN.addEventListener('click',function(){
    randomWinner()
});

function randomWinner(){
    let num = (Math.random() * 100)
    if(num >= 50){
        alert('TEAM ONE WINS!')
    } else {
        alert('TEAM TWO WINS!')
    }
};

