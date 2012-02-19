{BinaryTree} = require?("./binary_tree") or window

class BinaryTreeDrawer

	constructor: (@tree, @distanceX=20, @distanceY=20) ->

	
	# Draws a binary tree (always starts at the root)
	draw: (x, y, callback) ->
		@drawNode @tree.root, x, y, callback


	# Draws a binary tree starting at the specified node
	drawNode: (node, x, y, callback) ->
		return if node is null
		callback node.value, x, y, x, y
		@drawLeft node.left, x, y, callback unless node.left is null
		@drawRight node.right, x, y, callback unless node.right is null


	drawLeft: (node, parentX, parentY, callback) ->
 		if node.right is null
 			count = 0
 		else
 			count = 1 + @childrenCount node.right

 		x = parentX - @distanceX - (count * @distanceX)
 		y = parentY + @distanceY
 		callback(node.value, x, y, parentX, parentY)

 		@drawLeft node.left, x, y, callback unless node.left is null
 		@drawRight node.right, x, y, callback unless node.right is null


	drawRight: (node, parentX, parentY, callback) ->
 		if node.left is null
 			count = 0
 		else
 			count = 1 + @childrenCount node.left

 		x = parentX + @distanceX + (count * @distanceX)
 		y = parentY + @distanceY
 		callback node.value, x, y, parentX, parentY

 		@drawLeft node.left, x, y, callback unless node.left is null
 		@drawRight node.right, x, y, callback unless node.right is null


 	childrenCount: (node) ->
 		count = 0
 		count += 1 + @childrenCount node.left unless node.left is null
 		count += 1 + @childrenCount node.right unless node.right is null
	 	count


root = exports ? window
root.BinaryTreeDrawer = BinaryTreeDrawer
