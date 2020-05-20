// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation

import React from  'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// const withAdminWorking = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is a private info.</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAuthenticated ? (
               <WrappedComponent {...props} />
           ) : (
            <p>Please log in to view the info.</p>
           )}
        </div>
    )
}
// const AdminInfo = withAdminWorking(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details' />, document.getElementById('app'));