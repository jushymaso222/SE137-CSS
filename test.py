import random as rand

low = 200
high = 1000
discount = .1


purchaseD = rand.randint(low, high)
purchaseC = (rand.randint(0,100)) / 100

purchaseSubTotal = purchaseD + purchaseC
purchaseTaxes = purchaseSubTotal * .07

purchaseTotal = (purchaseSubTotal + purchaseTaxes) - ((purchaseSubTotal + purchaseTaxes) * discount)


print(f"SubTotal: ${purchaseSubTotal:.2f}\nTaxes: ${purchaseTaxes:.2f}\nTotal: ${purchaseTotal:.2f}\nDiscount: {discount * 100}")

