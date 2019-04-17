interface MSPlainButtonUninitialized<InitializedType = MSPlainButton> extends MSHoverButtonUninitialized<MSPlainButton> {}

interface MSPlainButton extends MSHoverButton {
}

declare const MSPlainButton: {
  alloc(): MSPlainButtonUninitialized;
  class(): MSPlainButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}
