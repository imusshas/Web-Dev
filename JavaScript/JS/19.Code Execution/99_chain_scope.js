/* 
Stack [
    Global Execution Context (GEC) 
        Compilation phase [
            Global Memory[
                window {}
                this: window
                {
                    lastName: uninitialized
                    printName: uninitialized
                    firstName: uninitialized
                }
            ]
        ]

        Code Execution phase [
            GEC Stack [
                Line:
                    1. lastName: Muhib
                    2. printName: f{}
                    6. Function Execution Context
            ]
        ]
    ]

    Function Execution Context [
        Local Memory Creation phase [
            argument: []
            firstName: uninitialized
        ]
        Local Code Execution Phase [
            Line:
                3. firstName = Md. Abid Ullah Muhib
                4. prints firstName
                5. prints lastName (Searching from Global Execution Context)
        ]
    ]
]
*/

const lastName = "Muhib";       //1

const printName = function() {      //2
    const firstName = "Md. Abid Ullah";     //3

    console.log(firstName);     //4
    console.log(lastName);      //5
}

printName();        //6