console.log('------Date 객체 사용하기----------');

let now = new Date();

console.log(now);
console.log(now.toLocaleString());
console.log(now.toString());

console.log(now.getFullYear());
console.log(now.getUTCFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(`현재 시간 : ${now.getHours()}`);
console.log(`현재 UTC시간 : ${now.getUTCHours()}`);
console.log(`현재 분 : ${now.getMinutes()}`);
console.log(`현재 초 : ${now.getSeconds()}`);


console.log("\n-------Math 객체 사용하기-------\n");

console.log(`PI : ${Math.PI}`);

let result = 10/3;
console.log(`10/3 을 그대로 출력 시 ${result}`);
console.log(`10/3 의 소수점 올리기 : ${Math.ceil(result)}`);
console.log(`10/3 의 소수점 버리기 : ${Math.floor(result)}`);
console.log(`5.5에 대한 반올림 : ${Math.round(5.5)}`);
console.log(`5.4에 대한 반올림 : ${Math.round(5.4)}`);
console.log(`매개변수 중 최대 값 선택하기 : ${Math.max(10,20,30)}`);
console.log(`매개변수 중 최소 값 선택하기 : ${Math.min(10,20,30)}`);

//  0.0 ~ 0.9 까지의 숫자를 발생
console.log(`랜덤 숫자 발생 : ${Math.random()}`);

console.log('--------문제1-----------')
// 문제 1) Math.random()를 사용하여 로또 번호 생성 프로그램을 작성하세요.
//  Math.round((Math.random() * 45) +1)

let lotto = [];
//7개 생성
for (let i = 0; i<7; i++){
    const rnd = Math.floor((Math.random()*45) +1);//버림으로 처리

    let j = 0;
    do {
        if (rnd == lotto[j]){
            i--;
            break;
        }
        lotto[i]=rnd;
        j++;
    }while (j <i);
}

// for (let i = 0; i<7; i++){
//     const rnd = Math.floor((Math.random()*45) +1);//버림으로 처리
//     //중복 제거
//     for(let j = 0; j <i; j++){
//         if(rnd == lotto[j]){
//             i--;
//             break;
//         }
//         //로또번호 집어넣기
//         lotto[i] = rnd;
//     }
//     // 1번 실행하기 위해 넣음 대신으로 do~while
//     if(i==0){
//         lotto.push(rnd);
//     }
// }


//출력
for(let i =0; i<lotto.length; i++) {
    if (i== lotto.length -1){
        console.log(`이번주 보너스 번호는 : ${lotto[i]}`)
    }
    else {
        console.log(`이번주 당첨 번호는 : ${lotto[i]}`)
    }
}

















