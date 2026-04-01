const num = 100;
const test = 20;


switch (num) {
    case 10:
        console.log(10);
        //break;//제일 가까운 스위치 구문 탈출
    case 20:
        console.log(20);
        //break;
    case 30:
        console.log(30);
        break;
    default:
        console.log('default')
        break;
}