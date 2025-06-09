@import "tailwindcss";

/* #f7faff */
/* #f2f0f1 */
/* #e5eef4 */
/* #269dff */
/* #fafbff */
/* #f4f5ff */
/* #f4f5ff */
/* #261559 */
/* #2f1c6a */

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
