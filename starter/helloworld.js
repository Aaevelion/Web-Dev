'use strict';
function hello() { 
    console.clear();
    console.log("hello world", typeof("hello world"));
    console.log(55,typeof(55));
    console.log(true,typeof(true));

    let hellostring="Hello string";
    let numbervalue=56;
    let truevalue=false;

    console.log(hellostring,typeof(hellostring));
    console.log(numbervalue,typeof(numbervalue));
    console.log(truevalue,typeof(truevalue));

    let undef;
    console.log(undef,typeof(undef));
    undef=66;
    console.log(undef,typeof(undef));
    undef="Hello again!"
    console.log(undef,typeof(undef));

    //const value=200;
    //console.log(value);
    //value=220;
    //console.log(value);

    //live=500;
    //console.log(live);

    var x=30
    console.log(x);
    {
        var x=20;
        console.log(x);

    }
    console.log(x);

    //let x=30
    //console.log(x);
    //{
        //let x=20;
        //console.log(x);

    //}
    //console.log(x);
}