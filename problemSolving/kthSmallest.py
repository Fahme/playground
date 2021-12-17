def kthSmallest(arr, k):
    # Sort the given array 
    arr.sort()

    return arr[k - 1]

def main():
    print(kthSmallest([7, 10, 4, 3, 20, 15], 3))

if __name__ == "__main__":
    main()
