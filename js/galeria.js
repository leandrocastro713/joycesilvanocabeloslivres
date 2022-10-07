let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";
let tempArq = '';
let ondeInserirCortes = document.querySelector('.cortes');
let ondeInserirPenteados = document.querySelector('.penteados');
let ondeInserirAntesDepois = document.querySelector('.antesdepois')
let novaImg = null;
let linkCortes = document.querySelector('#link-cortes');
let linkPenteados = document.querySelector('#link-penteados');
let linkAntesDepois = document.querySelector('#link-antesdepois');
let loading = document.querySelector('.loading');

linkCortes.addEventListener('click', ()=> {
    ondeInserirCortes.classList.remove('hide');
    ondeInserirPenteados.classList.add('hide');
    ondeInserirAntesDepois.classList.add('hide');
})
linkPenteados.addEventListener('click', ()=> {
    ondeInserirCortes.classList.add('hide');
    ondeInserirPenteados.classList.remove('hide');
    ondeInserirAntesDepois.classList.add('hide');
})
linkAntesDepois.addEventListener('click', ()=> {
    ondeInserirCortes.classList.add('hide');
    ondeInserirPenteados.classList.add('hide');
    ondeInserirAntesDepois.classList.remove('hide');
})

ondeInserirCortes.classList.add('hide');
ondeInserirPenteados.classList.add('hide');
ondeInserirAntesDepois.classList.add('hide');


// ----------------- fotos 1 até 96 --- IMAGENS DOS CORTES
for(let i = 1; i<=96; i++){
    if(i<10){
        tempArq = './galeria/foto00' + i + '.jpeg';
        novaImg = document.createElement('img');
        novaImg.src = tempArq;
        novaImg.className = 'imagem';
        ondeInserirCortes.appendChild(novaImg);
    }
    if(i>=10 && i<=87){
        tempArq = './galeria/foto0' + i + '.jpeg';
        novaImg = document.createElement('img');
        novaImg.src = tempArq;
        novaImg.className = 'imagem';
        ondeInserirCortes.appendChild(novaImg);
    }
}

// ---------- fotos 101 até 127 ---- IMAGENS DOS PENTEADOS
for(let i = 101; i<=127; i++){
    tempArq = './galeria/foto' + i + '.jpeg';
    novaImg = document.createElement('img');
    novaImg.src = tempArq;
    novaImg.className = 'imagem';
    ondeInserirPenteados.appendChild(novaImg);
}

// -----------fotos 201 até 256 ---- IMAGENS DOS ANTESDEPOIS
for(let i = 201; i<=256; i++){
    tempArq = './galeria/foto' + i + '.jpeg';
    novaImg = document.createElement('img');
    novaImg.src = tempArq;
    novaImg.className = 'imagem';
    ondeInserirAntesDepois.appendChild(novaImg);
}

var_imagens = document.getElementsByClassName('imagem')

for(let i = 0; i<var_imagens.length; i++){
    var_imagens[i].addEventListener('click', function(){
        srcVal = var_imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        ondeInserirCortes.classList.add('blur1');
        ondeInserirPenteados.classList.add('blur1');
        ondeInserirAntesDepois.classList.add('blur1');
        modal.classList.toggle('modal_active');
    });
};

btClose.addEventListener('click', function(){
    ondeInserirCortes.classList.remove('blur1');
    ondeInserirPenteados.classList.remove('blur1');
    ondeInserirAntesDepois.classList.remove('blur1');
    modal.setAttribute('visible','none');
});
modal.addEventListener('click',function(){
    ondeInserirCortes.classList.remove('blur1');
    ondeInserirPenteados.classList.remove('blur1');
    ondeInserirAntesDepois.classList.remove('blur1');
    modal.classList.toggle('modal_active');
});

ondeInserirAntesDepois.getElementsByClassName('imagem')[20].onload = () => {
    loading.classList.add('hide');
    loading.classList.add('collapse');
    ondeInserirCortes.classList.remove('hide');
} 
