
export interface newUser{
    // gender= buttons, read
    gender: 'male' | 'female';  // 50-50 male female male female female female male female male male male
    firstName: string;
    lastName:string;
    email:string;
    password:string;
}

// to add multiple values in one variable - use array;
const FIRST = ['John', 'Mike' , 'Neha', 'Priya' ]; // String Array

// const FIRST = ['John'[0], 'Mike'[1] , 'Neha'[2], 'Priya'[3] ];
const LAST =['Smith', 'Doe', 'Ubhe', 'Patel'];// String Array


export function randomString(length=8): String {

const chars= 'qwertyuiopasdfghjklzxcvbnm0123456789'; //variale 

}
export function randomEmail(prefix = 'pw'): string{
    return `${prefix}_${Date.now()}_${randomString(6)}@example.com`};
    //return `${prefix}_${Date.now()_${randomString(6)}@example.com`};
}
// T = type 
// 
function pick<T>(arr:T[]) : T{ // T = string , eg neha , last name = patel
//index[3] = floor[3]
return arr[Math.floor(Math.random() * arr.length)];
// function name is pick
// <T>. = is a generic type 
// T = is placeholder for type
// pick (FISRT) = Passes array, pick becomes string 
// pick (AGE) = Passes array, pick becomesnumber 
// to find array length = 4
//index= 4 -1 
//3
// floor = index 
//(Math.random()= gives decimal value 0 to 1
//  0.62
//0.20= 0.10/0.12/0.19

//0.62*4= 2.48 =2(Floor)/  2.51=3
//arr[2]= neha


//  0.10 *4 = 0.4 = 0
// 0.30 *4 = 1.2 =1
// 0.62 *4 = 2.48 = 2
// 0.95 *4 = 3.8 = 3





}




//? ternary operator(if/else )
export function randomUser() :newUser{
    return{
gender: Math.random()> 0.5 ? 'male' : 'female',
firstName: pick(FIRST),
lastName: pick(LAST),
//unique email
email: randomEmail(),
password: `Pw!${randomString(8)}` ,// PW!hsdf6353



    }
};






















}




