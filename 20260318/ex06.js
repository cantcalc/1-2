// for (초기값; 조건; 변경;)

//for 구문 시작해줘 i=0 부터......i<5 작은동안 ... i+=1 해서 1씩 증가해줘
let x = 10; 
for (let i=0;i<5;i+=1) {
    console.log('i = '+i);
    console.log('x = '+x++); //x값출력 x값증가
    console.log('x = '+ ++x);//x값을증가 x값출력

}
