veg_pizza=500*2
for_extra_toppings=80
for_softdrinks=45*2
delivery_charge=50
product_gst=(veg_pizza+for_extra_toppings+for_softdrinks+delivery_charge)*.18
total_cost=product_gst+veg_pizza+for_extra_toppings+for_softdrinks+delivery_charge
print(veg_pizza)
print(product_gst)
print(total_cost)




bike_price=150000
delivery_charge=100+(bike_price*.01)
product_gst=(bike_price+delivery_charge)*0.18
total_cost=bike_price+delivery_charge+product_gst
print(total_cost)