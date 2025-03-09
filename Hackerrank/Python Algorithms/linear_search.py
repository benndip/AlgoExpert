def linear_search(list, target):
    for i in range(len(list)): # len(list) runs in constant time
        if list[i] == target:
            return i 
    return None

print(linear_search([2,8,9,10,3], 1))