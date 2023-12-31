import { randomUUID } from "crypto"

interface AnimaisProps {
    caes: number
    gatos: number
    aves: number
    equinos: number
}

export class Animais {
    private _id: number
    private props: AnimaisProps

    constructor(props: AnimaisProps, id?: number) {
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

    public set caes(caes: number) {
        this.props.caes = caes;
    }

    public get caes(): number {
        return this.props.caes;
    }

    public set gatos(gatos: number) {
        this.props.gatos = gatos;
    }

    public get gatos(): number {
        return this.props.gatos;
    }
    
    public set aves(aves: number) {
        this.props.aves = aves;
    }

    public get aves(): number {
        return this.props.aves;
    }

    public set equinos(equinos: number) {
        this.props.equinos = equinos;
    }

    public get equinos(): number {
        return this.props.equinos;
    }
}