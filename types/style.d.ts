// Lets TypeScript accept side-effect imports of stylesheets (e.g.
// `import "./globals.scss"` in app/layout.tsx). Next compiles these, but TS
// has no built-in declaration for a bare `.scss` / `.css` import.
declare module "*.scss";
declare module "*.css";
