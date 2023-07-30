import { Animais } from "@application/entities/animais";

export function makeAnimais() {
    return new Animais({
        aves: 2,
        caes: 1,
        gatos: 3,
        equinos: 0
    }, 1);
}