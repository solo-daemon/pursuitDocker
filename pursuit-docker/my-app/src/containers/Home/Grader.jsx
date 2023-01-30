import React from 'react'
import { useSelector } from 'react-redux';
const Grader = () => {
    const token = useSelector((state) => state.token.token);
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    return(
        <div>
            Graderhello
        </div>
    );

};
export default Grader ;