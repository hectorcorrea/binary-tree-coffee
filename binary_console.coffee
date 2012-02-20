# Node.js console demo program for the BinaryTree and BinaryTreeDrawer
{BinaryTree} = require('./binary_tree')
{BinaryTreeDrawer} = require('./binary_tree_drawer')

# Create a binary tree
tree = new BinaryTree(100)
tree.add 20
tree.add 50
tree.add 200
tree.add 1
tree.add 250
console.log tree.toString()

# "Draw" the tree 
# (it outputs each nodes' coordinates to the console)
drawer = new BinaryTreeDrawer(tree)
drawer.draw 100, 100, (v, x1, y1, x2, y2) -> 
	console.log "#{v} (#{x1}, #{y1}) / (#{x2}, #{y2})" 
