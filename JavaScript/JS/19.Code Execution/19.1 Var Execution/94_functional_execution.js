//  *** JS is a LEXICAL SCOPE language
/* 
Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window{}
                this: window
                (Var case) {
                    firstName: undefined
                    lastName: undefined
                    fullName: undefined
                }
                myFunction
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. prints this: window
                    2. prints window
                    3. prints myFunction
                    4. calls myFunction()
                    5. prints fullName
                    9. firstName: Md. Abid Ullah
                    10. lastName: Muhib
                    11. fullName: Md. Abid Ullah Muhib
                    12. prints fullName

            ]
        ]
    ]
]
*/

console.log(this);      // 1
console.log(window);        //2
console.log(myFunction);        //3
myFunction();       //4
console.log(fullName);      //5

function myFunction() {     //6
    console.log("This is my function");     //7
}       //8

var firstName = "Md. Abid Ullah";       //9
var lastName = "Muhib";     //10
var fullName = firstName + " " + lastName;      //11

console.log(fullName);      //12