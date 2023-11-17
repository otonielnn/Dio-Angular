//decorators
function ExibirNome(target: any) {
    console.log(target);
}

//@ExibirNome
class Funcionario {}

//@ExibirNome
class Quincas {}

//class decorator
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "otoniel"})
    }
}

//attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

class Api {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("produtos");
console.log(api.name);