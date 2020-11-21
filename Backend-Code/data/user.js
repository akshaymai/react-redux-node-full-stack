const bcrypt=require('bcryptjs')


const users=[
{name:'Akshay Maity',email:'a@gmail.com',password:bcrypt.hashSync('abc123',10),isAdmin:true},
{name:'Mitu Maity',email:'m@gmail.com',password:bcrypt.hashSync('bcd123',10)},
{name:'Subhajiy Maity',email:'s@gmail.com',password:bcrypt.hashSync('cde123',10)}
]


module.exports=users;