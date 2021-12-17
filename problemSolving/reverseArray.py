def reverse(arr):
    start = 0
    end = len(arr) - 1

    print(len(arr) - 1)

    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

    return arr

def main():
    print(reverse([1, 2, 3, 4, 5, 6]))

if __name__ == "__main__":
    main()
