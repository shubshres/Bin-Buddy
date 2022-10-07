import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResidentUpdateAccountInformationPage } from './resident-update-account-information.page';

describe('ResidentUpdateAccountInformationPage', () => {
  let component: ResidentUpdateAccountInformationPage;
  let fixture: ComponentFixture<ResidentUpdateAccountInformationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentUpdateAccountInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResidentUpdateAccountInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
