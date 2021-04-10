function findPercentage(nQ, nS) {
  var m0 = 0,
    m1 = 0,
    m2 = 0,
    m3 = 0;
  if (nQ <= 8) {
    m0 = nQ;
  } else if (nQ > 8 && nQ <= 16) {
    m0 = 8;
    m1 = nQ - 8;
  } else if (nQ > 16 && nQ <= 24) {
    m0 = 8;
    m1 = 8;
    m2 = nQ - 16;
  } else {
    m0 = 8;
    m1 = 8;
    m2 = 8;
    m3 = nQ - 24;
  }
  //document.write(m0 + " " +m1 + " " +m2 + " " +m3);
  //document.write("</br>")
  var n0 = 0,
    n1 = 0,
    n2 = 0,
    n3 = 0;

  if (nS <= 4) {
    n0 = nS;
  } else if (nS > 4 && nS <= 8) {
    n0 = 4;
    n1 = nS - 4;
  } else if (nS > 8 && nS <= 12) {
    n0 = 4;
    n1 = 4;
    n2 = nS - 8;
  } else {
    n0 = 4;
    n1 = 4;
    n2 = 4;
    n3 = nS - 12;
  }
  //document.write(n0 + " " +n1 + " " +n2 + " " +n3);
  //document.write("</br>")
  mile_1 = m0 * 6.25;
  mile_2 = m1 * 6.25;
  mile_3 = m2 * 6.25;
  mile_4 = m3 * 8.33;

  finalMile_1 = Math.round(mile_1 + n0 * 12.5);
  finalMile_2 = Math.round(mile_2 + n1 * 12.5);
  finalMile_3 = Math.round(mile_3 + n2 * 12.5);
  finalMile_4 = Math.round(mile_4 + n3 * 16.7);

  var results = [];
  results.push(finalMile_1);
  results.push(finalMile_2);
  results.push(finalMile_3);
  results.push(finalMile_4);
  return results;

  //document.write(finalMile_1 +"%" + "</br>");
  //document.write(finalMile_2 +"%" + "</br>");
  //document.write(finalMile_3 +"%" + "</br>");
  //document.write(finalMile_4 +"%" + "</br>");
}

document.write(findPercentage(15, 15));
