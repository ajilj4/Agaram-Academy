entry=input("What you need = ")
if entry == "gold":
    monthly_gold_price=[{
                            "month":"january",
                            "gold_rate":3000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }
                            ]
                        },
                        {
                            "month":"febrary",
                            "gold_rate":2000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"march",
                            "gold_rate":2400,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"april",
                            "gold_rate":3000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                            
                        },
                        {
                            "month":"may",
                            "gold_rate":3500,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":78
                                }]
                        },
                        {
                            "month":"june",
                            "gold_rate":3000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"july",
                            "gold_rate":3000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"august",
                            "gold_rate":4000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"september",
                            "gold_rate":2100,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                }]
                        },
                        {
                            "month":"novermber",
                            "gold_rate":3200,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        },
                        {
                            "month":"december",
                            "gold_rate":3000,
                            "jewls_list": [
                                {
                                    "name":"gold",
                                    "making_charge":11,
                                },
                                {
                                    "name":"ring",
                                    "making_charge":9
                                }]
                        }
    ]
    for item in  monthly_gold_price:
        print( "Gold rate is " + str(item["gold_rate"]))
        jewls_list = item["jewls_list"]
        
        for j in jewls_list:
                            # 2000 * 13 / 100
            cal_mak_charge = item["gold_rate"] * j['making_charge'] / 100
            final_charge = item["gold_rate"] + cal_mak_charge
            print( j['name'] + " rate is "+ str(final_charge))
            
                
else:
    print("not available")
    
    