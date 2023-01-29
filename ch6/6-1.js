export function printOwing(invoice) {
  
  printBanner();

  let outstanding = calculateOutstanding(invoice);


  //지급 날짜 계산
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //세부사항 출력
  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
function printBanner(){
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}
function calculateOutstanding(invoice){
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
