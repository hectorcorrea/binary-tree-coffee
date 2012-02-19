(function() {

  $(document).ready(function() {
    var tree;
    tree = new BinaryTree(100);
    tree.add(1000);
    tree.add(50);
    tree.add(150);
    tree.add(75);
    tree.add(200);
    tree.add(24);
    tree.add(8);
    $('#binaryTreeValues').html(tree.toString());
    return $('#submit').click(function() {
      var value;
      value = $('#newNode').val().trim();
      if (value !== '') {
        tree.add(value);
        return $('#binaryTreeValues').html(tree.toString());
      }
    });
  });

}).call(this);
