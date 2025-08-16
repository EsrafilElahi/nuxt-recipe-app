import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      default: "#f6b100",
      50: "#fff8e6",
      100: "#fdefcc",
      200: "#fce099",
      300: "#fad066",
      400: "#f8c133",
      500: "#f6b100",
    },

    secondary: {
      default: "#181a20",
      50: "#e8e9e9",
      100: "#d1d1d2",
      200: "#a3a3a6",
      300: "#747679",
      400: "#46484d",
      500: "#181a20",
    },

    colorScheme: {
      light: {
        // root: {
        //   background: "#d0c",
        //   color: "{surface.700}",
        // },
        // subtitle: {
        //   color: "{surface.500}",
        // },

        card: {
          shadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // سایه پیش‌فرض برای کارت
        },

        primary: {
          color: "#f6b100",
          inverseColor: "#ffffff",
          hoverColor: "#f8c133",
          activeColor: "#f6b100",
        },
        secondary: {
          color: "#181a20",
          inverseColor: "#ffffff",
          hoverColor: "#46484d",
          activeColor: "#181a20",
        },

        highlight: {
          background: "{zinc.950}",
          focusBackground: "{zinc.700}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },

        // button :{
        //   outlined: {
        //     borderWidth: '1px',
        //     borderColor: '{primary.color}', // استفاده از رنگ primary
        //     hoverBorderColor: '{primary.hoverColor}',
        //     activeBorderColor: '{primary.activeColor}',
        //     textColor: '{primary.color}',
        //     hoverTextColor: '#d0c',
        //     activeTextColor: '{primary.activeColor}',
        //     background: 'transparent',
        //     hoverBackground: '{primary.300}', // رنگ پس‌زمینه هنگام هاور
        //     activeBackground: '{primary.100}'
        //   }
        // },

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
