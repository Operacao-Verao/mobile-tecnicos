interface DadosVistoriaProps {
    tipoVistoria: string
}

export class DadosVistoria {
    private _id: number
    private props: DadosVistoriaProps

    constructor(props: DadosVistoriaProps, id?: number) {
        if(id) {
            this._id = id;
        }
        this.props = props;
    }

    public set id(id: number) {
        this._id = id;
    }
    
    public get id(): number {
        return this._id;
    }

    public set tipoVistoria(tipoVistoria: string) {
        this.props.tipoVistoria = tipoVistoria;
    }

    public get tipoVistoria(): string {
        return this.props.tipoVistoria;
    }
}