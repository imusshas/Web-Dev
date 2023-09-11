/*
Global Execution Context [
    Memory Cration phase [
        window:{}
        this: window
        func: f{}
        myFunc: uninitialized
    ]

    Code Execution Phase [
        2. Function Execution Context (func)
        3. Function Execution Context (myFunc)
        4. Function Execution Context (myFunc) 
    ]

    Function Execution Context (func) [
        Local Memory Creation phase [
            arguments: []
            tracker: uninitialized
             : f{} (anonymus)
        ]

        Code Execution Phase [
            (i) tracker: true
            (ii) Function Execution Context (anonymus) 
                 myFunc: f{}, tracker
        ]
    ]

    Function Execution Context (anonymus) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            
        ]
    ]

    for Line 3. Function Execution Context (myFunc) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            (a) checks if condition (tracker from closure): true
            (b) prints Hi You Called Me
            (c) tracker = false
            (d) returns
        ]
    ]

    for Line 4. Function Execution Context (myFunc) [
        Local Memory Creation phase [
            arguments: []
        ]

        Code Execution Phase [
            (a) checks if condition (tracker from closure): false
            (e) prints I've already been called
        ]
    ]
]

Call Stack [
    1. Globaal Execution Context
    2. Function Execution Context (func) [
        Function Execution Context (anonymus)
    ]  {popped 1st}
    3. Function Execution Context (myFunc)
    4. Function Execution Context (myFunc)
]
*/


function func() {       //1
    let tracker = true;        //(i)
    return function () {        //(ii)
        if(tracker) {      //(a)
            console.log(`Hi, you called Me`);       //(b)
            tracker = false;      //(c)
            return;     //(d)
        }
        console.log("I have already been called");      //(e)
    }
}

const myFunc = func();      //2
myFunc();       //3
myFunc();       //4