import { SafePipe } from "./safe.pipe";
import { DomSanitizer } from "@angular/platform-browser";
import { TestBed } from "@angular/core/testing";

describe("SafePipe", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafePipe],
      providers: [
        SafePipe,
        {
          provide: DomSanitizer,
          useValue: { bypassSecurityTrustResourceUrl() {} },
        },
      ],
    });
  });

  it("create an instance", () => {
    // const pipe = new SafePipe();
    // expect(pipe).toBeTruthy();
    let pipe = TestBed.get(SafePipe);
    expect(pipe).toBeTruthy();
  });
});
