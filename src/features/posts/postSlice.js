import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
posts:[],
post:{},
isLoading:false
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById",async(id)=>{
    try {
        return await postService.getById(id)
    } catch (error) {
        console.error(error);
        
    }
})
export const getByTitle = createAsyncThunk("posts/getByTitle",async (title)=>{
    try {
        return await postService.getByTitle(title)
    } catch (error) {
        console.error(error);
        
    }
})
export const AddPost = createAsyncThunk("posts/create",async(post)=>{
  try {
    return await postService.AddPost(post)
  } catch (error) {
    console.error(error);
  }
})
export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postService.like(_id);
  } catch (error) {
    console.error(error);
  }
});

export const unlike = createAsyncThunk("posts/unlike", async (_id) => {
  try {
    return await postService.unlike(_id);
  } catch (error) {
    console.error(error);
  }
});
export const addComment = createAsyncThunk("posts/addComment",async(_id)=>{
  try {
    return await postService.addComment(_id)
  } catch (error) {
    console.error(error);
  }
})

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false
      })
      .addCase(getAll.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(getById.fulfilled, (state,action)=>{
        state.post = action.payload
      })
      .addCase(getByTitle.fulfilled, (state,action)=>{
        state.posts = action.payload
      })
      .addCase(AddPost.fulfilled,(state,action)=>{
        state.posts = [action.payload.post,...state.posts]
      })
      .addCase(like.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post
        })
        state.posts = posts
      })
      .addCase(unlike.fulfilled, (state, action) => {
        const posts = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post
        })
        state.posts = posts
      })
      .addCase(addComment.fulfilled,(state, action) => {
        state.post = [action.payload.post,...state.post]
      },
  


 ) },
});

export default postSlice.reducer;