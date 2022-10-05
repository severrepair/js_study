console.log("------함수 사용하기--------");

function sum(mum1, num2) {    // 함수의 사용설명서
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`);
}

// sum();
sum(10,20);

//함수의 4가지 형태
//  1. 매개변수 X, 반환값 X
//  2. 매개변수 O, 반환값 X
//  3. 매개변수 X, 반환값 O
//  4. 매개변수 O, 반환값 O

function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add2(a,b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

function add4(a, b) {
    const c = a + b;
    return c;
}
//자바와 달리 오버로딩 없음 -> 무조건 함수명 다르게 만들어야됨

console.log("-----------");

// var btn = document.getElementById("aaa");
// btn.addEventListener("click",function (){
//     alert("aaaa");
// });


//  익명 함수 : 이름이 없어서 호출(실행) 불가한 함수,
//          매개변수로 함수를 사용시 사용(콜백함수)
//  변수에 익명 함수를 대입하여 변수명으로 익명 함수를 호출할 수 있음
const noname = function (num1, num2) {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`)
};

noname(10,20);

function funcName(num1, num2){

}


//  즉시 실행 함수 (일회용 함수) : 프로그램 실행 시 단 한번만 실행해야되는 부분을 
//  실행하기 위해서 사용함
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());

console.log("------문제6--------");

// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. 사용자 입력 부분을 함수로 생성, quiz6Input
//  2. 3의 배수를 계산하는 부분을 함수로 생성, quiz6Cal

/*let num = prompt("1에서 몇까지 숫자 중에서 3의 배수를 찾을까요?");
num = Number(num);
let count = 0;
for (let i =1; i<=num; i++){
    if (i % 3==0){    //  입력값이 아니라 입력값 까지 가는 숫자를 나누어야한다.
        console.log(i);
        count++;
    }
}
console.log(`${num} 까지의 3의 배수 개수 : ${count}`);*/

function quiz6Input (){
    let num = prompt("1에서 몇까지 숫자 중에서 3의 배수를 찾을까요?");
    num = Number(num);

    return num;
}

function quiz6Cal (num){
    let count = 0;
    for (let i =1; i<=num; i++){
        if (i % 3==0){    //  입력값이 아니라 입력값 까지 가는 숫자를 나누어야한다.
            console.log(i);
            count++;
        }
    }
    console.log(`${num} 까지의 3의 배수 개수 : ${count}`);

}

let num = quiz6Input();
quiz6Cal(num);

console.log("------문제7--------");

//  문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. money, coffee, price 의 초기값을 설정하는 함수 생성, quiz7Setup
//  2. 커피 판매 부분을 함수로 생성, quiz7CoffeeSale

/*let money = prompt("소지하고 있는 금액을 입력하세요. : ");
console.log(`현재 소지금액은 ${money}원 입니다.`);
let coffee = 10;

while (true) {
    console.log('커피를 주문합니다.');

    if (money > 300) {
        if (coffee > 0){
            coffee--;
            money -= 300;
            console.log('커피를 한잔 판매합니다.');
            console.log(`현재 남은 커피량 : ${coffee}`);
        }
        else {
            console.log('커피가 다 팔렸습니다.');
            console.log('영업을 종료합니다.');
            break;
        }
    }
    else {
        console.log('돈이 부족합니다.');
        break;
    }
}*/






console.log("------문제8--------");

//  문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. 입금 부분을 함수로 생성, quiz8InputMoney
//  2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney
//  3. 출금 부분을 함수로 생성, quiz8OutputMoney

function quiz8InputMoney (){

}
function quiz8CheckMoney (){

}
function quiz8OutputMoney (){

}






