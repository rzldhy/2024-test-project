// https://www.codewars.com/kata/59669eba1b229e32a300001a/train/javascripthttps://www.codewars.com/kata/59669eba1b229e32a300001a/train/javascript

function wire_DHD_SG1(existingWires) {
  // Parse the input into a 2D array
  function parseInput(s) {
    return s
      .trim()
      .split("\n")
      .map((line) => line.split(""));
  }

  // Find the start and goal positions
  function findPositions(grid) {
    let start = null;
    let goal = null;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === "S") {
          start = [r, c];
        } else if (grid[r][c] === "G") {
          goal = [r, c];
        }
      }
    }
    return [start, goal];
  }

  // Calculate Euclidean distance
  function euclideanDist(point1, point2) {
    return Math.sqrt(
      (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2
    );
  }

  // Get the neighbors of a point
  function neighbors(point, grid) {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    const result = [];
    for (let [dr, dc] of directions) {
      let nr = point[0] + dr,
        nc = point[1] + dc;
      if (
        nr >= 0 &&
        nr < grid.length &&
        nc >= 0 &&
        nc < grid[0].length &&
        (grid[nr][nc] === "." || grid[nr][nc] === "G")
      ) {
        result.push([nr, nc]);
      }
    }
    return result;
  }

  // Reconstruct the path
  function reconstructPath(cameFrom, current) {
    const path = [];
    while (current in cameFrom) {
      current = cameFrom[current];
      if (current) {
        path.push(current);
      }
    }
    path.reverse();
    return path;
  }

  // A* algorithm
  function aStar(start, goal, grid) {
    const openSet = new MinHeap();
    openSet.push([0, start]);
    const cameFrom = {};
    const gScore = {};
    const fScore = {};

    gScore[start] = 0;
    fScore[start] = euclideanDist(start, goal);

    while (!openSet.isEmpty()) {
      const [_, current] = openSet.pop();

      if (arraysEqual(current, goal)) {
        return reconstructPath(cameFrom, current);
      }

      for (let neighbor of neighbors(current, grid)) {
        const tentativeGScore =
          gScore[current] + euclideanDist(current, neighbor);

        if (!(neighbor in gScore) || tentativeGScore < gScore[neighbor]) {
          cameFrom[neighbor] = current;
          gScore[neighbor] = tentativeGScore;
          fScore[neighbor] = tentativeGScore + euclideanDist(neighbor, goal);
          openSet.push([fScore[neighbor], neighbor]);
        }
      }
    }
    return null;
  }

  function arraysEqual(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  }

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    push(node) {
      this.heap.push(node);
      this.bubbleUp();
    }

    pop() {
      if (this.size() === 1) {
        return this.heap.pop();
      }
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }

    isEmpty() {
      return this.heap.length === 0;
    }

    size() {
      return this.heap.length;
    }

    bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element[0] >= parent[0]) break;
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex;
      }
    }

    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild[0] < element[0]) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild[0] < element[0]) ||
            (swap !== null && rightChild[0] < leftChild[0])
          ) {
            swap = rightChildIndex;
          }
        }

        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }

  const grid = parseInput(existingWires);
  const [start, goal] = findPositions(grid);
  if (!start || !goal) {
    return "Oh for crying out loud...";
  }

  const path = aStar(start, goal, grid);
  if (path === null) {
    return "Oh for crying out loud...";
  }

  for (let [r, c] of path) {
    if (grid[r][c] !== "S" && grid[r][c] !== "G") {
      grid[r][c] = "P";
    }
  }

  return grid.map((row) => row.join("")).join("\n");
}
