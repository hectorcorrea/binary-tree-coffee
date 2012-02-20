(function() {
  var canvasHeight, canvasWidth, centerX, centerY, clearCanvas, drawCircle, drawLabel, drawLine, drawNode, drawTree, offsetY, theCanvas, theContext, tree;

  canvasWidth = 600;

  canvasHeight = 600;

  centerX = 300;

  centerY = 300;

  offsetY = 20;

  tree = null;

  theContext = null;

  theCanvas = null;

  drawLine = function(x1, y1, x2, y2) {
    theContext.beginPath();
    theContext.moveTo(x1, y1);
    theContext.lineTo(x2, y2);
    theContext.fillStyle = "#000000";
    theContext.strokeStyle = "#000000";
    return theContext.stroke();
  };

  drawCircle = function(x, y, radius, fillColor) {
    if (fillColor == null) fillColor = "#0000FF";
    theContext.beginPath();
    theContext.arc(x, y, radius, 0, Math.PI * 2, false);
    theContext.fillStyle = fillColor;
    return theContext.fill();
  };

  drawLabel = function(x, y, text) {
    theContext.font = "10px sans-serif";
    theContext.fillStyle = "#000000";
    return theContext.fillText(text, x, y);
  };

  drawNode = function(v, x1, y1, x2, y2) {
    drawLine(x1, y1, x2, y2);
    drawCircle(x1, y1, 10);
    return drawLabel(x1, y1, v);
  };

  clearCanvas = function() {
    theContext.clearRect(0, 0, canvasWidth, canvasHeight);
    drawLine(0, 0, canvasWidth, 0);
    drawLine(canvasWidth, 0, canvasWidth, canvasHeight);
    drawLine(canvasWidth, canvasHeight, 0, canvasHeight);
    return drawLine(0, canvasHeight, 0, 0);
  };

  drawTree = function() {
    var drawer;
    $('#binaryTreeValues').html(tree.toString());
    clearCanvas();
    drawer = new BinaryTreeDrawer(tree);
    return drawer.draw(centerX, centerY, drawNode);
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
        tree.add(value);
        return drawTree();
      }
    });
    isCanvasSupported = document.createElement("canvas").getContext !== null;
    if (isCanvasSupported) {
      theCanvas = document.getElementById("theCanvas");
      theContext = theCanvas.getContext("2d");
      return drawTree();
    } else {
      return alert("Canvas is not supported in your browser, loser!");
    }
  });

}).call(this);
