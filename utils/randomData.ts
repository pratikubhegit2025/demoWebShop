//randomData.ts == utility (test data generator)
//first name,last name = string
//gender,firsnamae lastname email pass confirmPass

// interface 
// keyword = interface 
// implement 

export interface newUser{
    // gender= buttons, read
    gender: 'male' | 'female';
    firstName: string;
    lastName:string;
    email:string;
    password:string;
}

// to add multiple values in one variable - use array;
const FIRST = ['John', 'Mike', 'Pratik' , 'Lokesh', 'Priya',];
const LAST =['Smith', 'Doe', 'Ubhe', 'Patel', 'Patil'];

// Aa23456@#$%^& // 8 characters 

export function randomString(length=8): String {

const chars= 'qwertyuiopasdfghjklzxcvbnm0123456789';


}

// unique email
//date,hrs,mins,ms
// pw_24102026104945abc@xyz.com 

export function randomEmail(prefix = 'pw'): string{
    return `${prefix}_${Date.now()_${randomString(6)}@example.com`};
}




