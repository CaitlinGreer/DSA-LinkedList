class LinkedList {
    constructor() {
        this.head = null;
    }
    
//3 different implementations of insertion operation InsertFirst, insertLast, insert/insertAt(covered in next lesson)

// at the beginning of the list (insertFirst).  Create new node item, Point the head to the new node
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

// at the end of the list (insertLast). 
//Create new node item 
//Check to see if list is empty, if yes, insert new item as the only item in the list
//Start at the beginning of the list and move through until you reach the end
//Set the end node's next pointer to new node
//The new node's next pointer is null(the new node is now the last node on the list)
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

//RETRIEVAL
//Traverse the list, compare value stored in each node with value being searched for
    find(item) {
        let currNode = this.head
        if(!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if(currNode.next === null){
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }

//REMOVAL
// Are you deleting from beginning of the list, end of the list or a node between 2 other nodes
    remove(item) {
        //if the list is empty
        if(!this.head) {
            return null
        }
        //If the node to be remove is head, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next
            return
        }
        //Start at the head
        let currNode = this.head
        //keep track of previous
        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            //Save the previous node
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}