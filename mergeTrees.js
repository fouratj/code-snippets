// Given two binary trees and imagine that when you put one of them to cover the other, 
// some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
// then sum node values up as the new value of the merged node. Otherwise, the NOT null node will 
// be used as the node of new tree.

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

function getTree (t1, t2) {
    if (!t1 && !t2) return null;
    
    var t3 = new TreeNode(( (t1 && t1.val) || 0) + ( (t2 && t2.val) || 0));
    t3.left = getTree( (t1 && t1.left) || null, (t2 && t2.left) || null);    
    t3.right = getTree( (t1 && t1.right) || null, (t2 && t2.right) || null);    
    
    return t3;
}

var mergeTrees = function(t1, t2) {
    return getTree(t1, t2);
};


var t1 = {
  val: 1,
  right: { val: 2, right: null, left: null },
  left:  {
     val: 3,
     right: null,
     left: { val: 5, right: null, left: null } 
    } 
}

var t2 = {
  val: 2,
  right: {
     val: 3,
     right:  { val: 7, right: null, left: null },
     left: null 
    },
  left:  {
     val: 1,
     right: { val: 4, right: null, left: null },
     left: null 
    } 
}

console.log(mergeTrees(t1, t2));