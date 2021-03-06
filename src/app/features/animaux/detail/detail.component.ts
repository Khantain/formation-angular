import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Alimentation } from 'src/app/shared/models/alimentation';
import { Famille } from 'src/app/shared/models/famille';
import { UniqueValidator } from 'src/app/shared/validators/unique.validator';
import { Animal } from '../../../shared/models/animal';
import { AnimauxService } from '../animaux.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailAnimalComponent implements OnInit {

  readonly title = `Detail de l'animal`;

  animal$: Observable<Animal>;
  familles$: Observable<Array<Famille>>;
  alimentations$: Observable<Array<Alimentation>>;
  form: FormGroup;
  isLoaded: boolean;
  estMalade: boolean;
  animal: Animal;

  get identificationForm() {
    return this.form.get('identification') as FormGroup;
  }
  get santeForm() {
    return this.form.get('sante') as FormGroup;
  }
  get alimentationForm() {
    return this.form.get('alimentation') as FormGroup;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AnimauxService,
    private validator: UniqueValidator,
    private fb: FormBuilder
  ) { }
  
  ngOnInit() {
    this.createForm();
    this.animal$ = this.route.paramMap.pipe(
      switchMap(params => this.service.getAnimal(+params.get('id'))),
      tap(animal => {
        if (animal) {
          this.animal = animal;
          this.identificationForm.get('nom').setAsyncValidators(null);
        }
      })
    );

    this.familles$ = this.service.getFamilles();
    this.alimentations$ = this.service.getAlimentations();
  }

  createForm() {
    this.form = this.fb.group({
      identification: this.fb.group({
        nom: ['',
          [Validators.required, Validators.maxLength(15)],
          [this.validator.validate.bind(this.validator)]
        ],
        dateNaissance: ['',
          [Validators.required]
        ],
        famille: [''],
      }),
      sante: this.fb.group({
        estMalade: [''],
        poids: ['']
      }),
      alimentation: this.fb.group({
        alimentation: ['']
      })
    });
  }

  retourListe() {
    this.router.navigate(['/animaux']);
  }

  save() {
    console.log(this.form.value);
  }

  onMaladieChange(value: boolean) {
    this.estMalade = value;
  }
}
