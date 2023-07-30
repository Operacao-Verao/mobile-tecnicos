interface TecnicoProps {
  nome: string,
  email: string,
  senha: string 
}

export class Tecnico {
  private _id: number
  private props: TecnicoProps

  constructor(props: TecnicoProps, id?: number) {
    if(id) {
      this._id = id;
    }
    this.props = props;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get id(): number {
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