import { Endereco } from "./endereco";

interface ResidencialProps {
  numero: string,
  endereco: Endereco
}

export class Residencial {
  private _id: number
  private props: ResidencialProps

  constructor(props: ResidencialProps, id?: number) {
    if(id) {
      this._id = id;
    }
    this.props = props;
  }

  public get numero(): string {
    return this.props.numero;
  }

  public set numero(numero: string) {
    this.props.numero = numero;
  }

  public get endereco(): Endereco {
    return this.props.endereco;
  }

  public set endereco(endereco: Endereco) {
    this.props.endereco = endereco;
  }
}