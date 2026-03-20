import app from "./app.js";

const PORT: number = app.get("PORT");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});