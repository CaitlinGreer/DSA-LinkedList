class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertBefore(newNode, target) {
        if (this.head === null || this.head.value === target) {
            this.insertFirst(newNode)
        }
        else {
            let tempNode = this.head
            let prevNode = this.head
            while ((tempNode.next !== null) && (tempNode.value !== target)) {
                prevNode = tempNode
                tempNode = tempNode.next
            }
            prevNode.next = new _Node(newNode, tempNode)
        }
    }

    insertAfter(newNode, target) {
        if(this.head === null){
            this.insertFirst(newNode)
        }
        else {
            let tempNode = this.head
            while ((tempNode.next !== null) && (tempNode.value !== target)) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(newNode, tempNode.next)
        }
    }

    insertAt(newNode, index) {
        if (this.head === null) {
            this.insertFirst(newNode)
        }
        else {
            let tempNode = this.head
            let prevNode = this.head
            let count = 0
            while ((tempNode.next !== null) && (count < index)) {
                count++
                prevNode = tempNode
                tempNode = tempNode.next
            }
            prevNode.next = new _Node(newNode, tempNode)
        }
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head
        if (!this.head) {
            return null
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    } 

    // reverse list
    reverseList() {
        if (!this.head) {
            return null
        }
        let currNode = this.head
        let prevNode = null
        while (currNode !== null) {
            let nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        }
        this.head = prevNode
    }
}

// display: displays the linked list
function display(list) {
    let currentNode = list.head;
    let output = "";
  
    if (!list.head) {
      return null;
    }
    while (currentNode.next !== null) {
      output += currentNode.value + " ";
      currentNode = currentNode.next;
    }
    output += currentNode.value;
    console.log(output);
  }



//Assignment.  Create singly linked list w/ name SLL and add: Apollo, Boomer, Helo, Husker, Starbuck

function main() {
    let SLL = new LinkedList()

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');

    //Add Tauhida to the list
    SLL.insertLast('Tauhida')
    //Remove Husker from the list
    SLL.remove('Husker')
    //insert Athena before Boomer
    SLL.insertBefore('Athena', 'Boomer')
    //insert Kat in 3rd position
    SLL.insertAt('Kat', [3])
    //remove Tauhida from list
    SLL.remove('Tauhida')
    //reverse list
    SLL.reverseList()

    
    display(SLL)
}

main();