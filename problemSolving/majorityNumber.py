def majority(arr):
    listOfNumbersWithFreq = {}

    isFound = False
    for currentNumber in arr:
        if currentNumber in listOfNumbersWithFreq:
            listOfNumbersWithFreq[currentNumber] += 1
        else:
            listOfNumbersWithFreq[currentNumber] = 1

    for key in listOfNumbersWithFreq:
        if (listOfNumbersWithFreq[key] > len(arr) / 2):
            isFound = True
            print("Majority found :-",key)
            break
    if not isFound:
        print("No Majority element")
def main():
    majority([1, 1, 2, 1, 3, 5, 1])
if __name__ == "__main__":
    main()

