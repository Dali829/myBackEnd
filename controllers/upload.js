
export const uploadFile = async (req,res)=>{
    if(req.files){
        console.log(req.files)
        var file = req.files.undefined
        var fileName = file.name
        file.mv('./uploads/'+fileName, function (err){
            if(err){
                res.send(err)
            }else{
                res.send("File uploaded")
            }
        })
    }else {
        console.log("errror")
    }
}




