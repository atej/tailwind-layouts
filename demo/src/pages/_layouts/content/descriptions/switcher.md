Use the Switcher if you want to have elements arranged horizontally in a row under certain conditions, but want them to stack up one above the other under other conditions.

The elements will be arranged horizontally in a row if:

- The width of the container is greater than a specified _threshold_ width. This width can be controlled via the `threshold` prop class.
- The number of elements is up to a specified maximum number of elements that can appear side by side. This number can be controlled via the `limit` prop class.

If either of these conditions are not met, the elements will be stacked vertically one above the other.

> 1. Below, the threshold width is set to `xs` so stacking triggers only when the container width is less than that width. You can observe this by toggling on "Narrow".
> 2. If you set the prop class `switcher-l_limit-3` stacking occurs as the number of elements is 4 which is greater than the limit of 3.
