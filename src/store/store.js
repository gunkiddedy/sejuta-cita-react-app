import create from 'zustand'

export const useStore = create(set => ({
  bookmarks: [],
  addBookmarks: (books) => set((state) => ({ 
    bookmarks: state.bookmarks = books
  })),
  removeAllBookmarks: () => set(
    { bookmarks: [] },
    localStorage.removeItem('bookmarks')
  )
}))