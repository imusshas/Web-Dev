/* 
Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window {}
                this: window
                {
                    varCase: undefined
                    letConstCase: uninitialized
                }
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. Uncaught ReferenceError: undefinedCase is not defined
                    2. undefined
                    4. Uncaught ReferenceError: Cannot access 'letConstCase' before initialization
            ]
        ]
    ]
]
*/

// console.log(undefinedCase);     //1      // Uncaught ReferenceError: undefinedCase is not defined

console.log(varCase);       //2
var varCase = "VARCASE";        //3

// console.log(letConstCase);      //4     // Cannot access 'letConstCase' before initialization
const letConstCase = "LetCONSTCase";        //5     