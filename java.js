// Bir array olsun:
//1.1: Funksiyaya ötürülən parametrin arrayin içində olub olmamasını tapın
// let arr=[2,5,3,5,8,9,5,4];
// function findParam(param) {
//     for (let i = 0; i < arr.length; i++) {
//         if (param==arr[i]) {
//             console.log("The argument is in the array");
//             break;
//         } 
//     }
// }
// findParam(5);

//1.2: Arrayda olan cüt ədədləri qaytaran funksiya yazın
// function evenNum() {
//     let arr=[2,5,3,5,8,9,5,4];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]%2==0) {
//             console.log(arr[index]);
//         }
//     }
// }
// evenNum();

//2) Bir calculator funksiyası olsun. Əgər funksiyaya "+" ötürülərsə toplama, "-" ötürülərsə çıxma, 
//"*" ötürülərsə vurma,  "/" ötürülərsə bölmə əməliyyatını edən funksiyanı yazın.
function calculator(num1,sign,num2) {
    if (sign=='+') {
        console.log(num1+num2);
    }
    else if (sign=='-') {
        console.log(num1-num2);
    }
    else if (sign=='*') {
        console.log(num1*num2);
    }
    else if (sign=='/') {
        console.log(num1/num2);
    }
}
calculator(5,'-',3);
