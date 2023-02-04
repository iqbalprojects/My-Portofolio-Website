/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                preahvihear: ["'Preahvihear'", "sans-serif"],
                plusjakartasans: ["'Plus Jakarta Sans'", "sans-serif"],
            },
            colors: {
                main: "#11071F",
                navbar: "#1A0B2E",
                primary: "#7127BA",
            },
            backgroundImage: {
                "gradient-radial-primary":
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
                "gradient-radial-secondary":
                    "radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%);",
            },
        },
    },
    plugins: [require("tailwind-clip-path")],
};
