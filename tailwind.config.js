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
        container: {
            padding: {
                DEFAULT: "15rem",
            },
        },
        extend: {
            fontFamily: {
                preahvihear: ["'Preahvihear'", "sans-serif"],
                plusjakartasans: ["'Plus Jakarta Sans'", "sans-serif"],
                poppins: ["'Poppins'", "sans-serif"],
            },
            colors: {
                main: "#11071F",
                navbar: "#1A0B2E",
                primary: "#7127BA",
                secondary: "#693B93",
            },
            backgroundImage: {
                "gradient-radial-primary":
                    "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
                "gradient-radial-secondary":
                    "radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%);",
                "gradient-linear-1":
                    "linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%);",
                "gradient-linear-2":
                    "linear-gradient(95.56deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%);",
                "gradient-linear-3":
                    "linear-gradient(149.88deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%);",
            },
        },
    },
    plugins: [],
};
