import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProperDisposalMethodsPage } from './proper-disposal-methods.page';

describe('RegistrationClientPage', () => {
  let component: ProperDisposalMethodsPage;
  let fixture: ComponentFixture<ProperDisposalMethodsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperDisposalMethodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProperDisposalMethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
