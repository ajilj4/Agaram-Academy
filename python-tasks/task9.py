nums_list = [2, 5, 8, 1, 9, 3, 7,4646]
# max1=max(nums_list)
# min1 =min(nums_list)
# output=max1-min1
# print(output)
mini=nums_list[0]
maxi=0
for num in nums_list:
    if num<=mini :
        mini=num
    if num>=maxi:
        maxi=num
print(maxi)