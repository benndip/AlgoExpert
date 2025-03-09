def recursive_binary_tree(list, target):
    if len(list) == 0:
        return "List is Empty"
    
    middle = len(list)//2

    if list[middle] == target:
        return True
    elif list[middle] < target:
        return recursive_binary_tree(list[middle + 1:], target)
    elif list[middle] > target:
        return recursive_binary_tree(list[:middle], target)
    

print(recursive_binary_tree([2,3,8,9,10], 10))

# Output: True
# Pushing the target value to the right of the list, the function will return True.