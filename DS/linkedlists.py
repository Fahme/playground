class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head =  None

    def show(self):
        current = self.head
        output = ""
        while current is not None:
            output += str(current.data) + " "
            current = current.next
        return output

    def append(self, value):
        if self.head is None:
            self.head = Node(value)
            return
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = Node(value)
    
    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node

    def delete(self, value):
        if self.head is None:
            return

        if self.head.data is value:
            self.head = self.head.next
            return
        
        current = self.head
        while current.next and not None:
            if current.next.data is value:
                current.next = current.next.next
                return
            current = current.next

    def findVal(self, value):
        current = self.head
        while current is not None:
            if current.data is value:
                return current
            current = current.next
        return -1

    def reverse(self):
        current = self.head
        prev = None
        next = None
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev

def main():
    ll = LinkedList()
    ll.append(22)
    ll.append(55)
    ll.append(399)

    ll.reverse()

    print(ll.show())
if __name__ == "__main__":
    main()
