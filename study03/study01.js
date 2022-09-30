console.log("------while문 사용하기--------");

// 카운트 변수 선언
let count = 1;

// while (조건식) {
//     반복 실행될 소스코드
//     카운트 변수의 증감식
// }

while (count < 11) {
    console.log(count);
    count++;
}

let dan = 5;
count = 1;

while (count < 10) {
    console.log(`${dan} * ${count} = ${dan * count}`);

    count++;
};

console.log();
//  문제 1) 구구단 전체 출력을 while문을 사용하여 출력하세요.

let i = 2;

while (i<10) {
    console.log(`\n-----${i}단------`);

    let j = 1;
    while (j < 10){
        console.log(`${i} * ${j} = ${i*j}`)
        j++
    }
    i++
}


console.log("--------for 문 사용하기---------")

let sum = 0;

for (let i = 0; i <=5; i++) {
    sum = i + sum;
    console.log(sum);
}
console.log("-------------");

const arr1 = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("-------------");
// 문제2) 배열 arr1를 이용하여 1~10까지의 총합을 구하는 프로그램을 for문을 사용하여 작성하세요.

sum = 0;

for (let i =0; i < arr1.length; i++) {
    sum = sum + arr1[i];
}
console.log(sum);


for (let i = 0; i < 10; i++) {
    if (i==5) {
        break;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log()

for (let i = 0; i<10; i++) {
    if (i == 5) {
        continue;
    }
    else {
        console.log("현재 i의 값 : " + i);
    }
}


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    for (let j=1; i < 10; j++) {
        if (j == 5) {
            break;
        }
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// 문제3) 책 511 페이지 마무리 문제 2번 풀기

// document.write("<h1>3의 배수 찾기</h1>");
let num = prompt("1에서 몇까지 숫자 중에서 3의 배수를 찾을까요?");
num = Number(num);
let x = count;
for (let i =1; i<=num; i++){
    if (i % 3==0){    //  입력값이 아니라 입력값 까지 가는 숫자를 나누어야한다.
        console.log(i);
        count++;
    }
}
console.log(`${num} 까지의 3의 배수 개수 : ${count}`);



// 문제4) 커피 자판 프로그램을 작성하세요.
//  1. 사용자가 가지고 있는 금액을 입력 받기
//  2. 커피 1잔의 금액은 300원
//  3. 자판기에 들어있는 커피의 양은 10개
//  4. 커피를 판매할 때마다 1개의 커피가 소비됨
//  5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
//  6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
//  7. 커피 판매 시 '커피를 한잔 판매 합니다.' 를 출력
//              ex) 커피를 한잔 판매합니다.
//                  남은 커피 00잔

// let m = prompt("사용자 금액");
// m = Number(m);
// const coffe=300;
// machine =10;

// if (m>coffe) {
//     if (machine>0){
//         console.log("커피를 한잔 판매 합니다.")
//         m = m-coffe;
//         machine = machine-1;
//     }
//     else {
//         console.log("커피가 다 팔렸습니다.")
//     }
// }
// else {
//     console.log("돈이 부족합니다.")
// }
// let m = prompt("사용자 금액");
// m = Number(m);
// const coffe=300;
// machine =10;
// while (true){   //무한반복
//     if (m>coffe) {  // 사용자 금액이 커피값보다 클시 실행
//         if (machine>0){ // 커피의 개수는 0개보다 크다.
//             console.log("커피를 한잔 판매 합니다.");
//             m = m-coffe;    // 소지 금액= 소지금액- 커피값
//             machine = machine-1;    // 커피개수 = 커피개수-1
//         }
//         else {  // 커피의 개수가 없을시 실행
//             console.log("커피가 다 팔렸습니다.");
//             break;  // 무한반복에서 빠져나오기
//         }
//     }
//     else {  // 사용자 금액이 커피값보다 낮을시 실행
//         console.log("돈이 부족합니다.");
//         break;  // 무한반복에서 빠져나오기
//     }
// }   // 소지금액으로 커피를 사먹을수 있을대까지 반복


// for문의 무한 반복
// for (;;){
//
// }

// 선생님 답안
let money = prompt("소지하고 있는 금액을 입력하세요. : ");
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
}


// 문제 5) 은행 프로그램을 작성하세요.
//  1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금

//  내가 한 오답
// alert("안녕하세요 java505 은행입니다.\n숫자를 입력해주세요." +
//     "프로그램을 시작합니다.:1:입금 2:예금 확인,3: 출금,0: 종료");
// let Money = 0;
//
//
// while (true) {
//     console.log("1:입금 2:예금 확인,3: 출금,0: 종료");
//     let select = prompt("메뉴를 선택해 주세요. 1:입금 2:예금 확인,3: 출금,0: 종료");
//
//     if (select == 1) {
//         let M1 = prompt("입금할 금액을 입력해주세요.");
//         Money = Money + M1;
//         console.log(`현재 금액은${Money}원`);
//     }
//     else if (select == 2) {
//             console.log(`현재 금액은${Money}원`);
//         }
//     else if (select == 3) {
//             let out = prompt("출금할 금액을 입력해주세요.");
//             Money = Money - out;
//             console.log(`현재금액은${Money}원`);
//         }
//     else if (select == 0) {
//         console.log(`감사합니다.`);
//         break;
//     }
// }

// 선생님 답안
// bankMoney = 0;
// console.log('안녕하세요 java505 은행입니다.');
//
// while (true){
//
// }



