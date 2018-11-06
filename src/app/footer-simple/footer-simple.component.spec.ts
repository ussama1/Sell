import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSimpleComponent } from './footer-simple.component';

describe('FooterSimpleComponent', () => {
  let component: FooterSimpleComponent;
  let fixture: ComponentFixture<FooterSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
