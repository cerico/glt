const initialState = {
  articles: [],
  page: 0,
  feed: {}
};

const initFeeds = JSON.parse(localStorage.getItem("feeds")) || [];

export const results = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESULTS_SUCCESS":
      return action.payload;
    default:
      console.log(state);
      return state;
  }
};

export const feeds = (state = initFeeds, action) => {
  switch (action.type) {
    case "FEEDS_FROM_LOCAL_STORAGE":
      return action.payload;
    case "GET_RESULTS_SUCCESS":
      let index = state.indexOf(action.payload.feed.url);
      if (index > -1) {
        return state;
      }

      const newState = [...state, action.payload.feed.url];
      localStorage.setItem("feeds", JSON.stringify(newState));
      return newState;
    case "REMOVE_FEED":
      const removedState = state.filter(element => element !== action.payload);
      localStorage.setItem("feeds", JSON.stringify(removedState));
      return removedState;
    default:
      return state;
  }
};
