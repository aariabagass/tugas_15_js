var pythagoras = () => {
  ab = 8;
  bc = 6;
  x = Math.pow(ab, 2) + Math.pow(bc, 2);
  console.log('Nilai AB : ' + ab);
  console.log('Nilai BC : ' + bc);
  console.log('Panjang sisi AC pada segitiga siku-siku tersebut adalah : ' + Math.sqrt(x) + ' cm');
  return x;
}
pythagoras();