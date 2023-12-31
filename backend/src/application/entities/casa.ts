import { Relatorio } from "./relatorio";

interface CasaProps {
  interdicao: number,
  complemento: string,
  relatorios?: Relatorio[],
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

  public set id(id: number) {
    this._id = id;
  }

  public get id(): number {
      return this._id;
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

  public set relatorios(relatorio: Relatorio[]) {
    this.props.relatorios = relatorio;
  }

  public get relatorios(): Relatorio[] {
    return this.props.relatorios;
  }
}