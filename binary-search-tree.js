// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor(root = null) {
      this.root = root;
    }

    insert1(val, currentNode = this.root) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      }
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
          return;
        }
         return this.insert(val, currentNode.left);
      }
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
          return
        }
        else return this.insert(val, currentNode.right);
      }
    }

    insert(val) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      }
      let curr = this.root;
      while (curr) {
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = new TreeNode(val);
            return;
          }
          curr = curr.left;
        }
        if (val > curr.val) {
          if (!curr.right) {
            curr.right = new TreeNode(val);
            return;
          }
          curr = curr.right;
        }
      }
    }

    search1(val, curr = this.root) {
      if (!curr) return false;
      if (curr.val === val) return true;
      else if (val < curr.val) return this.search(val, curr.left);
      else return this.search(val, curr.right);
    }

    search(val, curr = this.root) {
      while (curr) {
        if (val === curr.val) return true;
        else if (val < curr.val) curr = curr.left;
        else curr = curr.right;
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return;
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);

    }


    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right)

    }


    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) return;
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      if (this.root) queue.push(this.root);
      while(queue.length) {
        let curr = queue.pop();
        console.log(curr.val);
        if (curr.left) queue.unshift(curr.left);
        if (curr.right) queue.unshift(curr.right);
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let callStack = [];
      if (this.root) callStack.push(this.root);
      while(callStack.length) {
        let curr = callStack.pop();
        console.log(curr.val);
        if (curr.left) callStack.push(curr.left);
        if (curr.right) callStack.push(curr.right);

      }
  }
  }


module.exports = {
    BinarySearchTree,
    TreeNode
}
