import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyEmergencyContactsPage } from './company-emergency-contacts.page';

describe('CompanyEmergencyContactsPage', () => {
  let component: CompanyEmergencyContactsPage;
  let fixture: ComponentFixture<CompanyEmergencyContactsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEmergencyContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyEmergencyContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
