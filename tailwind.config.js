/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                vietnam: ["Be Vietnam Pro", "sans-serif"]
            },
            colors: {
                m_birght_red: "hsl(12, 88%, 59%)",
                m_dark_blue: "hsl(228, 39%, 23%)",
                m_dark_grayish_blue: "hsl(227, 12%, 61%)",
                m_very_dark_blue: "hsl(233, 12%, 13%)",
                m_very_pale_red: "hsl(13, 100%, 96%)",
                m_very_light_gray: "hsl(0, 0%, 98%)"
            }
        },
    },
    plugins: [],
}

