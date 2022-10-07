let myDate = '';
let dds = ['Domingo','Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro'];

const datadehoje = new Date();
let day = datadehoje.getDay();
let month = datadehoje.getMonth();
let year = datadehoje.getFullYear();

myDate = dds[day] + ', ' + datadehoje.getDate() + ' de ' + mes[month] + ' de ' + year;
console.log(myDate);

document.getElementById("hoje").innerHTML = myDate;

