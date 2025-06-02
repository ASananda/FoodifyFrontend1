export const calucalteCartTotals=(cartitems,quantity)=>{
    const subtotal=cartitems.reduce((acc,food)=>acc+food.price*quantity[food.id],0);
    const shipping=subtotal===0?0.0:10.00;
    const tax=subtotal*0.1;
    const total=subtotal+shipping+tax;

    return {subtotal,shipping,tax,total};
}

