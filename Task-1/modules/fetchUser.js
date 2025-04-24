const USER_DATA = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 24,
    },
    {
        id: 2,
        name: "David Smith",
        email: "david.smith@example.com",
        age: 30,
    },
    {
        id: 3,
        name: "Maria Garcia",
        email: "maria.garcia@example.com",
        age: 28,
    },
    {
        id: 4,
        name: "Ethan Brown",
        email: "ethan.brown@example.com",
        age: 22,
    },
    {
        id: 5,
        name: "Olivia Wilson",
        email: "olivia.wilson@example.com",
        age: 27,
    },
];

export const getUserData = (userId) => {
    return new Promise((resolve, reject) => {
        console.log('Getting user data...')
        setTimeout(()=>{
            let responseUser = USER_DATA.find(user => user.id == userId);

            //if user found else continue
            if(responseUser)
                resolve(JSON.stringify(responseUser, null, 4));

            reject('No user has been found with such id, returned value is ' + String(responseUser));
        }, 2000);
    });
}