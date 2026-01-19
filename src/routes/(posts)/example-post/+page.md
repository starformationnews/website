---
title: 'Example / test post'
date: 2026-01-01
authors: ['Emily Hunt', 'Joe Bloggs']
categories: ['editorials', 'interviews', 'newsletters']
description: 'The Star Formation Newsletter is back after a hiatus. This post explains its future direction.'
image: './header.webp'
imageCredit: 'ALMA (ESO/NAOJ/NRAO)'
imageURL: 'http://www.eso.org/public/images/eso1436a/'
updated: 2026-01-14
hidden: true
---

This post explains how to use all the available options in the markdown system of _The Star Formation Newsletter._

## Setting the frontmatter

The 'frontmatter' of each post is its title, date, and more. This section goes through the different frontmatter options set on this post.

### The bare minimum

As an author, you are responsible for filling out **at least five things** here: the post's title, its publication date, an array of the authors of the post, an array of the categories of the post, and a description of the post.

```javascript
title: 'Example / test post';
date: 2026 - 01 - 01;
authors: ['Emily Hunt', 'Joe Bloggs'];
categories: ['editorials', 'interviews', 'newsletters'];
description: 'Describe your post for SEO purposes.';
```

Usually, the 'authors' and 'categories' fields will probably just have one entry, but there is at least flexibility to have more than one.

### Custom header images

One of the most useful other options is to set a custom header image for the post. It's usually sufficient to just put the image in the post folder. The image **must be in .webp format** (it's much smaller and more optimized than .jpg or .png!), and should have a resolution no less than 1000x1000 pixels, and no more than 2000x2000 pixels. The README.md of the project has some instructions on how to do this correctly.

In addition, the image should be credited. When possible, include a URL linking to the original source too (e.g. a paper). Here's a minimum working example:

```javascript
image: './header.webp';
imageCredit: 'ALMA (ESO/NAOJ/NRAO)';
imageURL: 'http://www.eso.org/public/images/eso1436a/';
```

As a general style thing, please normally put the image for a given article **in the same folder** as the article, and name it 'header.webp'. This isn't essential, but it keeps things tidier.

### Other options

There are a few more things, including:

- Set a date when the post was last updated (which is displayed at the top of the post)
- Hide the post on the **production** website (it will still appear when running locally with `npm run dev`)

```javascript
updated: 2026 - 01 - 14;
hidden: true;
```

## Adding images, links, etc.

Images can be added to the post like usual markdown. Remember to describe the image in the `[]` braces so that it has alt text:

![A white cat viewing the Wikipedia article Dwarf planet](https://upload.wikimedia.org/wikipedia/commons/a/aa/White_cat_watching_Wikipedia.jpg)

You can add links easily too, just use [the normal markdown format.](https://en.wikipedia.org/wiki/Cats_and_the_Internet)


## Adding arXiv posts

If you add `arxiv: true` to your post's frontmatter, then **it will automatically include the relevant arXiv posts**, taken from an arxiv.json file in the same directory.

`Todo: update this part more once it's fully working`

## Other features

1. Symbols are rendered in a publication style. For instance, a double dash -- like these ones -- is converted automatically into an em-dash when displaying the site. Quote marks, like 'this' or "this", are converted into prettier front and -back quotes.

2. The website has full support for LaTeX math -- either inline, like $e^{i\pi} - 1 = 0$, or in a full equation environment:

$$
P(\text{A `Harvard astronomer' is quoted}) = 0.5 \cdot \tanh \left( \frac{v_\text{comet}}{v_{\text{esc},\odot}} - 2 \right) + 0.5
$$

3. The site can also render code in pretty code blocks. Specify a language to enable syntax highlighting.

```python
def get_new_number(x):
    new_number = (x + 1) / 2
    nice_string = f"The new number is: {x:.2f}"
    print(nice_string)
    return new_number
```

4. Markdown files here aren't really markdown -- they use [mdsvex](https://github.com/pngwn/MDsveX), which means that **you can write any valid HTML and it will display.** This is really powerful for one-offs, like:

**Making a button...**

<a href="https://www.youtube.com/watch?v=XfELJU1mRMg" target="_blank">
    <button style="background-color: #cfeac3ff; font-size: 20px; border-radius: 10px; padding: 10px; font-weight: bold; border: 2px solid black">
        Click me to win a prize!
    </button>
</a>

**Embedding a movie...**

 <video width="320" height="240" controls style="width: 60%; height: 100%">
  <source src="https://upload.wikimedia.org/wikipedia/commons/7/78/%22Arya%22_Cat_plays_with_Acalypha_indica-Pilangsari-2019.webm" type="video/webm">
Your browser does not support the video tag.
</video>

**Adding interactive figures...**

<iframe src="https://cswigg.github.io/cam_website/swiggum_2024_interactive/fig1_interactive.html" style="width: 100%; height: 500px; border: none"></iframe>

**... or even writing valid Svelte code and rendering parts of the site again! Like: the card of a post.**

<script>
    import PostCard from "$lib/components/PostCard.svelte";
    const post = {title: "This Post Doesn't Exist, I'm Just Demonstrating How We Can Add Stuff", date: "2026-01-01", url: "/", categories: ["Editorials"]}
</script>

<PostCard {post} />
