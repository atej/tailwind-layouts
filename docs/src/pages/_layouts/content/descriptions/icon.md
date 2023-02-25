Use the Icon for laying out icons.

Things to note:

- The element to which the `icon-l` class is applied should contain a `<svg>` element as a direct child or a direct child with the class `icon-l_icon` that in turn contains a `<svg>` element as a direct child.
- Depending on the icon family you are using, you may need to specify the `iconSize` in your config. This is `0.9em` in the default config. You may also override this using the `size` prop on a case-by-case basis.
- The space between the icon and the text may also be set in your config via `iconGap`. It is `0.3em` in the default config. You may also override this using the `space` prop on a case-by-case basis.
- Sometimes you need that extra bit of fine-tuning to get the icon and text to align perfectly. This is why the `nudge` prop class exists.
  > For example, try toggling on the `lowercase` class. Now the icon is a little off. Toggle on the `icon-l_nudge-sm` class to fix the alignment.
- The `nudge` prop class works with negative values as well. For example, `-icon-l_nudge-sm` would've nudged the icon upwards.
- For a vertical orientation use the `vertical` prop class. In this case, the `nudge` prop class will operate on the horizontal axis.
