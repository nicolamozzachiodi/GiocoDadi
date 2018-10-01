document.addEventListener("DOMContentLoaded", function() {
    var vittoriaConsecutivaA = 0,
    vittoriaConsecutivaB = 0,
    tiroA = 0,
    tiroB = 0,
    valoreA = 0,
    valoreB = 0;
    var res = document.querySelector("#res");
    var finale = document.getElementById("punteggio")
    
    var playerA = document.querySelector ("#dadoA button");
    var v1 = 0;
    var v2 = 0;    
    
    playerA.addEventListener("click", function () {
        this.parentElement.classList.add("muovi");
        var tiro = 0;
        if (tiroA <= tiroB) {
            tiroA++;
            var x = document.querySelector("[name='facceDadoA']:checked").value;
            valoreA = Math.round(Math.random() * (x - 1) + 1);
            checkStatus();
            res.innerHTML = valoreA + ' : ' + valoreB;
        }
        
    }, false);
    
    var playerB = document.querySelector ("#dadoB button");
    playerB.addEventListener("click", function () {
        this.parentElement.classList.add("muovi");
        var tiro = 0;
        if (tiroB <= tiroA) {
            tiroB++;
            var y = document.querySelector("[name='facceDadoB']:checked").value;
            valoreB = Math.round(Math.random() * (y - 1) + 1);
            checkStatus();
            res.innerHTML = valoreA + ' : ' + valoreB;
        }
        
        finale.innerHTML = vittoriaConsecutivaA + " : " + vittoriaConsecutivaB;
    }, false);
    
    function checkStatus() {
        if (tiroA == tiroB) {
            console.log(valoreA);
            console.log(valoreB);
            if (valoreA > valoreB) {
                console.log("Ha vinto A");
                vittoriaConsecutivaA ++;
            }
            else if (valoreA < valoreB) {
                console.log("Ha vinto B");
                vittoriaConsecutivaB ++;
            }
            else if (valoreA == valoreB){
                console.log("Non ha vinto nessuno"); 
            }
            else if (tiroA > tiroB) {
                res.innerHTML = valoreA + ' : ' + 0;
            } else if (tiroB > tiroA) {
                res.innerHTML = 0 + ' : ' + valoreB;
            }
        }
            
            var elements = document.getElementsByClassName("box");
            for (var index = 0; index < elements.length; index++) {
                const element = elements[index];
                setTimeout(function() {
                    element.classList.remove("muovi");            
                }, 1000);
            }
        }
});