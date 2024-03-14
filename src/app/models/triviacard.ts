export class TriviaCard {
    private _category = '';
    private _type = '';
    private _difficulty = '';
    private _question = '';
    private _correctAnswer = '';
    private _incorrectAnswers: string[] = [];
    private _answers: string[] = [];

    private _answered = false;

    constructor(json?: any) {
        if (json) {
            this._category = json.category;
            this._type = json.type;
            this._difficulty = json.difficulty;
            this._question = json.question;
            this._correctAnswer = json.correct_answer;
            this._incorrectAnswers = json.incorrect_answers;
            this._answers = [this._correctAnswer, ...this._incorrectAnswers];
        }
    }

    get category(): string {
        return this._category;
    }

    get type(): string {
        return this._type;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    get question(): string {
        return this._question;
    }

    get correctAnswer(): string {
        return this._correctAnswer;
    }

    get answers(): string[] {
        return this._answers;
    }

    get answered(): boolean {
        return this._answered;
    }

    set answered(value: boolean) {
        this._answered = value;
    }
}