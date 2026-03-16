class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  
  _hash(key) {
    return key % this.size;
  }

  insert(key, value) {
    const index = this._hash(key);
    const newNode = new Node(key, value);

    if (this.table[index] === null) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];
      while (current.next !== null) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }
      if (current.key === key) {
        current.value = value;
      } else {
        current.next = newNode;
      }
    }
  }

  search(key) {
    const index = this._hash(key);
    let current = this.table[index];
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      let output = `Índice ${i}: `;
      let current = this.table[i];
      while (current !== null) {
        output += `(${current.key}, ${current.value}) -> `;
        current = current.next;
      }
      console.log(output + "null");
    }
  }
}



const ht = new HashTable(5);

ht.insert(1, "A");
ht.insert(6, "B");   
ht.insert(11, "C");  
ht.insert(2, "D");

ht.display();

console.log("Busca chave 6:", ht.search(6));
console.log("Busca chave 11:", ht.search(11));
console.log("Busca chave 3:", ht.search(3)); 

      
      