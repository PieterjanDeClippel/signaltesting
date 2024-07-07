import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BsCheckboxComponent } from "./checkbox.component";

@Component({
    selector: 'demo-checkbox-test',
    template: `
        <bs-checkbox>
            This is a checkbox
        </bs-checkbox>`
})
class BsCheckboxTestComponent { }

describe('BsCheckboxComponent', () => {
    let component: BsCheckboxTestComponent;
    let fixture: ComponentFixture<BsCheckboxTestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                // Mock dependencies
            ],
            declarations: [
                // Unit to test
                BsCheckboxComponent,

                // Mock dependencies

                // Testbench
                BsCheckboxTestComponent,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BsCheckboxTestComponent);
        await fixture.whenStable();
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
