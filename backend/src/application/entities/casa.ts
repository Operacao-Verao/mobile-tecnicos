import { Residencial } from "./residencial";

interface CasaProps {
  residencial: Residencial,
  interdicao: number,
  complemento: string,
}

export class Casa {
  private _id: number 
  private props: CasaProps

  constructor(props: CasaProps, id?: number) {
    if(id) {
      this._id = id;
    }
    this.props = props;
  }

  public get interdicao(): number {
    return this.props.interdicao;
  }

  public set interdicao(interdicao: number) {
    this.props.interdicao = interdicao;
  }

  public get complemento(): string {
    return this.props.complemento;
  }

  public set complemento(complemento: string) {
    this.props.complemento = complemento;
  }

  public get residencial(): Residencial {
    return this.props.residencial;
  }

  public set residencial(residencial: Residencial) {
    this.props.residencial = residencial;
  }
}