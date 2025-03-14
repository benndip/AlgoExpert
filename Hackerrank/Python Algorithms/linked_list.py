class Node:
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s>" % self.data
    
class LinkedList:

    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head == None
    
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next_node
        return count
    
    # [H]->[1]->[2]->[3]->[T]
    # [4]->[H]
    
    def add(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node
    
    def search(self, data):
        current = self.head
        while current:
            if current.data is data:
                return "Found "
            current = current.next_node

        return "Not Found"

    def insert(self, data, index):
        count = 0
        
        if index==0:
            self.add(data)
        if index > 0:
            current = self.head
            new_node = Node(data)
            while current:
                if count < index:
                    count += 1
                    current = current.next_node
                elif count == index:
                    new_node.next_node = current.next_node
                    current.next_node = new_node
                    return "Inserted at %s" % count


    def __repr__(self):
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)

            current = current.next_node
        
        return "-> ".join(nodes)