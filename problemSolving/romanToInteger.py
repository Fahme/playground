def romanToInt(romanNumbers):
    roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    count = 0
    for romanNumber in romanNumbers:
        count += roman[romanNumber]
    return count

def main():
    print(romanToInt('CII'))

if __name__ == "__main__":
    main()
