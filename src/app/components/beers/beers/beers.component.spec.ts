import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponent } from './beers.component';
import { BeersService } from '../../../services/beers.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeersComponent],
      providers: [BeersService, HttpClient, HttpHandler]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
