console.log("   Первое задание:\n\n");
document.write("   Первое задание: <br><br>");
let num_1 = 0;
let num_2 = 0;
for (let i = 0; i <= 1000; i++){
  if (i % 3 == 0){
    num_1 += i;
  }
}
console.log("Сумма чисел кратных 3 в диапазоне 1 - 1000 равна: " + num_1);
document.write("Сумма чисел кратных 3 в диапазоне 1 - 1000 равна: " + num_1, "<br>");
for (let i = 0; i <= 1000; i++){
  if (i % 5 == 0){
    num_2 += i;
  }
}
console.log("Сумма чисел кратных 5 в диапазоне 1 - 1000 равна: ","+" + num_2, "\n\n\n\n");
document.write("Сумма чисел кратных 5 в диапазоне 1 - 1000 равна: ","+" + num_2, "<br><br><br><br>");

console.log("   Второе задание:\n\n")
document.write("   Второе задание:<br><br>")

var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
let num = 1/0;
x.forEach(function(item, i, array){
  item.forEach((item, i, array) => { //После долгих и мучительных проб 'атом' сам поставил => ;)
    if(item < num){
      num = item;
    }
  });
});

console.log("Минимальный элемент массива: " + x + " равен " + num);
document.write("Минимальный элемент массива: " + x + " равен " + num);
