import axios from "axios";

const API_URL = "http://localhost:8080/posts";

const getAll = async () => {
  const res = await axios.get(API_URL + "/getAll");
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/id/" + id);
  return res.data;
};
const getByTitle = async (title) => {
  const res = await axios.get(API_URL + "/title/" + title);
  return res.data;
};
const AddPost = async (post) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + "/create", post, {
    headers: { authorization: token }
  })
  return res.data
}


const postService = {
  getAll,
  getById,
  getByTitle,
  AddPost
};

export default postService;