const apiResp=(code,success,data,message)=>{
    return{
        code,
        success,
        data,
        message
    }
}


const getUsers = (req, reply) => {
    reply.status(200).send({message: 'get users from server'});
}

const getUserId = (req, reply) => {
    const userId = req.params.id;
    reply.send({ id: userId , message: 'get user id from Url'});
}

const getUserName = (req, reply) => {
    const userName = req.query.name;
    reply.send(apiResp(200,true,{data:userName},"User has been created"))
    
}

module.exports = {
    getUsers,
    getUserId,
    getUserName
};