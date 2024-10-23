function userPrivilegeManagementSystem(person) {
    return (person.role === "admin") ? 
               (person.active === true) ? 
                   (person.experience > 5) ? 
                       (person.department === "IT") ? 
                           "Full IT Admin Access" : 
                        "Full Admin Access": 
                    "Limited Admin Access": 
               "Admin Access Revoked"
        : (person.role === "manager") ? 
              (person.active === true) ? 
                  (person.experience > 3) ? 
                      (person.department === "Sales") ? 
                          "Full Sales Manager Access" : 
                      "Full Manager Access": 
                    "Limited Manager Access": 
              "Manager Access Revoked"
        : (person.role === "user") ? 
              (person.active === true) ? 
                  (person.department === "Support") ? 
                      "Priority Support Access" : 
                  "User Access": 
              "User Access Revoked"
        : "Invalid Role";
}

//let person = {role: "admin", experience: 7, active: true, department:"IT"};

// let person = {role: "manager", experience: 4, active: true, department:"Marketing"};

// let person = {role: "user", experience: 2, active: true, department:"Support"};

let person = {role: "admin", experience: 3, active: false, department: "Finance"};

console.log(userPrivilegeManagementSystem(person));    