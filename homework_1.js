let row = 4; 
let col = 5;



const getTable = (row, col) => {
  const arr = [];
  let num = 0;
  // შევავსოთ არრაი ოთხი ცარიელი არრაით;
  while (arr.length !== row ) arr.push([]);  
  
  // იტერაცია არრაიში, რამდენი column (col)- იც გვინდა იმდენჯერ; 
  for (let eachCol = 0; eachCol < col; eachCol++) {
    // თუ ლუწი column (col)- ია, ინდექების ზრდადობით ვამატებთ 'nums'-ს თითოეულ row-ში
    if ( !(eachCol % 2) ) {
      for (let eachRow = 0; eachRow < row; eachRow++) arr[eachRow].push(++num);
    }
    // თუ კენტი - პირიქით ინდექსების კლებადობით.
    else {
      for (let eachRow = row -1; eachRow > -1; eachRow--) arr[eachRow].push(++num);
    }
  }
  return arr;
}

let finalArr = getTable(row, col);
console.log(finalArr);
