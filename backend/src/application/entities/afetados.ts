import { randomUUID } from "crypto";

interface AfetadosProps {
    adultos: number
    criancas: number
    idosos: number
    especiais: number
    mortos: number
    feridos: number
    enfermos: number
}

export class Afetados {
    private _id: number
    private props: AfetadosProps

    constructor(props: AfetadosProps, id?: number) {
        if(id) {
            this._id = id
        }
        this.props = props;
    }

    public set id(id: number) {
        this._id = id;
    }
    
    public get id(): number {
        return this._id;
    }

    public set adultos(adultos: number) {
        this.props.adultos = adultos;
    }

    public get adultos(): number {
        return this.props.adultos;
    }

    public set criancas(criancas: number) {
        this.props.criancas = criancas;
    }

    public get criancas(): number {
        return this.props.criancas;
    }

    public set idosos(idosos: number) {
        this.props.idosos = idosos;
    }

    public get idosos(): number {
        return this.props.idosos;
    }

    public set especiais(especiais: number) {
        this.props.especiais = especiais;
    }

    public get especiais(): number {
        return this.props.especiais;
    }

    public set mortos(mortos: number) {
        this.props.mortos = mortos;
    }

    public get mortos(): number {
        return this.props.mortos;
    }

    public set feridos(feridos: number) {
        this.props.feridos = feridos;
    }

    public get feridos(): number {
        return this.props.feridos;
    }

    public set enfermos(enfermos: number) {
        this.props.enfermos = enfermos;
    }

    public get enfermos(): number {
        return this.props.enfermos;
    }
    
}