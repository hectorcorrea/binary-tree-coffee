{BinaryNode} = require?("./binary_node") or window

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

  
  walk: (callback) ->
    @walkFromNode(callback, @root)


  walkFromNode: (callback, node) ->
    @walkFromNode(callback, node.left) unless node.left is null
    callback(node)
    @walkFromNode(callback, node.right) unless node.right is null


  toString: ->
    values = []
    @walk (node) -> values.push node.value
    values.join(', ')

root = exports ? window
root.BinaryTree = BinaryTree
