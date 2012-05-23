# Node.js console demo program for the BinaryTree and BinaryTreeDrawer
{BinaryTree} = require('./binary_tree')
{BinaryTreeDrawer} = require('./binary_tree_drawer')

# Create a binary tree
tree = new BinaryTree(100)
tree.add 20
tree.add 50
tree.add 200
tree.add 133
tree.add 250
console.log "Values = #{tree.toString()}"

# "Draw" the tree (i.e. output each nodes' coordinates to the console)
console.log "Coordinates"
drawer = new BinaryTreeDrawer(tree)
drawer.draw 100, 100, (v, x1, y1, x2, y2) -> 
  console.log "#{v} (#{x1}, #{y1}) / (#{x2}, #{y2})" 
