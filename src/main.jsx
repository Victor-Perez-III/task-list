import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset, extendTheme, ColorModeScript, localStorageManager } from "@chakra-ui/react";
import App from "./App";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
