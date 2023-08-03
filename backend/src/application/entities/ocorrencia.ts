import { Endereco } from "./endereco";
import { Relatorio } from "./relatorio";
import { Tecnico } from "./tecnico";

interface OcorrenciaProps {
  acionamento: string,
  relato: string,
  num_casas: number,
  status: boolean,
  data: Date,
  relatorios?: Relatorio[],
  tecnico?: Tecnico,
  endereco: Endereco
}

export class Ocorrencia {
  private _id: number
  private props: OcorrenciaProps

  constructor(props: OcorrenciaProps, id?: number) {
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

  public set acionamento(acionamento: string) {
    this.props.acionamento = acionamento;
  }

  public get acionamento(): string {
    return this.props.acionamento;
  }

  public set num_casas(num_casas: number) {
    this.props.num_casas = num_casas;
  }

  public get num_casas(): number {
    return this.props.num_casas;
  }

  public set status(status: boolean) {
    this.props.status = status;
  }

  public get status(): boolean {
    return this.props.status;
  }

  public set relatorios(relatorio: Relatorio[]) {
    this.props.relatorios = relatorio;
  }

  public get relatorios(): Relatorio[] {
    return this.props.relatorios;
  }

  public set tecnico(tecnico: Tecnico) {
    this.props.tecnico = tecnico;
  }

  public get tecnico(): Tecnico {
    return this.props.tecnico;
  }

  public set endereco(endereco: Endereco) {
    this.props.endereco = endereco;
  }

  public get endereco(): Endereco {
    return this.props.endereco;
  }

  public set data(data: Date) {
    this.props.data = data;
  }

  public get data(): Date {
    return this.props.data;
  }
}