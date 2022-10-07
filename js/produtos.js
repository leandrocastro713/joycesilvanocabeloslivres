function filtro(vFiltro){
  // console.log(vFiltro)
  var divProduto = document.querySelectorAll('.produto');
  var qtdDivs = divProduto.length-1;
  var vMarcas = document.querySelectorAll('.marca');
  var qtdMarcas = vMarcas.length-1;

  // console.log('total de divs produto.lenght ' + divProduto.length)
  // console.log('total de marcas '+ qtdMarcas)

  for(let i=0; i<=qtdDivs ; i++){
    // console.log(i);
    // console.log(divProduto[i].className);
    if(divProduto[i].className.indexOf(vFiltro)!=-1){
      // console.log('achou '+vFiltro);
      divProduto[i].classList.remove('hide')
      // console.log(divProduto[i].className);
      } else{
      // console.log('não achou '+vFiltro)
      divProduto[i].classList.add('hide');
      // console.log(divProduto[i].className);
    }
  }
  for(let i=0; i<=qtdMarcas; i++){
    // console.log(i)
    // console.log(vMarcas[i].id)
    if(vMarcas[i].id.indexOf(vFiltro)!=-1 || vMarcas[i].id.indexOf('todos')!=-1){
      // console.log(vMarcas[i].id + 'dentro do if')
      vMarcas[i].classList.remove('hide')
      // console.log (vMarcas[i].classList)
    } else {
      // console.log('dentro do else ' + vMarcas[i].id)
      vMarcas[i].classList.add('hide')
      // console.log (vMarcas[i].classList)
    }
  }
}

function filtro_todos(){
  var divProduto = document.querySelectorAll('.produto');
  var vTodos = document.querySelector('#todos')
  var vMarcas = document.querySelectorAll('.marca')
  var qtdDivs = divProduto.length-1;
  for(i=0; i<vMarcas.length; i++){
    vMarcas[i].classList.remove('hide')
  }
  vTodos.classList.add('hide')
  for(let i=0; i<=qtdDivs; i++){
      divProduto[i].classList.remove('hide');
  }
}
