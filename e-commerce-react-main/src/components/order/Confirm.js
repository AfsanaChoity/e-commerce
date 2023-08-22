import { useEffect, useState } from 'react';
import { initConfirm } from '../../api/apiOrder';
import { userInfo } from '../../utils/auth';
import { Link } from 'react-router-dom';



const Confirm = () => {
    
    return (<div>
        
        <h3>Successful!</h3>
        <Link to="/home">Go to Home</Link>
    </div>)
    
}



export default Confirm;