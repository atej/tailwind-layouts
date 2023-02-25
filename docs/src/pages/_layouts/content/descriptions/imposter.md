Use the Imposter when you want to superimpose content on top of other content.

Things to note:

- By default, the imposter will be positioned absolutely and will be positioned relative to the first parent element which has a `position` value other than `static`. To position the imposter relative to the viewport, apply the `fixed` prop class.
- You can control the margin between the imposter and the positioning container/viewport using the `m` prop class.

> Consider using the native HTML `<dialog>` element as the imposter container. You get the benefit of the browser's built-in usablity and accessibility features that must be replicated if using other elements for a similar purpose. Also, the `::backdrop` CSS pseudo-element can be used to style the backdrop that is displayed behind a `<dialog>` element when the dialog is displayed with `HTMLDialogElement.showModal()`.
