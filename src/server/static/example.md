# Welcome to the Plate Playground!

Experience a modern rich-text editor built with [Slate](https://slatejs.org) and [React](https://reactjs.org). This playground showcases just a part of Plate's capabilities. [Explore the documentation](/docs) to discover more.

## Collaborative Editing

Review and refine content seamlessly. Use [suggestions](/docs/suggestion) like this added text or to mark text for removal. Discuss changes using [comments](/docs/comment) on many text segments. You can even have overlapping annotations!

## AI-Powered Editing

Boost your productivity with integrated [AI SDK](/docs/ai). Press <kbd>⌘+J</kbd> or <kbd>Space</kbd> in an empty line to:

* Generate content (continue writing, summarize, explain)
* Edit existing text (improve, fix grammar, change tone)

## Rich Content Editing

Structure your content with [headings](/docs/heading), [lists](/docs/list), and [quotes](/docs/blockquote). Apply [marks](/docs/basic-marks) like **bold**, _italic_, <u>underline</u>, ~~strikethrough~~, and `code`. Use [autoformatting](/docs/autoformat) for [Markdown](/docs/markdown)-like shortcuts (e.g., <kbd>\*</kbd>  for lists, <kbd>#</kbd>  for H1).

> Blockquotes can group paragraphs, quoted lists, and reply chains.
>
> Markdown blockquotes keep this nested structure instead of flattening it.
>
> * Quoted list item inside the same container.
>
> > Nested blockquotes work here too.

```javascript
function hello() {
  console.info('Code blocks are supported!');
}
```

Create [links](/docs/link), [@mention](/docs/mention) users like [Alice](mention:Alice), or insert [emojis](/docs/emoji) ✨. Use the [slash command](/docs/slash-command) (/) for quick access to elements.

### How Plate Compares

Plate offers many features out-of-the-box as free, open-source plugins.

| **Feature**         | **Plate (Free & OSS)** | **Tiptap**            |
| ------------------- | ---------------------- | --------------------- |
| AI                  | ✅                      | Paid Extension        |
| Comments            | ✅                      | Paid Extension        |
| Suggestions         | ✅                      | Paid (Comments Pro)   |
| Emoji Picker        | ✅                      | Paid Extension        |
| Table of Contents   | ✅                      | Paid Extension        |
| Drag Handle         | ✅                      | Paid Extension        |
| Collaboration (Yjs) | ✅                      | Hocuspocus (OSS/Paid) |

### Images and Media

Embed rich media like images directly in your content. Supports [Media uploads](/docs/media) and [drag & drop](/docs/dnd) for a smooth experience.

![](https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80\&w=600\&auto=format\&fit=crop\&ixlib=rb-4.0.3\&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

<file isUpload="true" name="sample.pdf" id="static-0103" src="https://s26.q4cdn.com/900411403/files/doc_downloads/test.pdf" />

<audio id="static-0104" src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3" />

### Table of Contents

<toc />

***

### Dates and Equations

Insert dates like <date value="2024-01-15" /> or use inline equations: $E = mc^2$.

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Callouts and Toggles

<callout variant="info" id="static-0115">
  This is a callout block for important information.
</callout>

### Multi-column Layout

<column_group>
  <column width="50%">
    First column content. Great for side-by-side comparisons.
  </column>

  <column width="50%">
    Second column content. Layout flexibility at its best.
  </column>
</column_group>

​
