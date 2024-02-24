type ConditionalReference<T> = { [key in keyof T]: (...args: any) => string };

class CreateTailwindStyle<T> extends Set {

    private tempStyle = "";
    private conditional: ConditionalReference<T> = {} as ConditionalReference<T>;

    constructor(styles: string[]) {
        super(styles);
    }

    public addConditional(key: T, conditionalFunc: (...args: any) => string) {
        this.tempStyle = "";
        this.conditional[key as keyof typeof this.conditional] = conditionalFunc;
        return this;
    }

    public callConditional(key: T, ...args: any) {
        const conditional = this.conditional[key as keyof typeof this.conditional];
        if (conditional) {
            this.tempStyle += ` ${conditional(...args)}`
        }
        return this;
    }

    public toClassName(className: string = "") {
        try {
            return `${Array.from(this).join(' ')} ${this.tempStyle} ${className}`.trim();
        } finally {
            this.tempStyle = "";
        }
    }

}

export default CreateTailwindStyle;