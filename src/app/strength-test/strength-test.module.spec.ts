import { StrengthTestModule } from './strength-test.module';

describe('StrengthTestModule', () => {
  let strengthTestModule: StrengthTestModule;

  beforeEach(() => {
    strengthTestModule = new StrengthTestModule();
  });

  it('should create an instance', () => {
    expect(strengthTestModule).toBeTruthy();
  });
});
