import create from 'zustand'

const useStore = create((set) => ({
    filter: '',
    setFilter: () => set((state) => ({filter: state.filter.filer}))
}))