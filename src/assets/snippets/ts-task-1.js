function solvePq(p, q) {
  var d = (p * p) / 4 - q;
  if (d >= 0) {
    var x1 = -p / 2 + Math.sqrt(d);
    var x2 = +p / 2 + Math.sqrt(d);
    return `Die Lösung ist ${x1}, ${x2}.`;
  } else {
    return 'Keine Nullstellen';
  }
}
