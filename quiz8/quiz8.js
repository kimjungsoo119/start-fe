const $btn = document.getElementById('btn');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $value = document.getElementById('value');

let randomNum = 0;

$btn.addEventListener('click', () => {
  const min = parseInt($min.value, 10);
  const max = parseInt($max.value, 10);
  const random = Math.floor(Math.random() * (max - min)) + min;
 if (Number.isNaN(random)) return;

  $btn.disabled = true;

  const count = random - 40;
  
    $value.innerHTML = count + "";
  }, 20);
$btn.addEventListener('click', random);