interface DadosVistoriaProps {
    desmoronamento: boolean,
    deslizamento: boolean,
    esgoto_escoamento: boolean,
    erosao: boolean,
    inundacao: boolean,
    incendio: boolean,
    arvores: boolean,
    infiltracao_trinca: boolean,
    judicial: boolean,
    monitoramento: boolean,
    transito: boolean,
    outros?: string
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

    public set desmoronamento(desmoronamento: boolean) {
        this.props.desmoronamento = desmoronamento;
    }

    public get desmoronamento(): boolean {
        return this.props.desmoronamento;
    }

    public set deslizamento(deslizamento: boolean) {
        this.props.deslizamento = deslizamento;
    }

    public get deslizamento(): boolean {
        return this.props.deslizamento;
    }

    public set esgoto_escoamento(esgoto_escoamento: boolean) {
        this.props.esgoto_escoamento = esgoto_escoamento;
    }

    public get esgoto_escoamento(): boolean {
        return this.props.esgoto_escoamento;
    }

    public set erosao(erosao: boolean) {
        this.props.erosao = erosao;
    }

    public get erosao(): boolean {
        return this.props.erosao;
    }

    public set inundacao(inundacao: boolean) {
        this.props.inundacao = inundacao;
    }

    public get inundacao(): boolean {
        return this.props.inundacao;
    }

    public set incendio(incendio: boolean) {
        this.props.incendio = incendio;
    }

    public get incendio(): boolean {
        return this.props.incendio;
    }

    public set arvores(arvores: boolean) {
        this.props.arvores = arvores;
    }

    public get arvores(): boolean {
        return this.props.arvores;
    }

    public set infiltracao_trinca(infiltracao_trinca: boolean) {
        this.props.infiltracao_trinca = infiltracao_trinca;
    }

    public get infiltracao_trinca(): boolean {
        return this.props.infiltracao_trinca;
    }

    public set judicial(judicial: boolean) {
        this.props.judicial = judicial;
    }

    public get judicial(): boolean {
        return this.props.judicial;
    }

    public set monitoramento(monitoramento: boolean) {
        this.props.monitoramento = monitoramento;
    }

    public get monitoramento(): boolean {
        return this.props.monitoramento;
    }

    public set transito(transito: boolean) {
        this.props.transito = transito;
    }

    public get transito(): boolean {
        return this.props.transito;
    }

    public set outros(outros: string) {
        this.props.outros = outros;
    }

    public get outros(): string {
        return this.props.outros;
    }
}