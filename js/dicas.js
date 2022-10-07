let zoiudo = document.querySelector('#zoiudo')

zoiudo.addEventListener('mouseout',function(){
  zoiudo.classList.add('voltar')
})
zoiudo.addEventListener('click',function(){
  zoiudo.classList.toggle('zoiudo:hover')
})