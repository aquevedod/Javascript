{
    //Block Scope    
    {
        //Nested Block Scope
        //let, const
    }
}

if (true) {
    //Block Scope
}

for (let i = 0; i < 10; i++) {
    //Block Scope    
}

function sum(a, b) {
    //function Scope
    var result = a+b;
};

sum(4+3);