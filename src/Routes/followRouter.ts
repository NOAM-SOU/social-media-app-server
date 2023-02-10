import express from "express";
import {
  addFollow,
  getAllUsers,
  getFollowedPosts,
  removeFollow,
} from "../BL/follow";
import { getUser } from "../BL/userLogic";

const router = express.Router();

router.get("/addfollow/:id/:follow", async (req, res) => {
  // work
  try {
    console.log("req.body:", req.body);

    const data = await addFollow(req.params.id, req.params.follow);
    res.send(data);
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).send({
        error: err.message,
      });
    }
  }
});
router.get("/getposts/:id", async (req, res) => {
  // work
  try {
    console.log("req.body:", req.body);

    const data = await getFollowedPosts(req.params.id);
    res.send(data);
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).send({
        error: err.message,
      });
    }
  }
});

router.get("/removefollow/:userid/:followedid", async (req, res) => {
  try {
    console.log("req.body:", req.body);

    const data = await removeFollow(req.params.userid, req.params.followedid);
    res.send(data);
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).send({
        error: err.message,
      });
    }
  }
});

export default router;