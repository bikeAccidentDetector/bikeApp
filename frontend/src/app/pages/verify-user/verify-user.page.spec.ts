import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyUserPage } from './verify-user.page';

describe('VerifyUserPage', () => {
  let component: VerifyUserPage;
  let fixture: ComponentFixture<VerifyUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
