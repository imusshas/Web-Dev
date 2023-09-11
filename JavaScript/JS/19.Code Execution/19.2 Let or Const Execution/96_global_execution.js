/* 
Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window {}
                this: window
                (let/const case) {
                    myFunction: uninitialized
                }
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. Uncaught ReferenceError: Cannot access 'firstName' before initialization
                    2. firstName = Muhib
                    3. prints firstName
            ]
        ]
    ]
]
*/

// *** Temporal Dead Zone: The zone where a variable is uninitialized

// console.log(firstName);     //1     // Uncaught ReferenceError: Cannot access 'firstName' before initialization

let firstName = "Abid";     //2

console.log(firstName);     //3