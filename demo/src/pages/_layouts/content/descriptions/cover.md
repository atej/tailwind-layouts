Use the Cover to vertically center a principal element with the option of having elements above and below it.

Things to note:

- To make it work apply the apply the `cover-l` class to the parent container. The parent must have defined minimum height. By default, this is the screen height i.e. `100vh`. You can override this using the `min-h` prop class.
- Apply the `cover-l_center` class on the **child element** you want to center. This element must be a direct child of the parent container.
- The `space` prop allows you to specify the minimim space between and around child elements.
- If you want the container to not have any padding, apply the `no-pad` class to it.
