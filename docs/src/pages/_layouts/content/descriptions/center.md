Use the Center for all your horizontal centering needs.

Things to note:

- By default, all block-level elements occupy the full width of their container. But, for an element to _look centered_ requires it to be of a smaller width than its container. To achieve this the `center-l` class sets the container's `max-width` to the defined measure width (`65ch` in the default config). You can override this using the `max-w` prop class.
- You can also pad the centered column using the `gutters` prop class. Note that the width of the gutters will not contribute to the overall width of the centered column.
- If you want to also center the text within the container, you can use the `text` prop class.
- Finally, if you want the width of the container to be based on the intrinsic width of its contents instead of a defined maximum width, you can use the `intrinsic` prop class.
