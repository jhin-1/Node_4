const fs = require('fs');
let users = JSON.parse(fs.readFileSync('./users/users.json'));

const all_users = (req,res)=>{
    res.json(users);
}

const add_user = (req,res)=>{
    let {name,age,email} = req.body
    let id = users.length +1
    let exist_email = users.find(user=>user.email == email)
    if (exist_email){
        return res.status(404).json({message:'email already exist',email:exist_email.email})
    }else{
        users.push({id,name,age,email})
        fs.writeFileSync('./users/users.json',JSON.stringify(users))
         return res.json({message:'user added successfully',users:users})
    }
}

const update_user = (req,res)=>{
    let {id} = req.params;
    let {name,age,email} = req.body;
    let user = users.find(user=>user.id == id);
    if(!user){
        res.status(404).json({message:'user not found'});
    }else{
        name? user.name = name : user.name = user.name;
        age? user.age = age : user.age = user.age;
        email? user.email = email : user.email = user.email;
        fs.writeFileSync('./users/users.json',JSON.stringify(users));
        return res.status(200).json({message:'user updated successfully',user:user});
    }

}

const delete_user = (req,res)=>{
    let {id} = req.params ;
    let user = users.findIndex(user=>user.id == id)
    if( user == -1 ){
        return res.status(404).json({message:'user not found'})
    }else{
        users.splice(user,1)
        fs.writeFileSync('./users/users.json',JSON.stringify(users))
        return res.status(200).json({message:'user deleted successfully',users:users})
    }
}

const get_user_by_name = (req,res)=>{
    let {name} = req.query;
    let user  = users.find(user=>user.name == name);
    if(!user){
        res.status(404).json({message:"There is no user with this name"})
    }else{
        res.status(200).json({message:"success",user:user})
    }
}

const minimum_age = (req,res)=>{
    let {minAge} = req.query
    let filter = users.filter(user=>user.age >= minAge)
    if(filter.length == 0 ){
        return res.status(404).json({message:'There is no user with this age'})
    }else{
        return res.status(200).json({message:'success',filter:filter})
    }
    
}

const get_user_by_id = (req,res)=>{
    let {id} = req.params
    let user = users.find(user=>user.id==id)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }else{
        return res.status(200).json({message:"success",user:user
        })
    }
}
module.exports = {
    all_users,
    add_user,
    update_user,
    delete_user,
    get_user_by_name,
    minimum_age,
    get_user_by_id,

}
