keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
con_dic = {}
for i in keys :
    for j in values:
        con_dic.update({i:j})
        j+1   
print(con_dic)