import CardTelasPet from '../components/CardTelasPet'
import CardSustituyendoMadera from '../components/CardSustituyendoMadera'
import CardSostenible from '../components/CardSostenible'
import CardImpacto from '../components/CardImpacto'
import ModalTelasPet from '../components/ModalTelasPet'
import ModalMadera from '../components/ModalMadera'
import ModalSostenibilidad from '../components/ModalSostenibilidad'

function Prensa() {
  return (
    <div className='flex flex-col items-center mb-20'>
      <CardTelasPet />
      <CardSustituyendoMadera/>
      <CardSostenible/>
      <CardImpacto/>
      <ModalTelasPet/>
      <ModalMadera/>
      <ModalSostenibilidad/>
    </div>
  )
}



export default Prensa