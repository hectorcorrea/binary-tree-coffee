(function() {
  var BinaryNode, BinaryTree, root;

  BinaryNode = require('./binary_node').BinaryNode;

  BinaryTree = (function() {

    function BinaryTree(rootValue) {
      this.root = new BinaryNode(rootValue);
      this.count = 1;
    }

    BinaryTree.prototype.add = function(value) {
      var newNode, node;
      newNode = new BinaryNode(value);
      node = this.root;
      while (true) {
        if (value >= node.value) {
          if (node.right === null) {
            node.right = newNode;
            break;
          } else {
            node = node.right;
          }
        } else {
          if (node.left === null) {
            node.left = newNode;
            break;
          } else {
            node = node.left;
          }
        }
      }
      return this.count = 3;
    };

    BinaryTree.prototype.walk = function(callback) {
      return this.walkFromNode(callback, this.root);
    };

    BinaryTree.prototype.walkFromNode = function(callback, node) {
      if (node.left !== null) this.walkFromNode(callback, node.left);
      callback(node);
      if (node.right !== null) return this.walkFromNode(callback, node.right);
    };

    BinaryTree.prototype.toString = function() {
      var values;
      values = [];
      this.walk(function(n) {
        return values.push(n.value);
      });
      return values.join(', ');
    };

    return BinaryTree;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.BinaryTree = BinaryTree;

}).call(this);
