Use the Sidebar when you want two elements--a side element and a main element--placed side-by-side, but when the width of the main element becomes narrower than a percentage of the whole width, you want the elements to stack one above the other.

Things to note:

- The width of the main element should be a percentage value and is `66.667%` (two-thirds) by default. You can override this using the `main-min-w` prop class.

  > Below, if you set the the minimum width of the main element to `80%` by toggling on the `sidebar-l_main-min-w-4/5`, you will observe that the elements will stack vertically. This is because the the width of the main element is less than `80%` of the container in a side-by-side orientation, so the elements must stack to satisfy the minimum width constraint.

- By default the side element is sized intrinsically. If you want to set a specific width use the `side-w` prop class.

  > Do not use a percentage value for the `side-w` prop class. If you do that, stacking will never occur. You can use `clamp` (e.g. `sidebar-l_side-w-[clamp(20ch,33.333%,100%)]`) if you want a percentage-based preferred side element width. Read more about the technique [here.](https://every-layout.dev/blog/sidebar-flex-basis-clamp/)

- By default the side element stretches to take up the full height of the main element. If you want heights to be intrinsic use the `no-stretch` prop.
- If the side element is on the right side of the main element, use `sidebar-l-end` instead of the `sidebar-l`. Prop classes work the same way.
