import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: '',
      likes: [],
    },
    users: [],
  },
  reducers: {
    setUser: (state, action) => {
      if (state.users.find(user => user.email === action.payload)) {
        state.user = state.users.find(user => user.email === action.payload);
      } else {
        state.user.email = action.payload;
        state.users.push(state.user);
      }
    },
    deleteUser: (state, action) => {
      state.user.email = '';
      state.user.likes = [];
    },
    addLike: (state, action) => {
      state.users
        .find(user => user.email === action.payload.user.email)
        .likes.push(action.payload.idHero);
      state.user.likes.push(action.payload.idHero);
    },
    disLike: (state, action) => {
      const userFind = state.users.find(
        user => user.email === action.payload.user.email,
      );
      userFind.likes.splice(userFind.likes.indexOf(action.payload.idHero), 1);
      state.user.likes.splice(state.user.likes.indexOf(action.payload), 1);
    },
  },
});

export const {setUser, addLike, disLike, deleteUser} = userSlice.actions;

export default userSlice.reducer;
