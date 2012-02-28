(function() {
  var BinaryTree, BinaryTreeDrawer, drawer, tree;

  BinaryTree = require('./binary_tree').BinaryTree;

  BinaryTreeDrawer = require('./binary_tree_drawer').BinaryTreeDrawer;

  tree = new BinaryTree(100);

  tree.add(20);

  tree.add(50);

  tree.add(200);

  tree.add(133);

  tree.add(250);

  console.log("Values = " + (tree.toString()));

  drawer = new BinaryTreeDrawer(tree);

  drawer.draw(100, 100, function(v, x1, y1, x2, y2) {
    return console.log("" + v + " (" + x1 + ", " + y1 + ") / (" + x2 + ", " + y2 + ")");
  });

}).call(this);
