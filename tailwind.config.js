/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
 
     
  
    
      height: {
        '100': '20rem', 
        '144': '36rem',
        '160': '40rem',
        '170': '45rem',
     
        }, 


      width: {
        '100': '20rem',  
        '122': '25rem',  
        '144': '30em',
        '166': '35rem',
        '188': '40rem',
        '1/8': '12.5%', 
        '2/8': '25%',   
        '3/8': '37.5%', 
        '4/8': '50%',   
        '5/8': '62.5%', 
        '6/8': '75%',   
        '7/8': '87.5%', 
        '8/8': '100%',  
      },
      aspectRatio: {
        'square': '1 / 1',         
        'landscape': '16 / 9',     
        'portrait': '9 / 16',      
        'golden': '1.618 / 1',     
        'widescreen': '21 / 9',    
        '4/3': '4 / 3',           
        '3/2': '3 / 2',         
        '2/1': '2 / 1',           
      },
      backgroundColor:{
        'appmine':'#849B25'
      },      

      colors: {
        border: "#849B25",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shine: "shine var(--duration) infinite linear",


      },
    },
  },
  
  plugins: [require("tailwindcss-animate")],
};

