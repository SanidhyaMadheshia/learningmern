import { createElement } from "react";

function Greeting() {
    return (
                <h1>&quot;hello sanidhya &quot;</h1>,
                <input type="button" value="2" />
            );
}
function Ele(){
    return createElement(
        'h2',
        {
            className :'sandy',
            id : 'san'
        },
        'hello',
        'woirld',
        'how '
    );
}
function Greet({name1}){
    return createElement('h2',
        {
            className : 'sandy1',
            id : 'hello'
        },
        'hello',
        createElement('i',null,name1 ),
        '.welcome'
    );
}
function Greet2 ({sweet}){
    return createElement(
        'h2',
        {
            className : 'round'
        },
        'hello',
        'what',
        'is',
        createElement('i',null,sweet),
        'your',

    )
}
export function MyGreet(){
    return createElement(
        Greet,
        {name1 : 'sanidhya '},

    );
}
export function MyGreet1(){
    return createElement(
        Greet2,
        {
            sweet : "gulaab jamun"
        }
    )
}
export default Greeting;
export  {Ele };
    