class BinaryNode
  constructor: (@value) -> 
    @left = null
    @right = null

root = exports ? window
root.BinaryNode = BinaryNode
