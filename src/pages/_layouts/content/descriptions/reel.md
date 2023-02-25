Use the Reel when you want elements in a row, but instead of wrapping, they should overflow and come into view as the user scrolls horizonatally.

Thinks to note:

- The width of the elements will be intrinsic by default. You can override this using the `item-w` prop class.
- You can set an explicit height for the container using the `h` prop class.
- The standard way the browser indicates to the user that scrolling is possible is to show a scrollbar. You can customize the scrollbar using the [scrollbar utility](/utilities#scrollbar) class.
- If you want to hide the scrollbar, you can use the `no-scrollbar` utility class. If you do this, make sure you have a way to indicate to the user through other visual cues that the element is horizontally scrollable.
- If you want to pad the reel container, it is recommeded that you wrap the container and apply padding to the wrapper instead of directly to the reel container.
