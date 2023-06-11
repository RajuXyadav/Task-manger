const getAllTasks = (req,res)=>{
    res.send('all items from file')
}
const createTasks = (req,res)=>{
    res.json(req.body)
}
const getTask = (req,res)=>{
res.json({id:req.params.id})
}
const updateTask = (req,res)=>{
    res.send('updateTask')
}
const deleteTaks = (req,res)=>{
    res.send('deleteTask')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTaks
}