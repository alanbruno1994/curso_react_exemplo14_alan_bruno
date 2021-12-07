import {configureStore} from '@reduxjs/toolkit'
import city from './city'
//Aqui registrar o reducer relacionado a city
const store=configureStore({
    reducer:{city}
})

export default store