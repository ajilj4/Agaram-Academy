#Calculate GST on Gold

def cal_gst(amount):
    return amount*.03

gold_rate = 18546545

making_charge = 1000

gst = cal_gst(gold_rate+making_charge)

total = gold_rate + making_charge + gst

print(total)