import {createTheme} from "@mui/material";

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#111E44',
        },
        secondary: {
            main: '#f50057',
        },
        success: {
            main: '#219653',
        },
        info: {
            main: '#3361E9',
        },
        background: {
            default: '#EDF1F7',
        },
    },
};

//EDF1F7

const themeWSP = createTheme(themeOptions);

export default themeWSP;
