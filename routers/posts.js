//packages
const { Router } = require("express");

//functions
const auth = require("../auth/middleware");

//models
const Post = require("../models").post;
const Comment = require("../models").comment;
const Tag = require("../models").tag;

//new router instance
const router = new Router();

//endpoints
router.get("/", async (req, res, next) => {
  //include tag and developer
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  //include tag, developer, comments
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: {
        model: Tag,
        through: {
          attributes: [],
        },
      },
    });

    if (!post)
      return res.status(404).send(`Post with id number ${id} not found`);

    res.send(post);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user;

    if (!title || !content) return res.status(400).send("Missing parameters");

    const newPost = await Post.create({ title, content, userId: id });

    res.send(newPost);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//export router
module.exports = router;
