async function getFaktaKucing() {
  let res = await fetch('https://catfact.ninja/fact');
  let fakta = await res.json();
  return fakta;
}

async function tambahHTML() {
  let fakta = await getFaktaKucing();

  let divBaru = document.createElement('div');
  divBaru.innerHTML = fakta.fact;

  let faktaKucing = document.getElementById('faktaKucing');
  faktaKucing.appendChild(divBaru);
}

tambahHTML();
