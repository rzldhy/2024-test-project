//www.codewars.com/kata/582957651c1f59b99b0000aa/train/javascript

function find4Number(n) {
  const limit = Math.floor(Math.sqrt(n));
  const squares = Array.from({ length: limit + 1 }, (_, i) => i * i);
 
  let best = null;

  for (let a = limit; a > 0; a--) {
    const remA = n - squares[a];
    if (remA < 0) continue;

    const limitB = Math.min(a, Math.floor(Math.sqrt(remA)));
    for (let b = limitB; b > 0; b--) {
      const remB = remA - squares[b];
      if (remB < 0) continue;

      // two-pointer search for c,d such that c^2 + d^2 = remB
      let c = Math.min(b, Math.floor(Math.sqrt(remB)));
      let d = 1;

      while (c >= d) {
        const sum = squares[c] + squares[d];
        if (sum === remB) {
          const candidate = [a, b, c, d];
          if (
            !best ||
            candidate[0] > best[0] ||
            (candidate[0] === best[0] && candidate[1] > best[1]) ||
            (candidate[0] === best[0] &&
              candidate[1] === best[1] &&
              candidate[2] > best[2])
          ) {
            best = candidate;
          }
          break; // found valid c,d for this b, no need smaller c
        } else if (sum > remB) {
          c--;
        } else {
          d++;
        }
      }
    }
    if (best) return best; // since we go from largest a down, first found is optimal
  }
  return best;
}

// ✅ Tests
console.log(find4Number(16)); // [2,2,2,2]
console.log(find4Number(110)); // [9,4,3,2]
console.log(find4Number(211)); // [13,5,4,1]
console.log(find4Number(99)); // [9,4,1,1]
