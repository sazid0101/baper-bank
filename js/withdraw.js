document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    const withdrawTotalAmount=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalAmount.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalAmount.innerText=currentWithdrawTotal;
    withdrawField.value='';

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    const currentBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText=currentBalanceTotal;
})