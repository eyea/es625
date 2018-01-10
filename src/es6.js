
// 循环
for(let i=0;i<5;i++) {
  a[i] = function() {
    console.log(i);
  }
}


// 结构
let color = [1,2,4]
let colorful = [...clolr, 8,9]


// 生成器
function *create() {
  yield 1
  yield 2
  yield 3
}
let it = create()

let it1 = it.next(2).value