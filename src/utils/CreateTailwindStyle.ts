type ConditionalReference<T> = { [key in keyof T]: (...args: any) => string | string[] };

class CreateTailwindStyle<T> extends Set {

    private tempStyle = "";
    private conditional: ConditionalReference<T> = {} as ConditionalReference<T>;

    constructor(styles: string[]) {
        super(styles);
    }

    public addConditional(key: T, conditionalFunc: (...args: any) => string | string[]) {
        this.tempStyle = "";
        this.conditional[key as keyof typeof this.conditional] = conditionalFunc;
        return this;
    }

    public callConditional(key: T, ...args: any) {
        const conditional = this.conditional[key as keyof typeof this.conditional];
        if (conditional) {
            const tailwindRules = conditional(...args);
            if (Array.isArray(tailwindRules)) {
                this.tempStyle = Array.from(new Set(tailwindRules)).join(' ');
            } else {
                this.tempStyle += ` ${tailwindRules}`
            }
        }
        return this;
    }

    public toClassName(className: string | CreateTailwindStyle<any> = "") {
        try {
            if (className instanceof CreateTailwindStyle) {
                return `${Array.from(new Set([...Array.from(this), ...Array.from(className)])).join(' ')}`;
            }
            return `${Array.from(this).join(' ')} ${this.tempStyle} ${className}`.trim().replaceAll(/\s+/g, ' ');
        } finally {
            this.tempStyle = "";
        }
    }

}

export default CreateTailwindStyle;