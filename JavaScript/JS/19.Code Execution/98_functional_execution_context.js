/* 
Call Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window {}
                this: window
                {
                    foo: uninitialized
                    getfullName: f{}
                    fullName: uninitialized
                }
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. foo = foo
                    2. prints foo
                    10. personName: calls getFullName() -> creates Function Execution Context
                    11. prints personName
            ]
        ]
    ]

    Function Execution Context [
        Local Memory Creation phase [
            argument: [Md. Abid Ullah, Muhib]
            firstName: Md. Abid Ullah
            lastName: Muhib
            myVar: uninitialized
            fullName: uninitialied
        ]
        Local Code Execution Phase [
            Line:
                4. prints arguments
                5. myVar = "Var inside func"
                6. prints myVar
                7. fullName = Md. Abid Ullah Muhib
                8. returns fullName
        ]
    ]
]
*/


let foo = "foo";        //1
console.log(foo);       //2

function getFullname(firstName, lastName) {     //3
    console.log(arguments);     //4
    
    let myVar = "Var inside func";      //5
    console.log(myVar);     //6

    const fullName = firstName + " " + lastName;        //7

    return fullName;        //8
}       //9

const personName = getFullname("Md. Abid Ullah", "Muhib");      //10

console.log(personName);        //11