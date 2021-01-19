const initialState = {
  currentCategory:{},
  categories: [], 
  message:'',
  isLoading: false,
  deleteProductError:'',
  products: [],
  cart: [],
  editProduct:{},
  options : [
    { id: 1, categoryName: "Beverages" },
    { id: 2, categoryName: "Condiments" },
    { id: 3, categoryName: "Confections" },
    { id: 4, categoryName: "Dairy Products" },
    { id: 5, categoryName: "Grains/Cereals" },
    { id: 6, categoryName: "Meat/Poultry" },
    { id: 7, categoryName: "Produce" },
    { id: 8, categoryName: "Seafood" },
  ],
 
}

export default initialState;