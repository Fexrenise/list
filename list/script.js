// class
let data = " ";
class Sirket{
    constructor(sirketAdi, filialAdi){
        this.sirket = sirketAdi,
        this.filial = filialAdi
    };


    Isciler = [
        [],
        [],
        []
    ];
    gonder(){
        data = this.Isciler;

        let ad = document.querySelector('#ad');
        let vezife = document.querySelector('#vezife');
        let maas = document.querySelector('#maas');

        data[0].push(ad.value);
        data[1].push(vezife.value);
        data[2].push(maas.value);

   
    }

    tableQur(not){
        data = this.Isciler;
        let tbl = ` <tr>
        <th scope="col">#</th>
        <th scope="col">Ad</th>
        <th scope="col">Vezife</th>
        <th scope="col">Maas</th>
      </tr>`;

      for(let i = 0; i<data[0].length; i++){
          tbl+= `
          <tr>
          <th scope="row"> ${i+1} </th>
          <td> ${data[0][i]} </td>
          <td>${data[1][i]}</td>
          <td>${data[2][i]}</td>
        </tr>`
      }

      return tbl;

    }

}

// sirketler
const a = new Sirket('Yup Technology', 'Elmler');
const b = new Sirket('Yup Technology', 'Nizami');
const c = new Sirket('Yup Technology', 'Yasamal');


// ekran
document.querySelector('#h1').innerHTML = a.sirket;
let filialP =  document.querySelector('#p');
let arrSelect = document.querySelector('select');
let btnModal = document.querySelector('#btn');

let table = document.querySelector('table');


// filial array
let arr= [];

arr.push(a.filial,b.filial, c.filial);
let arrFilial = "<option selected disabled > Filial Secin </option>";

for(let i = 0; i<arr.length; i++){
arrFilial += `  <option value="${i}"  > ${arr[i]} </option>`
};
arrSelect.innerHTML = arrFilial;


arrSelect.addEventListener('change', ()=>{

    btnModal.classList.remove('disabled');

    if(arrSelect.value == 0){
        filialP.innerHTML = a.filial;
    }else if(arrSelect.value == 1){
        filialP.innerHTML = b.filial;
    }else if(arrSelect.value == 2){
        filialP.innerHTML = c.filial;
    }

})
document.addEventListener('DOMContentLoaded', localGetirAd)
document.addEventListener('DOMContentLoaded', localGetirVezife)
document.addEventListener('DOMContentLoaded', localGetirMaas)


function localYazAd(inpudtanGelenData){
    let arrayNote;
    if(localStorage.getItem('adlar') == null){
        arrayNote = [];
    }else{
        arrayNote = JSON.parse(localStorage.getItem('adlar'));
    }

    arrayNote.push(inpudtanGelenData);
    localStorage.setItem('adlar', JSON.stringify(arrayNote));
}

function localYazAdVezife(inpudtanGelenData){
    let arayNote;
    if(localStorage.getItem('vezifeler') == null){
        arayNote = [];
    }else{
        arayNote = JSON.parse(localStorage.getItem('vezifeler'));
    }

    arayNote.push(inpudtanGelenData);
    localStorage.setItem('vezifeler', JSON.stringify(arayNote));
}
function localYazMaas(inpudtanGelenData){
    let arrrayNote;
    if(localStorage.getItem('maas') == null){
        arrrayNote = [];
    }else{
        arrrayNote = JSON.parse(localStorage.getItem('maas'));
    }

    arrrayNote.push(inpudtanGelenData);
    localStorage.setItem('maas', JSON.stringify(arrrayNote));
}
function localGetirAd(){
    let arrayNote;
    if(localStorage.getItem('adlar') == null){
        arrayNote = [];
    }else{
        arrayNote = JSON.parse(localStorage.getItem('adlar'));
    }


    arrayNote.forEach(element => {
        tableQur(element);
    });
}
function localGetirVezife(){
    let arayNote;
    if(localStorage.getItem('vezifeler') == null){
        arayNote = [];
    }else{
        arayNote = JSON.parse(localStorage.getItem('vezifeler'));
    }


    arayNote.forEach(element => {
        tableQur(element);
    });
}
function localGetirMaas(){
    let arrrayNote;
    if(localStorage.getItem('maas') == null){
        arrrayNote = [];
    }else{
        arrrayNote = JSON.parse(localStorage.getItem('maas'));
    }


    arrrayNote.forEach(element => {
        tableQur(element);
    });
}

function send(){
    let ad = document.querySelector('#ad');
        let vezife = document.querySelector('#vezife');
        let maas = document.querySelector('#maas');
    if(ad.value == "" || vezife.value == "" || maas.value == ""){
        alert("Anketi doldurun");
    }else{
        a.gonder();
    table.innerHTML = a.tableQur();
    localYazMaas(maas.value);
    localYazAd(ad.value);
    localYazAdVezife(vezife.value);
    ad.value = ""
    maas.value = ""
    vezife.value = ""
    }
}
