
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        let newNode = new Node(val)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop(){
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--
    }
    shift(){
        if(!this.head) return false;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            
        }
        this.length--;
        return this;
    }
    get(index){
        let temp = this.head;
        if(index<this.length/2){
            for(let i=0;i<index; i++){
                temp = temp.next;
            }
        }
        else{
            temp = this.tail;
            for(let i = this.length -1; i>index; i--){
                temp = temp.prev;
            }
        }
        return temp;
    }
    
    insert(index, value){
        let newNode = new Node(value);
        let temp = this.head;
        let current;
        let after;
        let before;
        for(let i=0; i<index; i++){
            before = temp
            temp = temp.next;
        };
        current = temp
        for(let i=0; i<index+1; i++){
            after = temp.next;
        };
        before.next = newNode;
        newNode.prev = before;
        newNode.next = current;
        current.prev = newNode;
        //for after position

        current.next = newNode
        newNode.prev = current
        newNode.next = after
        after.prev = newNode
        this.length++
        return this;
    }
    
    remove(index){
        let temp = this.head;
        for(let i=0; i<index; i++){
         temp = temp.next;   
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        this.length--;
        console.log(temp.value)
        return 
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;;
            this.head = newNode;
            
        }
        this.length++
        return this
    }
 
    
}

let dll = new DoublyLinkedList(1);
dll.unshift(345)
dll.push(54)
dll.push(89)
dll.push(45)
dll.push(55)
// dll.insert(1, 127)
// dll.insert(3, 131)
dll.push(85)
dll.remove(2)
let checkget = dll.get(4)
// dll.shift()

console.log(dll)