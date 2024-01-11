import React from 'react';
import PropTypes from 'prop-types';
function UserProfile({ name, age = 15, email }) { //age tiene un valor por defecto
 return (<div>
 <h1>User Profile</h1><p>Name: {name}</p><p>Age: {age}</p><p>Email: {email}</p>
</div> );
}
UserProfile.propTypes = { //definimos los tipos de cada props y si son obligatorios.
 name: PropTypes.string.isRequired,
 age: PropTypes.number,
 email: PropTypes.string.isRequired
};
export default UserProfile;