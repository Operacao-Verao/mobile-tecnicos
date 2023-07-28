import { Tecnico } from "@application/entities/tecnico";

export function makeTecnico() {
    return new Tecnico({
        nome: "Técnico 1",
        email: "tecnico@email.com",
        senha: "senha123"
    })
}