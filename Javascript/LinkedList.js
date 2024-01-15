class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

const a = new Node(2)
const b = new Node(3)
const c = new Node(4)
const d = new Node(5)

a.next = b
b.next = c
c.next = d

// Iterative method
// const printLinkedList = (head) => {
//     let current = head
//     while(current != null){ //wrong to use current.next here
//         console.log(current.data);
//         current = current.next;
//     }
// }

// Recuresive method
const printLinkedList = (head) => {
    if(head == null ) return
    console.log(head.data);
    printLinkedList(head.next)
}

printLinkedList(a)