import { createSlice, nanoid} from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name  :'cars',
    initialState : {
        searchTerm : '',
        data : []
    },
    reducers  : {
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        addCar(state,action){
            // assuming that the payload will have the name and cost proeperty
            // action.payload = {name:"some name" , cost : 1200 }
           state.data.push({
            name : action.payload.name,
            cost : action.payload.cost,
            id:nanoid()
           })     
        },
        removeCar(state,action){
            // assuming that the payload will have the id of the car we want to develop
            // action.payload = id 

            const updated = state.data.filter((car)=>{
                return car.id !== action.payload
            })

            state.data = updated ;
        }
    }
})

export const {changeSearchTerm , addCar , removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer;
