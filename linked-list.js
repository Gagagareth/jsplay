class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value: value, next: null };
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        let deleted = 0;

        // case when matching the first node in the linked list
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
            deleted++;
        }

        let currNode = this.head;
        if (currNode && currNode.next) {
            while (currNode.next) {
                if (currNode.next.value === value) {
                    currNode.next = currNode.next.next;
                    deleted++;
                } else {
                    currNode = currNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currNode;
        }

        return deleted;
    }

    contains(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }

    getNext(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                return currNode.next;
            }
            currNode = currNode.next;
        }
    }

    getNextValue(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                return currNode.next.value;
            }
            currNode = currNode.next;
        }
    }

    toArray() {
        const elements = [];
        let currNode = this.head;
        while (currNode) {
            elements.push(currNode.value);
            currNode = currNode.next;
        }
        return elements;
    }
}

const ll1 = new LinkedList();
// console.log(ll1);
// console.log('ll1');
ll1.prepend('duplicate');
ll1.prepend('prepended into fourth position');
// ll1.prepend('prepended into third position');
// ll1.prepend('prepended into second position');
// ll1.prepend('prepended into first position');
ll1.prepend('duplicate');
ll1.prepend('duplicate');
ll1.prepend('duplicate');
// ll1.append('appended into fourth position');
// ll1.append('appended into fifth position');
ll1.append('appended into sixth position');
ll1.append('duplicate');
ll1.append('duplicate');
//console.log(ll1.toArray());

// getNext
var gn = ll1.getNext('prepended into fourth position');
console.log('getNext');
console.log(gn);

// Delete
ll1.delete('no duplicate');

// console.log(ll1);
// console.log(ll1.toArray());

// getNextValue
var gnv = ll1.getNextValue('prepended into fourth position');
console.log('getNextValue');
console.log(gnv);

// Contains
// console.log("ll1.contains('appended first')");
// console.log('true? ' + ll1.contains('appended first'));
// console.log("ll1.contains('not there')");
// console.log('true? ' + ll1.contains('not there'));
