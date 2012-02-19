# Node.js console demo program for the BinaryTree
{BinaryTree} = require('./binary_tree')

tree = new BinaryTree(100)
tree.add(4)
tree.add(400)
tree.add(30)
tree.add(75)
console.log tree.toString()

