import { ElementRef, AfterViewInit, DoCheck, EventEmitter, IterableDiffers, ChangeDetectorRef, NgZone } from '@angular/core';
export declare class GMap implements AfterViewInit, DoCheck {
    private el;
    private cd;
    private zone;
    style: any;
    styleClass: string;
    options: any;
    overlays: any[];
    onMapClick: EventEmitter<any>;
    onOverlayClick: EventEmitter<any>;
    onOverlayDragStart: EventEmitter<any>;
    onOverlayDrag: EventEmitter<any>;
    onOverlayDragEnd: EventEmitter<any>;
    differ: any;
    map: any;
    constructor(el: ElementRef, differs: IterableDiffers, cd: ChangeDetectorRef, zone: NgZone);
    ngAfterViewInit(): void;
    bindOverlayEvents(overlay: any): void;
    ngDoCheck(): void;
    bindDragEvents(overlay: any): void;
    getMap(): any;
}
