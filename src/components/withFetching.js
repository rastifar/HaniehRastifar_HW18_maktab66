// import axios from 'axios';
// import React, { useState } from 'react';

// const WithFetching = (Component, method) => {
//     const WithFetchingComponent = ({ ...props }) => {
//         const [data,setData]=useState()
//         method==="get"?
//             axios.get('http://localhost:3001/users')
//             .then(res=>setData(res.data))
//             :
//             axios.put('http://localhost:3001/${endpoing}')
//     }
//     return (
//         <Component {...props} data={data}/>
//     );
// };

// export default WithFetching;