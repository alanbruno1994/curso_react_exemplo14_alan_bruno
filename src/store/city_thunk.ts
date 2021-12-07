import { actionsCity } from "./city"
//Isso aqui e o que se chama de Thunk, perceba que ele retorna uma funcao que vai receber aquele
//dispatch de forma automatica, esse dispatch e o mesmo que se usa nos componentes para disparar
//uma acao
export default function cityThunk(cep:string)
{
    return async (dispatch:any)=>{
        dispatch(actionsCity.setLoading(true))
        const fetchCity=async ()=>{
            const response= await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data= await response.json()
            dispatch(actionsCity.setCity(data.localidade))
            dispatch(actionsCity.setUf(data.uf))
            dispatch(actionsCity.setDistrict(data.bairro))          
        }
        await fetchCity()
        dispatch(actionsCity.setLoading(false))
    }
}