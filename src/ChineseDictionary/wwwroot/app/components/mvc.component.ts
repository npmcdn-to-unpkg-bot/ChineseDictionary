﻿import {Component, OnInit} from "@angular/core";

@Component({
    selector: "mvc",
    templateUrl: "/home/about"
})
export class MvcComponent implements OnInit {
    message: string;

    constructor() { }

    ngOnInit() {
        this.message = "The '/partial/message' path was used as the Angular2 'templateUrl'. However, this routes through the 'PartialController' hitting the 'Message' action and is served after standard MVC pre-processing. Likewise, there is a 'message' property bound to the <blockqoute> element."
    }
}