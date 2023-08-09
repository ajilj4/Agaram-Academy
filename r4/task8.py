str = "the quick brown fox jumps over the lazy dog the quick brown fox"
string=str.split()
print(string[0])
output={}
# for j in range(len(string)):
#     for i in string:
#         if string[j]==i:
#             output.update({i:string[j]})
for i in string:
    n=0
    if i is not in output:
    output.update({i:})
print("output = ",output)