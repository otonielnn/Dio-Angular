import {
	Component,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	quantidade:number = 0;

	constructor() {}

	incrementar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	//após alteração, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	// checked -> content -> view

	//Quado o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	//após alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	//depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	ngOnDestroy(): void {
		console.log("good bye my friend")
	}
}
