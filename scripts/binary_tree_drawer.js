(function() {
  var BinaryTree, BinaryTreeDrawer, root;

  BinaryTree = ((typeof require === "function" ? require("./binary_tree") : void 0) || window).BinaryTree;

  BinaryTreeDrawer = (function() {

    function BinaryTreeDrawer(tree, distanceX, distanceY) {
      this.tree = tree;
      this.distanceX = distanceX != null ? distanceX : 20;
      this.distanceY = distanceY != null ? distanceY : 20;
    }

    BinaryTreeDrawer.prototype.draw = function(x, y, callback) {
      return this.drawNode(this.tree.root, x, y, callback);
    };

    BinaryTreeDrawer.prototype.drawNode = function(node, x, y, callback) {
      if (node === null) return;
      callback(node.value, x, y, x, y);
      if (node.left !== null) this.drawLeft(node.left, x, y, callback);
      if (node.right !== null) return this.drawRight(node.right, x, y, callback);
    };

    BinaryTreeDrawer.prototype.drawLeft = function(node, parentX, parentY, callback) {
      var count, x, y;
      if (node.right === null) {
        count = 0;
      } else {
        count = 1 + this.childrenCount(node.right);
      }
      x = parentX - this.distanceX - (count * this.distanceX);
      y = parentY + this.distanceY;
      callback(node.value, x, y, parentX, parentY);
      if (node.left !== null) this.drawLeft(node.left, x, y, callback);
      if (node.right !== null) return this.drawRight(node.right, x, y, callback);
    };

    BinaryTreeDrawer.prototype.drawRight = function(node, parentX, parentY, callback) {
      var count, x, y;
      if (node.left === null) {
        count = 0;
      } else {
        count = 1 + this.childrenCount(node.left);
      }
      x = parentX + this.distanceX + (count * this.distanceX);
      y = parentY + this.distanceY;
      callback(node.value, x, y, parentX, parentY);
      if (node.left !== null) this.drawLeft(node.left, x, y, callback);
      if (node.right !== null) return this.drawRight(node.right, x, y, callback);
    };

    BinaryTreeDrawer.prototype.childrenCount = function(node) {
      var count;
      count = 0;
      if (node.left !== null) count += 1 + this.childrenCount(node.left);
      if (node.right !== null) count += 1 + this.childrenCount(node.right);
      return count;
    };

    return BinaryTreeDrawer;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.BinaryTreeDrawer = BinaryTreeDrawer;

}).call(this);
