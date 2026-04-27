
import './App.css'
import Button from './assets/components/Button'
import ImgComponent from './assets/components/ImageComponent'
import CounterBtn from './assets/components/CounerBtn'

function App() {

  return (
    <>
      <Button content="Contenuto dinamico passato tramite prop!"/>
      <Button content="Altra prop"/>
      <ImgComponent src="https://images.sbito.it/api/v1/sbt-ads-images-pro/images/ce/cecf6bad-a45c-4fed-a7e8-c652ba140383?rule=gallery-desktop-2x-auto" alt="Una bella punto rossa" />
      <CounterBtn />

    </>
  )
}

export default App
