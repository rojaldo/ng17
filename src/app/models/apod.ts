export class Apod{
    
    private _date = '';
    private _explanation = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _title = '';
    private _url = '';
    private _isImage = false;
    private _isVideo = false;
    private _videoId = '';

    constructor(json?: any){
        if(json){
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this.mediaType === 'image' ? this._isImage = true : this._isImage = false;
            this.mediaType === 'video' ? this._isVideo = true : this._isVideo = false;
            this._serviceVersion = json.service_version;
            this._title = json.title;
            this._url = json.url;
            if(this._isVideo){
                this._processVideoId();
            }

        }
    }

    get date(){
        return this._date;
    }

    get explanation(){
        return this._explanation;
    }

    get hdurl(){
        return this._hdurl;
    }

    get mediaType(){
        return this._mediaType;
    }

    get serviceVersion(){
        return this._serviceVersion;
    }

    get title(){
        return this._title;
    }

    get url(){
        return this._url;
    }

    get isImage(){
        return this._isImage;
    }

    get isVideo(){
        return this._isVideo;
    }

    get videoId(){
        return this._videoId;
    }

    private _processVideoId(): void{
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = this.url.match(regExp);
        (match&&match[7].length==11)? this._videoId = match[7] : false;        
    }

}