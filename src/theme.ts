import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
    type: "light",
    primary: {
        main: "#1565c0",
        contrastText: "#f5f5f5"
    },
    background: {
        default: "#f5f5f5"
    }  
};

const theme = createMuiTheme({
    palette
});

export default theme;