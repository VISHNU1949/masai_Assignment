function fetchUserData(url){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const users=[
                {
                    id:1,
                    name:"Alice",
                    email:"alice@example.com",
                    age:25
                },
                {
                    id:2,
                    name:"Bob",
                    email:"bob@example.com",
                    age:30
                },
                {
                    id:3,
                    name:"Charlie",
                    email:"charlie@example.com",
                    age:22
                },
                {
                    id:1,
                    name:"David",
                    email:"david@example.com",
                    age:29
                }
            ];
            console.log("Fetched user data: ",users);
            resolve(users)
        },5000)
    })
}
function processUsers(users,minAge){
    let filteredUsers = users.filter(user=>user.age>=minAge).map(({name,email})=>({name,email}));
                        //.map(({name,email})=>({name,email}));
    return filteredUsers;
    
}
function createUserManager(){
    let userList = [];
    return {
        addUser:(user)=>{
            userList=[...userList,user];
            console.log(`User added: ${user.name}`);
        },
        getUsers:()=>{
            return userList.map(({id,name,age})=>({id,name,age}));
        },
        findUserByName:(name)=>{
            const user =  userList.find((user)=>user.name===name);
            return user?user:"User not found";
        }
    }
}

(async function () {
    console.log("Fetching user data.... ");
    const users = await fetchUserData("https://fakeapi.com/users");

    console.log("Processing users with minAge 25...");
    console.log("Processed Users:",processUsers(users,25));

    console.log("\nCreating User Manager...");
    const userManager = createUserManager();

    console.log("Adding users...");
    users.forEach(user=>userManager.addUser(user));

    console.log("\nRetrieving Users (emails hidden)...");
    console.log(userManager.getUsers());

    console.log("\nFinding User: Bob");
    console.log(userManager.findUserByName("Bob"));

    console.log("\nFinding User: John (not in list)...");
    console.log(userManager.findUserByName("John"));
})();
