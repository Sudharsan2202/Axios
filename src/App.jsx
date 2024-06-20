import { ThemeProvider, createTheme } from '@mui/material/styles'
import { purple, green } from '@mui/material/colors' ;
import CssBaseline from '@mui/material/CssBaseline';
import UserList from './UserList';
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


function App() {
 

  return (
    
    <ThemeProvider theme={theme}>
      <cssBaseline />
        <UserList />
 </ThemeProvider>
  )
}

export default App
