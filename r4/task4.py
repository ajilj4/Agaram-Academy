keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
con_dic = {}
for i in keys :
    for j in values :
        con_dic.update({i:j})
print(con_dic)