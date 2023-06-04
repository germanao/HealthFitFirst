import { StatusBar } from 'expo-status-bar';
import Routes from './routes';
import { DataLocalProvider } from './hooks/data';

const Main: React.FC = () => {

  return (
    <DataLocalProvider>
      <StatusBar style="light" />
      <Routes />
    </DataLocalProvider>
  )
}

export default Main; 