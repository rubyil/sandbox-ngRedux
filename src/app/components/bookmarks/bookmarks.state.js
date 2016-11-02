//------------------------------------------------------------
// Constants
//------------------------------------------------------------

export const GET_BOOKMARKS = "GET_BOOKMARKS";

//------------------------------------------------------------
// Actions
//------------------------------------------------------------

export const BookmarksActions = () => {
  const getBookmarks = bookmarks => {
    return {type: GET_BOOKMARKS, payload: bookmarks};
  };

  return {
    getBookmarks
  };
};

//------------------------------------------------------------
// Reducers
//------------------------------------------------------------


const initialBookmarks = [
    {"id":1, "title": "Остров Сокровищ", "url": "https://www.youtube.com/watch?v=O9J1INLXJNY", "category": "Adventure" },
    {"id":2, "title": "Matrix", "url": "http://www.imdb.com/title/tt0133093/", "category": "Sci-fi" },
    {"id":3, "title": "Saw", "url": "http://www.imdb.com/title/tt0387564/?ref_=nv_sr_1", "category": "Thriller" },
    {"id":4, "title": "Ace Ventura", "url": "http://www.imdb.com/title/tt0109040/?ref_=nv_sr_2", "category": "Comedy" }
];

export const bookmarks = (state = initialBookmarks, {type, payload}) => {
  switch (type) {
    case GET_BOOKMARKS:
      return payload || state;
    default:
      return state;
  }
};