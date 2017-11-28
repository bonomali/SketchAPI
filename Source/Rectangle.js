/**
 * Represents a rectangle.
 */
export class Rectangle {
  /**
   * Return a new Rectangle object for a given x,y, width and height.
   *
   * @param {number} x The x coordinate of the top-left corner of the rectangle.
   * @param {number} y The y coordinate of the top-left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   * @return The new Rectangle object.
   */
  constructor(x, y, width, height) {
    /**
     * The x coordinate of the top-left corner of the rectangle.
     * @type {number}
     */
    this.x = parseFloat(x)

    /**
     * The y coordinate of the top-left corner of the rectangle.
     * @type {number}
     */
    this.y = parseFloat(y)

    /**
     * The width of the rectangle.
     * @type {number}
     */
    this.width = parseFloat(width)

    /**
     * The height of the rectangle.
     * @type {number}
     */
    this.height = parseFloat(height)
  }

  /**
   * Adjust this rectangle by offsetting it.
   *
   * @param {number} x The x offset to apply.
   * @param {number} y The y offset to apply.
   */
  offset(x, y) {
    this.x += parseFloat(x)
    this.y += parseFloat(y)
  }

  /**
   * Return the Rectangle as a CGRect.
   *
   * @return {CGRect} The rectangle.
   */
  asCGRect() {
    return CGRectMake(this.x, this.y, this.width, this.height)
  }

  /**
   * Return a string description of the rectangle.
   *
   * @return {string} Description of the rectangle.
   */
  toString() {
    return `{${this.x}, ${this.y}, ${this.width}, ${this.height}}`
  }
}
