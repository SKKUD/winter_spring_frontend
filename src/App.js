import Main from './pages/Main';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4747C9'
        },
        secondary: {
            main: '#50B7A7'
        }
    }
});
function App() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('/hello')
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Main />
            <ul>
                {message.map((text, index) => (
                    <li key={`${index}-${text}`}>{text}</li>
                ))}
            </ul>
        </ThemeProvider>
    );
}

export default App;
