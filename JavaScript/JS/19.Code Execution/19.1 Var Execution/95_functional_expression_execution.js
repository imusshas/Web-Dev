/* 
Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window {}
                this: window
                (Var case) {
                    myFunction: undefined
                }
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. prints myFunction
                    2. myFunction = f{}
                    5. prints myFunction
            ]
        ]
    ]
]
*/

console.log(myFunction);        // 1

var myFunction = function() {       //2
    console.log("This is my function")      //3
}       //4
console.log(myFunction);        // 5