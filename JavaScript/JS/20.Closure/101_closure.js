// *** If a function is returned from another function then it retuns with the variables (that it will need) present inside the local memory of the outer function

/* 
Global Execution Context [
    Memory Cration phase [
        window:{}
        this: window
        printFullName: f{}
        personName: uninitialized
    ]

    Code Execution Phase [
        2. Function Execution Context (printFullName)
        3. Function Execution Context (personName)
    ]

    Fuonction Execution Context (printFullName) [
        Local Memory Creation [
            argunemts: [Md. Abid Ullah, Muhib]
            firstName: Md. Abid Ullah
            lastName: Muhib
            printName: f{}
        ]

        Function Execution phase [
            (i) Function Execution Context (printName)
            (ii) personName: f{}, firstName, lastName
        ]
    ]

    Fuonction Execution Context (printName) [
        Local Memory Creation [
            argunemts: []
        ]

        Function Execution phase [
            
        ]
    ]

    Fuonction Execution Context (personName) [
        Local Memory Creation [
            argunemts: []
        ]

        Function Execution phase [
            (a) prints firstName, lastName ( search in local memory: not present
                                search in lexical scope (where ans is present): not present
                                search in closure: present -> print)
        ]
    ]
]

Call Stack [
    1. Global Execution Function
    2. [
        Fucntion Execution Context (printFullName) [
            Fucntion Execution Context (printName)
        ]
        {popped 1st}
    ]
    3. Function Execution Context (personName)   {popped 2nd}
]
*/

// 1. [
function printfullName(firstName, lastName) {  
    // (i) [  
    function printName() {      
        console.log(firstName, lastName);    //(a)   
    }
    // ]

    return printName;    //(ii)   
}       
// ]

const personName = printfullName("Md. Abid Ullah", "Muhib");        //2
personName();       //3

