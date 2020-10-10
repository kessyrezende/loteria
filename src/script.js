var numSort =[];
var numEsco=[];

function sortearNumeros() {
  numSort=[];
  let sort;
  for (var i = 0; i < 6; i++) {
    do {
      let sort = Math.ceil(Math.random()*60);
      sort=(sort==0)? 1 : sort;

    } while (numSort.includes(sort)));
      numSort.push(sort);
  }

}
function addToList(num,pos) {
  if (num.length==2) {
    if (numEsco.includes(num)) {
      alert("Numero Escolhido Anteriormente. Digite outro numero")

    }else if (parseInt(num)>60) {
        alert("O numero digitado nao pode ser ,aior que 60")
    }else {
      numEsco[pos-1]= num;
    }
  }

}


function verificarAcerto() {
  sortearNumeros();
  let cont =0;
  if (numEsco.length != 6) {
    alert("A quantidade de numeros escolhidos e menor que 6.\n Digite 6 numeros de 01 a 06 com duas casas decimal");

  }else {
    for (var i = 0; i < 6; i++) {
      if (numSort.includes(parseInt(numEsco[i]))) {
        cont++;

      }

    }
    printNumSort();
    document.getElementById('totalAcertos').innerHTML="O total de acertos foi "+ cont++;
  }

}
function printNumSort() {
  document.getElementById('numSort').innerHTML="";
  for (var i = 0; i < numSort.length; i++) {
    let li = document.createElement("li");
    li.append(numSort[i]);
    li.classList.add("result");
    document.getElementById('numSort').append(li);

  }

}
