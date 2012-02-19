# Browser demo program for the BinaryTree
$(document).ready ->
	# initialize the binary tree with some data
	tree = new BinaryTree(100)
	tree.add 1000
	tree.add 50
	tree.add 150
	tree.add 75
	tree.add 200
	tree.add 24
	tree.add 8
	$('#binaryTreeValues').html tree.toString()
	$('#submit').click ->
		value = $('#newNode').val().trim()
		unless value is ''
			tree.add value 
			$('#binaryTreeValues').html tree.toString()