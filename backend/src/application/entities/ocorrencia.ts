import { randomUUID } from "crypto"
import { Relatorio } from "./relatorio";

interface OcorrenciaProps {
  acionamento: string,
  relato: string,
  num_casas: number,
  status: string,
  data: Date,
  relatorio: Relatorio
}

export class Ocorrencia {
  private _id: string
  private props: OcorrenciaProps

  constructor(props: OcorrenciaProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
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

  public set status(status: string) {
    this.props.status = status;
  }

  public get status(): string {
    return this.props.status;
  }

  public set data(data: Date) {
    this.props.data = data;
  }

  public get data(): Date {
    return this.props.data;
  }
}