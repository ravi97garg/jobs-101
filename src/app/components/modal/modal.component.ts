import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() isOpen: boolean = false;
  @Output() handleClose = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
}
