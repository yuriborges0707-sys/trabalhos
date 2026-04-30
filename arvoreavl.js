class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; 
}
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  
  getHeight(node) {
    return node ? node.height : 0;
  }

  
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  
  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  
  rotateRight(y) {
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  
  rotateLeft(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  
  insert(value) {
    this.root = this._insertRecursive(this.root, value);
  }

  _insertRecursive(node, value) {
    
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRecursive(node.right, value);
    } else {
      return node; 
    }

    
    this.updateHeight(node);

    
    let balance = this.getBalanceFactor(node);

    
    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

   
    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    
    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    
    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  postOrder(node = this.root, result = []) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}


var avl = new AVLTree();
var valores = [50, 30, 70, 20, 40, 60, 80];

for (var i = 0; i < valores.length; i++) {
  avl.insert(valores[i]);
}

console.log("Percurso Pós-Ordem (AVL Balanceada):", avl.postOrder());