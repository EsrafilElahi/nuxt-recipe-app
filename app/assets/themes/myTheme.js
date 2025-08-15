import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      default: "#d0c",
      50: "{yellow.50}",
      100: "{yellow.100}",
      200: "{yellow.200}",
      300: "{yellow.300}",
      400: "{yellow.400}",
      500: "{yellow.500}",
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
