Use the Stack when you want to arrange elements one on top of another.

Things to note:

- The layout works by using `margin` which only affects postioning of block-level elements. For elements which are inline by default, the `block` class can be applied to them to make them eligible child elements of the stack container.
- The stack container will only stack direct childen. To stack elements which are nested deeper, you can nest stacks i.e. use the `stack-l` class on a child element which then becomes the stack container for its own direct children.
- You can _split_ a stack using the `split-after` prop class which is useful when you want two visually separate sections within a stack. Note to achieve the split, the container takes on a **flexbox** context.
