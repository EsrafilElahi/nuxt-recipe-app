import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      default: "#d0c",
      50: "#d0c",
      100: "#d0c",
      200: "#d0c",
      300: "#d0c",
      400: "{yellow.400}",
      500: "#d0c",
      600: "{yellow.600}",
      700: "{yellow.700}",
      800: "{yellow.800}",
      900: "{yellow.900}",
      950: "{yellow.950}",
    },

    colorScheme: {
      light: {
        formField: {
          hoverBorderColor: "{primary.color}",
        },
      },
      dark: {
        formField: {
          hoverBorderColor: "{primary.color}",
        },
      },
    },
  },
});

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: ".prime-dark",
  },
};
