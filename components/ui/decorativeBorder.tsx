/**
 * Four ink triangles hanging off the corners of a box with top and bottom
 * borders, like the example boxes of a printed rulebook. The parent must be
 * `relative` and leave ~24px of margin above and below for them.
 * Styles: `.corner` in app/globals.scss.
 */
const DecorativeBorder = () => (
  <>
    <div className="corner corner1" aria-hidden />
    <div className="corner corner2" aria-hidden />
    <div className="corner corner3" aria-hidden />
    <div className="corner corner4" aria-hidden />
  </>
);

export default DecorativeBorder;
