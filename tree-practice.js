const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (root) {
  // if (!root.left) return root.val;
  // return findMinBST(root.left);

  while(root.left) {
    root = root.left;
  }

  return root.val;
}

function findMaxBST (root) {
 // if (!root.right) return root.val;
 // return findMaxBST(root.right);
 while (root.right) {
  root = root.right;
 }
 return root.val;
}

function findMinBT (root, low = Infinity) {
  if (!root) return low;
  if (root.val < low) low = root.val;
  let left = findMinBT(root.left, low);
  let right = findMinBT(root.right, low);
  if (left < right) return left;
  else return right;
}

function findMaxBT (root, high = -Infinity) {
  if (!root) return high;
  if (root.val > high) high = root.val;
  let left = findMaxBT(root.left, high);
  let right = findMaxBT(root.right, high);
  return left > right ? left : right;
}

function getHeight (root, count = -1) {
  if (!root) return count;
  count++;
  let left = getHeight(root.left, count);
  let right = getHeight(root.right, count);
  return left > right ? left : right;
}

function balancedTree (root) {
  let queue = [];
    if (root) queue.push(root);
    while(queue.length) {
    let curr = queue.pop();
    let left = getHeight(curr.left);
    let right = getHeight(curr.right);
    let difference = left - right;
    if (difference > 1 || difference < -1) return false;
    if (curr.left) queue.unshift(curr.left);
    if (curr.right) queue.unshift(curr.right);
  }
  return true;
}

function countNodes (root) {
  if (!root) return 0;
  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return 1 + left + right;
}

function getParentNode (root, target) {
  let callStack = [];
  if (root.val === target) return null;
  if (root) callStack.push(root);

  while(callStack.length) {
    let curr = callStack.pop();
    if (curr.left && curr.left.val === target || curr.right && curr.right.val === target) return curr;
    if (curr.left) callStack.push(curr.left);
    if (curr.right) callStack.push(curr.right);
  }
  return undefined;
}

function inOrderPredecessor (root, target) {
  let arr = inOrderTraversal(root);
  if (arr[0] === target) return null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === target) return arr[i];
  }
}

function inOrderTraversal (currentNode, newArr = []) {
  if (!currentNode) return;
  inOrderTraversal(currentNode.left, newArr);
  newArr.push(currentNode.val)
  inOrderTraversal(currentNode.right, newArr)
  return newArr;
}

function deleteNodeBST(root, target) {
if (root && root.val === target) {
  if (!root.left && !root.right) root = null;
  let newVal = inOrderPredecessor(root, root.val);
  let parent = getParentNode(root, newVal);
  if (parent.left.val === newVal) parent.left = null;
  if (parent.right.val === newVal) parent.right = null;
  root.val = newVal;
  return;
}
  let callStack = [];
    if (root) callStack.push(root);
    while(callStack.length) {
      let curr = callStack.pop();

      if (curr.left && curr.left.val === target) {
        if (!curr.left.left && !curr.left.right) {
          curr.left = null;
          return;
        }
        else if (curr.left.left && !curr.left.right) {
          curr.left = curr.left.left;
          return;
        }
        else if (!curr.left.left && curr.left.right) {
          curr.left = curr.left.right;
          return;
        }
        else if (curr.left.left && curr.left.right) {
          let newVal = inOrderPredecessor(root, curr.left.val);
          let parent = getParentNode(root, newVal);
          if (parent.left.val === newVal) parent.left = null;
          if (parent.right.val === newVal) parent.right = null;
          curr.left.val = newVal;
          return;
        }
      }

      if (curr.right && curr.right.val === target) {
          if (!curr.right.left && !curr.right.right) {
            curr.right = null;
            return;
          }
          if (curr.right.left && !curr.right.right) {
            curr.right = curr.right.left;
            return;
          }
          if (!curr.right.left && curr.right.right) {
            curr.right = curr.right.right;
            return;
          }
          else if (curr.right.left && curr.right.right) {
            let newVal = inOrderPredecessor(root, curr.right.val);
            let parent = getParentNode(root, newVal);
            if (parent.left.val === newVal) parent.left = null;
            if (parent.right.val === newVal) parent.right = null;
            curr.right.val = newVal;
            return;
          }
      }

      if (curr.right) callStack.push(curr.right);
      if (curr.left) callStack.push(curr.left);

   }

  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}


module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
