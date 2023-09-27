import { Residencial } from "./residencial";

interface CasaProps {
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
}