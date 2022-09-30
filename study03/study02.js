document.write("<h1>3의 배수 찾기</h1>");
let n = prompt("몇 까지 3의 배수를 찾을까요?");
let x = 0;
for (let i =1; i<n;i++){
    if (i%3==0){    //  입력값이 아니라 입력값 까지 가는 숫자를 나누어야한다.
        console.log(i);
        x++;
    }
}
console.log(`${n} 까지의 3의 배수 개수 : ${x}`);
document.write(n + "까지 3의 배수의 개수 : "+ x);