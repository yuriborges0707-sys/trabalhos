class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  
  heapifyDown(i) {
    const size = this.heap.length;
    while (true) {
      let left = this.left(i);
      let right = this.right(i);
      let largest = i;

      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest !== i) {
        [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
        i = largest;
      } else {
        break;
      }
    }
  }

  
  delete(i) {
    const size = this.heap.length;
    if (i >= size) return null; 

    
    [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];


    const removed = this.heap.pop();


    if (i < this.heap.length) {
      this.heapifyDown(i);
    }

    return removed;
  }
}

const h = new MaxHeap();
h.heap = [50, 30, 40, 10, 20, 35];

console.log("Heap inicial:", h.heap);
h.delete(1);
console.log("Heap após remoção:", h.heap);
