/*
Global Execution Context [
    Memory Cration phase [
        window:{}
        this: window
        myFunction: f{}
        cube: uninitialized
        ans: uninitialized
    ]

    Code Execution Phase [
        2. Function Execution Context (myFunction)
        3. Function Execution Context (cube)
        4.  ( search in local memory: not present
                    search in lexical scope (where ans is present): not present
                    search in closure: present -> print)
    ]

    Function Execution Context (myFunction) [
        Local Memory Creation phase [
            arguments: [3]
            power: 3
             : f{} (anonymus)
        ]

        Code Execution Phase [
            (i) Function Execution Context (anonymus),
                  ans: f{}, power 
        ]
    ]

    Function Execution Context (anonymus) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            
        ]
    ]

    Function Execution Context (cube) [
        Local Memory Creation phase [
            arguments: [number]
            number: 3
        ]

        Code Execution Phase [
            (a) ans: 27
        ]
    ]
]

Call Stack [
    1. Globaal Execution Context
    2. Function Execution Context (myFunction) [
        Function Execution Context (anonymus)
    ]  {popped 1st}
    3. Function Execution Context (ans)
]
*/

function myFunction (power) {       //1

    return function (number) {      //(i)
        return number ** power;     //(a)
    } 
}

const cube = myFunction(3);      //2
const ans = cube(3);        //3
console.log(ans);        //4