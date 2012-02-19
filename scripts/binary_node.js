(function() {
  var BinaryNode, root;

  BinaryNode = (function() {

    function BinaryNode(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    return BinaryNode;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.BinaryNode = BinaryNode;

}).call(this);
