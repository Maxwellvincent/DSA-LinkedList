//Create a Linked List Class
class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(value){
        this.head = new _Node(value,this.head)
    }

    insertLast(value){
        if(this.head === null) {
            this.insertFirst(value);
        }
        let tempNode = this.head;
        while(tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(value,null);
    }

    insertAt(value, index){

    }

    remove(value){
        //check to see if the list is empty
        if(!this.head) {
            return null;
        }
        // if the node to be removed is the head, make
        if(this.head.value === item){
            this.head = this.head.next;
            return; 
        }
        //Start at the head
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== value)){
            //Save the previous node
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if(currentNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currentNode.next;
    }
    
    get(value){
        //Start at the Head
        let currentNode = this.head;
        //Check to see if list is empty?
        if(!this.head){
            return null;
        }
        //check for the item
        while(currentNode.value !== value){
            //Return null if its the end of the list, and the item is not on the list.
            if(currentNode.next === null){
                return null;
            } else {
                //Otherwise, keep looking
                currentNode = currentNode.next;
            }
        }
        //return the node that is found. 
        return currentNode
    }
}

// Create a Singly Linked List

function main(){
    const SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('HELO');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertFirst('Tauhida');

    SLL.remove('Husker');

    SLL.remove('Tauhida');
}


//Mystery program
//Allows us to point to the next item within a list, to check for the next item. O(n^2)

//Reverse a List

//3rd from the end

//Middle of a list

//Cycle in a list

//Sorting a list