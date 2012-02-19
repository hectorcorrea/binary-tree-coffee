(function() {
  var BinaryTree, tree;

  BinaryTree = require('./binary_tree').BinaryTree;

  tree = new BinaryTree(100);

  tree.add(4);

  tree.add(400);

  tree.add(30);

  tree.add(75);

  console.log(tree.toString());

}).call(this);
