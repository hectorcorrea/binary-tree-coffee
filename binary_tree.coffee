tree = null

class BinaryNode
	constructor: (@value) -> 
		@left = null
		@right = null

class BinaryTree
	constructor: (rootValue) ->
		@root = new BinaryNode rootValue
		@count = 1
		
	add: (value) ->
		newNode = new BinaryNode value
		node = @root
		loop
			if value >= node.value
				if node.right is null
					node.right = newNode
					break
				else
					node = node.right
			else
				if node.left is null
					node.left = newNode
					break
				else
					node = node.left

		@count++ 
	
	walkFromNode: (node) ->
		@walkFromNode node.left unless node.left is null
		@values.push node.value
		@walkFromNode node.right unless node.right is null

	walk: ->
		@values = []
		@walkFromNode(@root)
		@values

	toString: ->
		@walk().join(', ')

addIt = ->
	value = $('#newNode').val().trim()
	unless value is ''
		tree.add value 
		$('#binaryTreeValues').html tree.toString()
	
$(document).ready ->
	tree = new BinaryTree(100)
	tree.add 1000
	tree.add 50
	tree.add 150
	tree.add 75
	tree.add 200
	tree.add 23
	tree.add 8
	$('#binaryTreeValues').html tree.toString()
	$('#submit').click addIt
	
