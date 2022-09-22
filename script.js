let m = +prompt("Enter number");
let n = +prompt("Enter number");
if (isNaN(n)) {
  alert("IT IS NOT A NUMBER");
} else if (n == 0 || m == 0) {
  alert("it's zero");
} else {
  let m1 = m;
  let n1 = n;
  while (m1 !== n1) {
    if (m1 > n1) m1 -= n1;
    else n1 -= m1;
  }
  m /= m1;
  n /= n1;
  if (m % n == 0 || n == 1) alert(m);
  else if (~~(m / n) > 0 && m % n > 0) alert(`${~~(m / n)} ${m % n}/${n}`);
  else alert(m + "/" + n);
  alert(m + "/" + n);
}
