interface BCHighlightImageCellUninitialized<InitializedType = BCHighlightImageCell> extends NSImageCellUninitialized<BCHighlightImageCell> {}

interface BCHighlightImageCell extends NSImageCell {
}

declare const BCHighlightImageCell: {
  alloc(): BCHighlightImageCellUninitialized;
  class(): BCHighlightImageCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;
  accessInstanceVariablesDirectly(): boolean;

}
