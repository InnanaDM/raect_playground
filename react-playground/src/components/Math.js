import React from 'react';

 Math =  props => {
    let value;
    const num1 = parseInt 
    const num2;
    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;

            case "-":
            value = props.num1 - props.num2;
            break;

            case "*":
                    value = props.num1 * props.num2;
                    break;

                    case "/":
                            value = props.num1 / props.num2;
                            break;
           
    }
    return (
        <span>{value}</span>
            
        
    );
};

export default Math;