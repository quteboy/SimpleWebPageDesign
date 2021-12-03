import {createTheme} from "@material-ui/core/styles";

const primeBlue = '#358ed7';
const primeGreen = '#7ec855'

export default createTheme({
    palette: {
        common: {
            blue: `${primeBlue}`,
            green: `${primeGreen}`
        },
        primary: {
            main: `${primeBlue}`
        },
        secondary: {
            main: `${primeGreen}`
        }
    }
})