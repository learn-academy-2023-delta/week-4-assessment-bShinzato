# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(num)
    if num.even?
        "#{num} is even"
    
    elsif num.odd?
        "#{num} is odd"
    end
end
p even_or_odd(reposts1) # "7 is odd"
p even_or_odd(reposts2) # "42 is even"
p even_or_odd(reposts3) # 221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def voweless (string)
     string.delete "Aaeiou"
end

p voweless(beatles_album1) # "Rbbr Sl"
p voweless(beatles_album2) # "Sgt Pppr"
p voweless(beatles_album3) # "bby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palindrome (str)
    if str == str.downcase.reverse.capitalize
        "#{str} is a palindrome"
    elsif str != str.downcase.reverse.capitalize
        "#{str} is not a paldindrome"
    end
end

p palindrome(palindrome_test_case1) # "Racecar is a palindrome"
p palindrome(palindrome_test_case2) # "LEARN is not a paldindrome"
p palindrome(palindrome_test_case3) # "Rotator is a palindrome"