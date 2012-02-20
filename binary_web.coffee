# Browser demo program for the BinaryTree

canvasWidth = 600
canvasHeight = 600
centerX = 300
centerY = 300
offsetY = 20
tree = null
theContext = null
theCanvas = null

drawLine = (x1, y1, x2, y2) -> 
	theContext.beginPath()
	theContext.moveTo(x1, y1)
	theContext.lineTo(x2, y2)
	theContext.fillStyle = "#000000"
	theContext.strokeStyle = "#000000"
	theContext.stroke()

drawCircle = (x, y, radius, fillColor="#0000FF") ->
	theContext.beginPath()
	theContext.arc(x, y, radius, 0, Math.PI * 2, false)
	theContext.fillStyle = fillColor
	theContext.fill()

drawLabel = (x, y, text) ->
	theContext.font = "10px sans-serif"
	theContext.fillStyle = "#000000"
	theContext.fillText(text, x, y)

drawNode = (v, x1, y1, x2, y2) ->
	drawLine x1, y1, x2, y2
	drawCircle x1, y1, 10
	drawLabel x1, y1, v

clearCanvas = ->
	theContext.clearRect 0, 0, canvasWidth, canvasHeight
	drawLine 0, 0, canvasWidth, 0
	drawLine canvasWidth, 0, canvasWidth, canvasHeight
	drawLine canvasWidth, canvasHeight, 0, canvasHeight
	drawLine 0,canvasHeight, 0, 0

drawTree = ->
	$('#binaryTreeValues').html tree.toString()
	clearCanvas()
	drawer = new BinaryTreeDrawer(tree)
	drawer.draw centerX, centerY, drawNode

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

	# Wire up the form to add more elements to the tree
	$('#submit').click ->
		value = $('#newNode').val().trim()
		unless value is ''
			tree.add value 
			drawTree()

	isCanvasSupported = document.createElement("canvas").getContext isnt null
	if isCanvasSupported  
		theCanvas = document.getElementById("theCanvas")
		theContext = theCanvas.getContext("2d")
		drawTree()
	else
		alert "Canvas is not supported in your browser, loser!"

