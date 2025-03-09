def binary_search(list, target):
    first = 0
    last = len(list) - 1
    while first <= last:
        middle = ((first + last)//2)
        if list[middle] > target:
            last = middle - 1
        elif list[middle] < target:
            first = middle + 1
        else:
            return middle
    return None


print(binary_search([2,3,8,9,10], 5))