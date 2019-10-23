import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Animal } from '../animal';
import { AnimauxService } from '../animaux.service';
import { UniqueValidator } from 'src/app/shared/unique.validator';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailAnimalComponent implements OnInit {

  readonly title = `Detail de l'animal`;

  animal$: Observable<Animal>;
  form: FormGroup;
  isLoaded: boolean;
  estMalade: boolean;

  get identificationForm() {
    return this.form.get('identification') as FormGroup;
  }
  get santeForm() {
    return this.form.get('sante') as FormGroup;
  }
  get alimentationForm() {
    return this.form.get('alimentation') as FormControl;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AnimauxService,
    private validator: UniqueValidator,
    private fb: FormBuilder
  ) {}
  
  ngOnInit() {
    this.createForm();
    this.animal$ = this.route.paramMap.pipe(
      switchMap(params => this.service.getAnimal(+params.get('id'))),
      tap(animal => {
        if (animal) {
          this.identificationForm.get('nom').setAsyncValidators(null);
        }
      })
    );
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
        famille: new FormControl(),
      }),
      sante: this.fb.group({
        estMalade: new FormControl(),
        poids: new FormControl()
      }),
      alimentation: this.fb.group({
        alimentation: new FormControl()
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
