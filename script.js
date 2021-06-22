let button = document.querySelector('button');

button.addEventListener('click', () => {

  let str = document.querySelector('.contacts');

  let input = document.querySelector('input').value;
  let url = 'https://swapi.dev/api/people/' + input + '/';

  let name = document.querySelector('.name');
  let gender = document.querySelector('.gender');
  let weight = document.querySelector('.weight');
  let height = document.querySelector('.height');
  let planet = document.querySelector('.planet');
  let eyes = document.querySelector('.eyes');

  
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    name.innerText = data.name;
    gender.innerText = data.gender;
    weight.innerText = data.weight;
    height.innerText = data.mass;
    eyes.style.backgroundColor = data.eye_color;
    

    let url2 = data.homeworld;

    fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      planet.innerText = data.name;
    });
    
  });
  document.querySelector('input').value = '';

  let inform = document.querySelector('.inform');
  inform.classList.add('inform--after')




});

  

  


    



