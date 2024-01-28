class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(value){
        this.length = 1;
        this.head = new Node(value)
        this.tail = this.head;
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    
    //printlist
    printLinkedList(){
        let temp = this.head
        while(temp.next!=null){
            console.log(temp.value)
            temp = temp.next
        }
    }
    //at end
    pop(){
        let temp = this.head
        let pre = this.head
        if(!this.head) return undefined;
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null;
        this.length--
    }
    // at begining
    shift(){
        if(!this.head) return undefined;
        let temp = this.head
        //delete this.head;
        this.head = this.head.next;
        temp.next = null
        this.length--
        if(this.length == 0){
            this.tail = null;
        }
    }
    
    //at any position find
    get(index){
        if(index <0 || index >=this.length){
            return undefined;
        }
        let temp = this.head;
        for(let i = 0; i<index; i++){
            temp = temp.next;
            console.log(temp.value)
        }
        return temp;
    }
    
    //edit linkedlist()
    editLinkedList(index, data){
        if(index <0 || index >= this.length){
            return undefined
        }
        let temp = this.head
        for(let i =0 ; i<index; i++){
            temp = temp.next
        }
        temp.value =  data
        console.log(temp)
        return temp
    }
    //at any position delete
    deleteAtAny(index){
        if(index=0) return this.shift()
        if(index == this.length-1) return this.pop();

        if( index < 0 || index >= this.length){
            return undefined
        }
        const before = this.get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length --;
        return temp;
    }
    insertAtAny(index, value){
        let newNode = new Node(value);
        if(index === 0) return this.unshift(value)
        if(index == this.length ) return this.push(value)
        let temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++
        return true;
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head  = newNode
        }
        this.length++
        return this
    }
}

let ll = new Node(1);
let llr = new Linkedlist()
llr.push(2)
llr.push(3)
llr.push(4)
llr.push(5)
llr.push(6)
llr.push(7)
// llr.pop()
llr.shift()
llr.findNode(2)
llr.editLinkedList(2, 8)
llr.printLinkedList()
console.log(llr)

