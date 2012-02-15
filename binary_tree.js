(function() {
  var BinaryNode, BinaryTree, addIt, tree;

  tree = null;

  BinaryNode = (function() {

    function BinaryNode(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    return BinaryNode;

  })();

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
      return this.count++;
    };

    BinaryTree.prototype.walkFromNode = function(node) {
      if (node.left !== null) this.walkFromNode(node.left);
      this.values.push(node.value);
      if (node.right !== null) return this.walkFromNode(node.right);
    };

    BinaryTree.prototype.walk = function() {
      this.values = [];
      this.walkFromNode(this.root);
      return this.values;
    };

    BinaryTree.prototype.toString = function() {
      return this.walk().join(', ');
    };

    return BinaryTree;

  })();

  addIt = function() {
    tree.add($('#newNode').val());
    return $('#binaryTreeValues').html(tree.toString());
  };

  $(document).ready(function() {
    tree = new BinaryTree(100);
    tree.add(1000);
    tree.add(50);
    tree.add(150);
    tree.add(75);
    tree.add(200);
    tree.add(23);
    tree.add(8);
    $('#binaryTreeValues').html(tree.toString());
    return $('#submit').click(addIt);
  });

}).call(this);
