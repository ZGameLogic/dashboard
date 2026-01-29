import { SiUbiquiti, SiSynology, SiTruenas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import LinkCard from "./components/LinkCard.tsx";
import {Stack} from "@mui/material";

function App() {
  return (
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" padding={2}>
        <LinkCard link={'https://unifi.ui.com'} title={'Unifi UI'} icon={<SiUbiquiti size={60}/>} />
        <LinkCard link={'http://192.168.1.11:5000'} title={'Synology NAS'} icon={<SiSynology size={60}/>} />
        <LinkCard link={'http://192.168.1.12'} title={'TrueNAS'} icon={<SiTruenas size={60}/>} />
        <LinkCard link={'https://github.com/ZGameLogic'} title={'Github'} icon={<FaGithub size={60}/>} />
      </Stack>
  )
}

export default App
