console.log("Первое задание:\n\n")

let num_1 = 0;
let num_2 = 0;
for (let i = 0; i <= 1000; i++){
  if (i % 3 == 0){
    num_1 += i;
  }
}
console.log("Сумма чисел кратных 3 в диапазоен 1 - 1000 равна: " + num_1);
for (let i = 0; i <= 1000; i++){
  if (i % 5 == 0){
    num_2 += i;
  }
}
console.log("Сумма чисел кратных 5 в диапазоен 1 - 1000 равна: ","+" + num_2, "\n\n\n\n");

console.log("Второе задание:\n\n")

var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
let num = 1/0;
x.forEach(function(item, i, array){
  item.forEach((item, i, array) => {
    if(item < num){
      num = item;
    }
  });
});
console.log("Минимальный элемент массива: " + num);
