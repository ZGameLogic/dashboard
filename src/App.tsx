import { SiUbiquiti } from "react-icons/si";
import LinkCard from "./components/LinkCard.tsx";

function App() {
  return (
    <>
        <LinkCard link={'https://unifi.ui.com'} title={'Unifi UI'} icon={<SiUbiquiti size={60}/>} />
    </>
  )
}

export default App
