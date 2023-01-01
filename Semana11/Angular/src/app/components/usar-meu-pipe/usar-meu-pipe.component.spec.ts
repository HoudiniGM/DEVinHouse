import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarMeuPipeComponent } from './usar-meu-pipe.component';

describe('UsarMeuPipeComponent', () => {
  let component: UsarMeuPipeComponent;
  let fixture: ComponentFixture<UsarMeuPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsarMeuPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsarMeuPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
