const express = require('express');
const blogController =require("../controllers/blogController");

// create a new instance of a Router object; likely mini app
const router = express.Router();

// blog route
router.get("/create", blogController.blog_create_get);

router.get('/', blogController.blog_index);
  
router.post('/', blogController.blog_create_post);
  
router.get('/:id', blogController.blog_detailes);
  
router.delete('/:id', blogController.blog_create_delete);

module.exports= router;