(function() {
  var canvas, canvasHeight, canvasWidth, clearCanvas, context, drawCircle, drawGrid, drawLabel, drawLine, drawNode, drawTree, lastValueAdded, nodeSize, tree;

  canvasWidth = 900;

  canvasHeight = 300;

  nodeSize = 15;

  tree = null;

  context = null;

  canvas = null;

  lastValueAdded = null;

  drawLine = function(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.fillStyle = "#000000";
    context.strokeStyle = "#000000";
    return context.stroke();
  };

  drawCircle = function(x, y, radius, fillColor) {
    if (fillColor == null) fillColor = "#0000FF";
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = fillColor;
    return context.fill();
  };

  drawLabel = function(x, y, text) {
    context.font = "10px sans-serif";
    context.fillStyle = "#000000";
    return context.fillText(text, x, y);
  };

  clearCanvas = function() {
    canvas.width = canvas.width;
    return drawGrid();
  };

  drawGrid = function() {
    var x, y, _results;
    x = 0;
    while (true) {
      x += 100;
      if (x > canvasWidth) break;
      drawLine(x, 0, x, canvasHeight);
    }
    y = 0;
    _results = [];
    while (true) {
      y += 100;
      if (y > canvasHeight) break;
      _results.push(drawLine(0, y, canvasWidth, y));
    }
    return _results;
  };

  drawNode = function(v, x1, y1, x2, y2) {
    var color, lastNodeColor, nodeColor, rootNodeColor;
    rootNodeColor = "#4CC552";
    lastNodeColor = "#ADDFFF";
    nodeColor = "#FDD017";
    color = nodeColor;
    if (x1 === x2 && y1 === y2) color = rootNodeColor;
    if (v === lastValueAdded) color = lastNodeColor;
    drawLine(x1, y1, x2, y2);
    drawCircle(x1, y1, nodeSize, color);
    return drawLabel(x1, y1, v);
  };

  drawTree = function() {
    var drawer, offsetX, offsetY, startX, startY;
    $('#binaryTreeValues').html(tree.toString());
    clearCanvas();
    offsetX = 30;
    offsetY = 30;
    drawer = new BinaryTreeDrawer(tree, offsetX, offsetY);
    startX = canvasWidth / 2;
    startY = 30;
    return drawer.draw(startX, startY, drawNode);
  };

  $(document).ready(function() {
    var isCanvasSupported;
    tree = new BinaryTree(100);
    tree.add(1000);
    tree.add(50);
    tree.add(150);
    tree.add(75);
    tree.add(200);
    tree.add(24);
    tree.add(8);
    $('#submit').click(function() {
      var value;
      value = $('#newNode').val().trim();
      if (value !== '') {
        lastValueAdded = value;
        tree.add(value);
        drawTree();
        return $('#newNode').val('');
      }
    });
    canvas = document.getElementById("theCanvas");
    isCanvasSupported = canvas !== null;
    if (isCanvasSupported) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context = canvas.getContext("2d");
      return drawTree();
    } else {
      return alert("Canvas is not supported in your browser. You must be using IE, loser!");
    }
  });

}).call(this);
