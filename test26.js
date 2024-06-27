// https://www.codewars.com/kata/52bd4ee7182a1f82720001e3/train/javascript

function findPath(start, end) {
  let path = [];
  let visited = new Set();

  function dfs(current, end) {
    if (current === end) {
      path.push(current);
      return true;
    }

    visited.add(current);
    path.push(current);

    let neighbors = [];
    if (current.north && !visited.has(current.north))
      neighbors.push(current.north);
    if (current.south && !visited.has(current.south))
      neighbors.push(current.south);
    if (current.east && !visited.has(current.east))
      neighbors.push(current.east);
    if (current.west && !visited.has(current.west))
      neighbors.push(current.west);

    for (let neighbor of neighbors) {
      if (dfs(neighbor, end)) {
        return true;
      }
    }

    path.pop();
    return false;
  }

  dfs(start, end);
  return path;
}
