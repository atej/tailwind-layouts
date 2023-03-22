Use the Stack when you want to arrange elements one on top of another.

Things to note:

- The stack container will only stack direct childen. To stack elements which are nested deeper, you can nest stacks i.e. use the `stack-l` class on a child element which then becomes the stack container for its own direct children.
- You can _split_ a stack using the `split-after` prop class which is useful when you want two visually separate sections within a stack.
- By default, applying the `stack-l` class to an element will give it a **flexbox** context. At times you might not want this--for example, when using the stack in combination with other layout primitives to compose a more complex layout. This can be achieved by applying the `stack-l_no-flex` prop class. Not that now, only **block** context child elements will be stacked. You can apply the `block` utility class to an inline child element to give it a block context. Also, you won't be able to split the stack in this case.
