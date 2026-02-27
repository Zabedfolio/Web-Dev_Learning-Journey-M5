const employee = {
    name: 'John',
    1: 'Desk one',
    'home-address' : '123 Main St',
    salary: 50000,
    position: 'Software Engineer'
};

for(const key in employee){
    const value = employee[key];
    console.log(value)
    // console.log(key)
}