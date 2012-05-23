# Browser demo program for the BinaryTree and BinaryTreeDrawer classes.

canvasWidth = 900
canvasHeight = 300
nodeSize = 15
tree = null
context = null
canvas = null
lastValueAdded = null


drawLine = (x1, y1, x2, y2) -> 
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.fillStyle = "#000000"
  context.strokeStyle = "#000000"
  context.stroke()


drawCircle = (x, y, radius, fillColor="#0000FF") ->
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2, false)
  context.fillStyle = fillColor
  context.fill()


drawLabel = (x, y, text) ->
  context.font = "10px sans-serif"
  context.fillStyle = "#000000"
  context.fillText(text, x, y)


clearCanvas = ->
  canvas.width = canvas.width 
  drawGrid()


drawGrid = ->
  # vertical lines
  x = 0
  loop
    x += 100
    break if x > canvasWidth 
    drawLine x, 0, x, canvasHeight 

  # horizontal lines
  y = 0
  loop
    y += 100
    break if y > canvasHeight
    drawLine 0, y, canvasWidth, y


drawNode = (v, x1, y1, x2, y2) ->

  rootNodeColor = "#4CC552" # green
  lastNodeColor = "#ADDFFF" # blue
  nodeColor = "#FDD017"     # yellow

  color = nodeColor
  color = rootNodeColor if x1 is x2 and y1 is y2
  color = lastNodeColor if v is lastValueAdded
  
  drawLine x1, y1, x2, y2
  drawCircle x1, y1, nodeSize, color
  drawLabel x1, y1, v


drawTree = ->
  $('#binaryTreeValues').html tree.toString()
  clearCanvas()

  offsetX = 30
  offsetY = 30
  drawer = new BinaryTreeDrawer tree, offsetX, offsetY

  startX = canvasWidth / 2
  startY = 30
  drawer.draw startX, startY, drawNode


$ ->
  # initialize the binary tree with some data..
  tree = new BinaryTree 100
  tree.add 1000
  tree.add 50
  tree.add 150
  tree.add 75
  tree.add 200
  tree.add 24
  tree.add 8

  # Wire up the form to add more elements to the tree
  $('#submit').click (e) ->
    e.preventDefault()
    value = $('#newNode').val().trim()
    $('#newNode').val('')
    unless value is ''
      lastValueAdded = value
      tree.add value 
      drawTree()
      return

  canvas = document.getElementById("theCanvas") 
  isCanvasSupported = canvas isnt null
  if isCanvasSupported  
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    context = canvas.getContext("2d")
    drawTree()
  else
    alert "Canvas is not supported in your browser. You must be using IE, loser!"

  return
