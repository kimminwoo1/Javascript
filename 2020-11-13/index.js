//사칙연산 펑션 만들기



//덧셈
function sum(a,b){
    return (a+b);
}
let sum1 = sum(2,3);
console.log(sum1);

console.log(sum(6,3));


//뺼셈
function minus(num1,num2){
    return num1-num2;
}
minus(5,4);
console.log(minus(5,4));






//곱하기
function multyple(A,B){
    return A*B;
}
console.log(multyple(4,9));






//나누기


function divide(num3,num4){
    Number(); //넘버타입으로 바꾸는 함수
    console.log(typeof num4); // 타입 확인하는 키워드
    return (num3/num4); // 결과값 리턴
}

const divide1 = divide(123,123); 

console.log(divide1);















