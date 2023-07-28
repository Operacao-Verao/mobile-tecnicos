import { randomUUID } from "crypto"

interface DadosVistoriaProps {
    tipoVistoria: string
}

export class DadosVistoria {
    private _id: string
    private props: DadosVistoriaProps

    constructor(props: DadosVistoriaProps, id?: string) {
        this._id = id ?? randomUUID();
        this.props = props;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    public set tipoVistoria(tipoVistoria: string) {
        this.props.tipoVistoria = tipoVistoria;
    }

    public get tipoVistoria(): string {
        return this.props.tipoVistoria;
    }
}