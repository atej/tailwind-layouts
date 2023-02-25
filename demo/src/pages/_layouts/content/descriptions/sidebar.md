Use the Sidebar when you want two elements--a side element and a main element--next to each other, but when the intrinsic width of the main element decreases beyond a certain value, you want the elements to stack one above the other.

Things to note:

- The intrinsic width of the main element should be a percentage value and is 66.667% (two-thirds) by default. You can override this using the `main-min-w` prop class.

  > Below, if you set the the minimum width of the main element to 80% by toggling on the `sidebar-l_main-min-w-4/5`, you will observe that the elements will stack. This is because the the intrinsic width of the main element is less than 80% of the container in a side-by-side orientation, so it must wrap to satisfy the minimum width constraint imposed by the layout.

- By default the side element is sized intrinsically. If you want to set a specific width use the `side-w` prop class.
- By default the side element stretches to take up the full height of the main element. If you want heights to be intrinsic use the `no-stretch` prop.
- If you want to place the side element on the right side use the `sidebar-l-end` class instead of the `sidebar-l`. Prop classes work the same way.
