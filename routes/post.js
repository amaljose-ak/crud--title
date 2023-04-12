const router = express.Router();
const posts = require("../model/post");





router.get("/", async (req, res) => {
    try {
        const getpost = await posts.find()
        res.json(getpost)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post("/", async (req, res) => {
    const post = new posts({
        title: req.body.title,
        Description: req.body.Description
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (error) {
        res.json({ message: error })
    }
})


// find by id for specific post

router.get("/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const postId = await posts.findById(req.params.id)
        res.json(postId)
    } catch (error) {
        res.json({ message: error })
    }


})


// update id 

router.patch("/:id", async (req, res) => {
    try {
        const updateId = await posts.updateOne(
            {_id:req.params.id},
            {$set:{title:req.body.title,Description:req.body.Description}
        })
            res.json(updateId)
        
    } catch (error) {
        res.send({message:error})
    }
})

// delete 
router.delete("/:id",async (req,res)=>{
    try {
        const deleteid= await posts.deleteOne({_id:req.params.id})
        res.json(deleteid)
    } catch (error) {
        res.json({message:error})
    }
})
module.exports = router;