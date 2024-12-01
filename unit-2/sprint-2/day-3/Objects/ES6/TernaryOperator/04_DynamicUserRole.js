let dynamicUserRoleMessage = (user) => {
    return (user.role === "admin") ? (user.active) ? `Admin Access Granted!` : `Admin Access Revoked`
    : (user.role === "user") ? (user.active) ? `User Access Granted` : `User Access Revoked`
    : `Access Denied`;
}

console.log(dynamicUserRoleMessage({name : "Alice", role: "admin", active: false}));
console.log(dynamicUserRoleMessage({name : "Bob", role: "user", active: true}));