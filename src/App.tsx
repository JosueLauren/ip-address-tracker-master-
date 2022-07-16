import { GlobalStyle } from "./styles/global"
import { Header } from './components/Header'
import { Map } from './components/Map'


import { DataLocationProvider } from './context/DataLocationContext'


function App() {
  return (
    <>
    <DataLocationProvider>
      <Header/>
      <Map/>
      <GlobalStyle/>
    </DataLocationProvider>
    </>
  )}
export default App
