import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }

}

export interface FavoriteEventArgs {
  newValue: true
}
