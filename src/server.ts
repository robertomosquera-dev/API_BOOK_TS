import app from "./app.js";

const PORT: number = Number(process.env.PORT) ?? 4030;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});