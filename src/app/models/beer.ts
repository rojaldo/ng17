export class Beer {
    
    private _id = 0;
    private _name = '';
    private _tagline = '';
    private _firstBrewed = '';
    private _description = '';
    private _imageUrl = '';
    private _abv = 0;

    constructor(json?: any){
        if(json){
            this._id = json.id;
            this._name = json.name;
            this._tagline = json.tagline;
            this._firstBrewed = json.first_brewed;
            this._description = json.description;
            this._imageUrl = json.image_url;
            this._abv = json.abv;
        }
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get tagline(){
        return this._tagline;
    }

    get firstBrewed(){
        return this._firstBrewed;
    }

    get description(){
        return this._description;
    }

    get imageUrl(){
        return this._imageUrl;
    }

    get abv(){
        return this._abv;
    }
}