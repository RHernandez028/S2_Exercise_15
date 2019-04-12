"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Gabriel Hernandz
   Date: 4/11/19  
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function(){
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();
      
      //calculate the cost of the order
      calcOrder();
});

function calcOrder() {
      var orderForm = document.forms.orderForm;

      //calculate the inital cost of the order
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      //initial cost = model x quantity
      var initalCost = mCost * quantity;
      orderForm.elements.initialCost.value = initalCost;

      //Retrieve the cost of the user's protection plan
      var pCost = document.querySelector('input[name="protection"]:checked').value * quantity;
      orderForm.elements.protectionCost.value = pCost;

      //calculate the order subtotal
      orderForm.elements.subtotal.value = initalCost + pCost;
      
     //calculate sales tax
     var salesTax = 0.05 * (initalCost + pCost);
     orderForm.elements.salesTax.value = salesTax;

     //calculate the cost of the total order
     var totalCost = initalCost + pCost + salesTax;
     orderForm.elements.totalCost.value = totalCost;
}