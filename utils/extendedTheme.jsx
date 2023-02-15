import { defineStyle, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: "#128ECC",
        secondary: "#CEECFA",
        primaryHover: "#107bb0",
        fontPrimary: "#414141",
        borderPrimary: "#E0E0E0",
        backgroundPrimary: "#FFFFFF",
    },
    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'Nunito', sans-serif`
    }
});

export default theme;