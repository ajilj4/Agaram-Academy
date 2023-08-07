amounts=[
        {
            'month': 1,
            'units_consumed': 100,
            'billAmount': 200
        }, 
        {
            'month': 2,
            'units_consumed': 150,
            'billAmount': 300
        }, 
        {
            'month': 3, 
            'units_consumed': 300,
            'billAmount': 1500
        }, 
        {
            'month': 4,
            'units_consumed': 400,
            'billAmount': 2000
        }
]
add=0
bill_total=0
for amount in amounts :
    add = add + amount["units_consumed"]
    bill_total = bill_total + amount["billAmount"]
    
print ("total unit consumed :", add) 
print ("total bill amount :",bill_total)