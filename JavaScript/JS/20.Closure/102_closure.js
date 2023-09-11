/*
Global Execution Context [
    Memory Cration phase [
        window:{}
        this: window
        hello: f{}
        ans: uninitialized
    ]

    Code Execution Phase [
        2. Function Execution Context (hello)
        3. Function Execution Context (ans)
    ]

    Function Execution Context (hello) [
        Local Memory Creation phase [
            arguments: [arg]
            x: arg
            a: uninitialized
            b: uninitialized
             : f{} (anonymus)
        ]

        Code Execution Phase [
            (i) a: varA
            (ii) b: varB
            (iii) Function Execution Context (anonymus),
                  ans: f{}, a, b, x
        ]
    ]

    Function Execution Context (anonymus) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            
        ]
    ]

    Function Execution Context (ans) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            (a) prints a, b, x ( search in local memory: not present
                                search in lexical scope (where ans is present): not present
                                search in closure: present -> print)
        ]
    ]
]

Call Stack [
    1. Globaal Execution Context
    2. Function Execution Context (hello) [
    2. Function Execution Context (hello) [
        Function Execution Context (anonymus) 
    ]   {popped 1st}
    3. Function Execution Context (ans)
]
*/

function hello(x) {     //1
    const a = "ConstA";     //(i)
    const b = "ConstB";     //(ii)

    return function() {     //(iii)
        console.log(a, b, x);       //(a)
    }
}

const ans = hello("arg");       //2
ans();      //3