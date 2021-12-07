import { createSlice } from "@reduxjs/toolkit";
//Aqui gerencia dados relacionados a city, ou seja, tem os dados inciais e funcoes de atualizacao
const city=createSlice({
    name:'city',
    initialState:{loadingCity:false,uf:'',city:'',district:''},
    reducers:{
        setLoading(state,action)
        {
            state.loadingCity=action.payload
        },
        setUf(state,action)
        {
            state.uf=action.payload
        },
        setCity(state,aciton){
            state.city=aciton.payload
        },
        setDistrict(state,action){
            state.district=action.payload
        }
    }
}
)
//Aqui vai ter acesso a setLoading,setUf,setCity,setDistrict
//O componente que for usar esses metodos basta passar o dados que se deseja alterar
export const actionsCity=city.actions

export default city.reducer