class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = this.root;
    let lastNode;

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    while (node) {
      lastNode = node;
      node = (node.val > val) ? node.left : node.right;
    }

    if (lastNode.val > val) {
      lastNode.left = new Node(val);
    } else {
      lastNode.right = new Node(val);
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.#insertNode(this.root, val);
    return this;
  }

  #insertNode (node, val) {
    if (node === null) return new Node(val);

    if (node.val > val) {
      node.left = this.#insertNode(node.left, val);
    } else {
      node.right = this.#insertNode(node.right, val)
    }

    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;

    if (node === null) return undefined;

    while (node) {
      if (node.val === val) return node;
      node = (node.val > val) ? node.left : node.right;
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.#findNode(this.root, val);
  }

  #findNode (node, val) {
    if (node === null) return undefined;
    if (node.val === val) return node;

    if (node.val > val) {
      return this.#findNode(node.left, val);
    } else {
      return this.#findNode(node.right, val)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    return this.#dfsPre(this.root, []);
  }

  #dfsPre(node, visited) {
    if (node === null) return;

    visited.push(node.val);

    this.#dfsPre(node.left, visited);
    this.#dfsPre(node.right, visited);

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    return this.#dfsIn(this.root, []);
  }

  #dfsIn(node, visited) {
    if (node === null) return;

    this.#dfsIn(node.left, visited);
    visited.push(node.val);
    this.#dfsIn(node.right, visited);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    return this.#dfsPost(this.root, []);
  }

  #dfsPost(node, visited) {
    if (node === null) return;

    this.#dfsPost(node.left, visited);
    this.#dfsPost(node.right, visited);
    visited.push(node.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    if (this.root === null) return;
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      visited.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
