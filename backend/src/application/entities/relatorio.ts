import { Afetados } from "./afetados"
import { Animais } from "./animais"
import { DadosVistoria } from "./dadosVistoria"

export enum GRAVIDADE {
  NENHUM = 0,
  RISCO = 1,
  DESASTRE = 2,
};

export enum AREA_AFETADA {
   INESPECIFICADO = 0,
   PUBLICA = 1,
   PARTICULAR = 2,
};

export enum TIPO_CONSTRUCAO {
  INESPECIFICADO = 0,
  ALVENARIA = 1,
  MADEIRA = 2,
  MISTA = 3,
};

export enum TIPO_TALUDE {
  INESPECIFICADO = 0,
  NATURAL = 1,
  DE_CORTE = 2,
  ATERRO = 3,
};

export enum VEGETACAO {
  NENHUMA = 0,
  RASTEIRA = 1,
  ARVORES = 2,
};

export enum SITUACAO_VITIMAS {
  INESPECIFICADO = 0,
  DESABRIGADOS = 1,
  DESALOJADOS = 2,
};

export enum INTERDICAO {
  NAO = 0,
  PARCIAL = 1,
  TOTAL = 2,
};

interface RelatorioProps {
  gravidade: number,
  relatorio: string,
  encaminhamento: string,
  memorando: string,
  oficio: string,
  processo: string,
  assunto: string,
  observacoes: string,
  areaAfetada: number,
  tipoConstrucao: number,
  tipoTalude: number,
  vegetacao: number,
  interdicao: number,
  danosMateriais: boolean,
  situacaoVitimas: number,
  dataGeracao: Date,
  dataAtendimento: Date
  fotos: {
    url: string
  }[],
  dadosVistoria: DadosVistoria
  afetados?: Afetados
  animais?: Animais
}

export class Relatorio {
  private _id: number
  private props: RelatorioProps

  constructor(props: RelatorioProps, id?: number) {
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

  public set interdicao(interdicao: number) {
    this.props.interdicao = interdicao;
  }

  public get interdicao(): number {
    return this.props.interdicao;
  }

  public set situacaoVitimas(situacaoVitimas: number) {
    this.props.situacaoVitimas = situacaoVitimas;
  }

  public get situacaoVitimas(): number {
    return this.props.situacaoVitimas;
  }

  public set gravidade(gravidade: number) {
    this.props.gravidade = gravidade;
  }

  public get gravidade(): number {
    return this.props.gravidade;
  }

  public set relatorio(relatorio: string) {
    this.props.relatorio = relatorio;
  }

  public get relatorio(): string {
    return this.props.relatorio;
  }

  public set encaminhamento(encaminhamento: string) {
    this.props.encaminhamento = encaminhamento;
  }

  public get encaminhamento(): string {
    return this.props.encaminhamento;
  }

  public set memorando(memorando: string) {
    this.props.memorando = memorando;
  }

  public get memorando(): string {
    return this.props.memorando;
  }

  public set oficio(oficio: string) {
    this.props.oficio = oficio;
  }

  public get oficio(): string {
    return this.props.oficio;
  }

  public set processo(processo: string) {
    this.props.processo = processo;
  }

  public get processo(): string {
    return this.props.processo;
  }

  public set assunto(assunto: string) {
    this.props.assunto = assunto;
  }

  public get assunto(): string {
    return this.props.assunto;
  }

  public set observacoes(observacoes: string) {
    this.props.observacoes = observacoes;
  }

  public get observacoes(): string {
    return this.props.observacoes;
  }

  public set areaAfetada(areaAfetada: number) {
    this.props.areaAfetada = areaAfetada;
  }

  public get areaAfetada(): number {
    return this.props.areaAfetada;
  }

  public set tipoConstrucao(tipoConstrucao: number) {
    this.props.tipoConstrucao = tipoConstrucao;
  }

  public get tipoConstrucao(): number {
    return this.props.tipoConstrucao;
  }

  public set tipoTalude(tipoTalude: number) {
    this.props.tipoTalude = tipoTalude;
  }

  public get tipoTalude(): number {
    return this.props.tipoTalude;
  }

  public set vegetacao(vegetacao: number) {
    this.props.vegetacao = vegetacao;
  }

  public get vegetacao(): number {
    return this.props.vegetacao;
  }

  public set danosMateriais(danosMateriais: boolean) {
    this.props.danosMateriais = danosMateriais;
  }

  public get danosMateriais(): boolean {
    return this.props.danosMateriais;
  }

  public set afetados(afetados: Afetados) {
    this.props.afetados = afetados;
  }

  public get afetados(): Afetados {
    return this.props.afetados;
  }

  public set animais(animais: Animais) {
    this.props.animais = animais;
  }

  public get animais(): Animais {
    return this.props.animais;
  }

  public set dadosVistoria(dadosVistoria: DadosVistoria) {
    this.props.dadosVistoria = dadosVistoria;
  }

  public get dadosVistoria(): DadosVistoria {
    return this.props.dadosVistoria;
  }

  public set fotos(fotos: {url: string}[]) {
    this.props.fotos = fotos;
  }

  public get fotos(): {url: string}[] {
    return this.props.fotos;
  }

  public set dataGeracao(dataGeracao: Date) {
    this.props.dataGeracao = dataGeracao;
  }

  public get dataGeracao(): Date {
    return this.props.dataGeracao;
  }

  public set dataAtendimento(dataAtendimento: Date) {
    this.props.dataAtendimento = dataAtendimento;
  }

  public get dataAtendimento(): Date {
    return this.props.dataAtendimento;
  }
}