import { create } from "zustand";

export const useStore = create((set) => ({
  inputData: {
    name: "",
    age: "",
    city: "",
    code: "",
  },
  saveData: [],

  setInputData: (Name, value) =>
    set((state) => ({ inputData: { ...state.inputData, [Name]: value } })),

  addValue: () =>
    set((state) => ({
      saveData: [...state.saveData, state.inputData],
      inputData: { name: "", age: "", city: "", code: "" }, })),

      deleteValue : (nametodelete) =>
        set((state) => ({
            saveData : [...state.saveData.filter((item) => item.name !== nametodelete)]
        }))

}));
