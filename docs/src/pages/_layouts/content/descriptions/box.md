Use the Box to help content stand out.

Things to note:

- The box is a simple container with a padding. You can theme the box using the `text`, `bg` and `border` prop classes.

- If you wish your box to not have a border but still be accessibly outlined in Windows High Contrast mode, you can use the `border-hc` utility.

  > To see that in action, below, try unsetting the `border` class, and instead setting the `border-hc` class. Now your box will be borderless in normal mode, but a border will appear when you toggle on "High Contrast".

- Frankly the box layout can be achieved with Tailwind's native `p`, `text`, `bg` and `border` utilities by using them exactly in the same way as you'd use the box prop classes. Consider the box classes as a semantic alternative then.
