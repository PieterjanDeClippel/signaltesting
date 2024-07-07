import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockDirective } from 'ng-mocks';
import { BsCheckboxComponent } from "./checkbox.component";
import { BsCheckboxGroupDirective } from '../checkbox-group/checkbox-group.directive';

@Component({
    selector: 'demo-checkbox-test',
    template: `
        <div bsCheckboxGroup>
            <bs-checkbox>
                This is a checkbox
            </bs-checkbox>
        </div>`
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
                MockDirective(BsCheckboxGroupDirective),

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
