// 1. Compile
        // Steps?
            // a) Tokenizing / Lexing
            // b) Parsing
            // c) Code generation
        
        // How compile?
            // a) Tokenizing: Code gets divide into smaller parts. This parts are called tokens.
            // b) Parsing: Realizes tokens and creates Abstract Syntax Tree (AST).
            // c) Code generation: By using AST executable code is generated.

        // Why compile?
            // a) Early error checking
            // b) Determining appropirate scopes for variables

            /*
                If any JS code doesn't belong to any function then it belongs to Global Scope/Global Memory.
            */

// 2. Execute
    // All code executes inside execution context.
    // a) Global Execution Context (Firstmost execution context). 
            // Phases of lobal Execution Context
            // i) Creation phase (Global Memory)
                    //  firstName: undefined (in case of var)
                    // this: window (in case of browser)


            // ii) Code execution phase
                // *** JS is a SYNCRONIZED & single THREAD programming language ***
                // Syncronized: The next line doesn't execute until the execution of first line finishes. 


console.log(this);
console.log(window);
console.log(firstName);

var firstName = "Abid";

console.log(firstName);