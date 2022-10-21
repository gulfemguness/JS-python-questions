# Question 5
# Write a function to check to see if all numbers in list are consecutive numbers. For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. The return should be boolean Type.

#     def is_consecutive(a_list):
#         .....

my_list = [2,3,4,5,6,7]
my_list2 = [1,2,4,5]


def is_consecutive(a_list):
    # my_list2 = [1,2,4,5]
    return sorted(a_list) == my_list(range(min(1),max(1)+1))
    
print(is_consecutive(my_list))

# my_list = [2,3,4,5,6,7]


# def is_consecutive(a_list):

#     for num in my_list:
#         if num(min(1)) and num(max((1)+1)) :
#             return True
#         else:
#             return False

# print(is_consecutive(range(my_list)))
    





# sum of consecutive n numbers 1...n = n * (n+1) /2 


#   def check_is_consecutive(l):
#         maximum = max(l)
#         if sum(l) == maximum * (maximum+1) /2 : 
#              return True
#         return False