# __fcc-cash-register__

## Description

This code snippet is an implementation of a function named `checkCashRegister` that can be used to calculate the change to be given to a customer who has paid for an item. The function takes in the price of the item, the amount paid by the customer, and the currency denominations available in the cash register. It returns the status of the transaction (i.e., whether it was successful or not) and the change to be given to the customer.

## How to use

To use this function in your own project, simply copy and paste the code into your JavaScript file. Then, call the function with the appropriate arguments to calculate the change for a transaction. The function should be called with three arguments: the price of the item, the amount paid by the customer, and an array of the currency denominations available in the cash register.

Here is an example of how to use the function:

```
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

```

This will return an object with the status of the transaction and the change to be returned to the customer.

## Functionality

This function calculates the change to be given to a customer based on the price of the item, the amount paid by the customer, and the currency denominations available in the cash register. It returns an object with the status of the transaction and the change to be given to the customer.

The function first calculates the total amount of money available in the cash register. If the total amount is less than the change due, the function returns a status of "INSUFFICIENT_FUNDS" and an empty array for change. If the total amount is equal to the change due, the function returns a status of "CLOSED" and an array of all the currency denominations available in the cash register.

If the total amount is greater than the change due, the function calculates the change to be given to the customer. It loops through each denomination of currency available in the cash register, starting with the highest denomination. For each denomination, the function checks if there is enough currency available to give change. If there is, it subtracts the amount of currency given from the amount available in the cash register and adds it to the change array. If there is not enough currency available, the function moves on to the next denomination.

If the change array is empty or the change due is not fully covered by the currency available, the function returns a status of "INSUFFICIENT_FUNDS" and an empty array for change. Otherwise, the function returns a status of "OPEN" and the change array.


---

## __CHALLENGE PROMPT__
```

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


``` 