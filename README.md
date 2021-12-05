# `<in-view>` Web Component

A Web Component that tells if its children are in view, i.e. intersecting with the viewport

`<in-view>` works by adding a `data-in-view` attribute on its child elements when they are intersecting with the viewport and removing it when they are not. It also adds a `data-in-view-once` attribute the first time each child enters the viewport.

This web component is a simple, declarative wrapper of the IntersectionObserver interface.

## Usage

1. Include the component on your page
    ```js
    <script type="module" src="in-view.js"></script>
    ```

2. Wrap one or more elements with the `<in-view>` tag
    ```html
    <in-view>
      <div id="foo" class="fade-in"></div>
      <div id="bar" class="fade-in"></div>
    </in-view>
    ```

3. Target in-view elements with CSS, e.g.
    ```css
    .fade-in {
      opacity: 0;
      transition: opacity .66s ease-in-out;
    }

    [data-in-view] {
      opacity: 1;
    }
    ```