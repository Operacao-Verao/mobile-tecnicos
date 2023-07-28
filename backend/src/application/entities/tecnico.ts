import { randomUUID } from "node:crypto"

interface TecnicoProps {
  nome: string,
  email: string,
  senha: string 
}

export class Tecnico {
  private _id: string
  private props: TecnicoProps

  constructor(props: TecnicoProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id
  }

  public set nome(nome: string) {
    this.props.nome = nome;
  }

  public get nome(): string {
    return this.props.nome
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email
  }

  public set senha(senha: string) {
    this.props.senha = senha
  }

  public get senha(): string {
    return this.props.senha;
  }
}