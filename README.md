# The Star Formation Newsletter

Welcome to the main repository for The Star Formation Newsletter's website.


## Working with the repository

### Installation

#### Fetching the repo

Clone the repo with


```bash
git clone https://github.com/starformationnews/website.git
```

#### Installing node.js

The website is built using SvelteKit, a JavaScript framework for building websites. You don't need to know how to write JavaScript, HTML, or CSS to add a post! But you will need to install some things to get it to work.

To start, install Node Package Manager. The easiest way to do this is usually with nvm. Please [read and understand the installation instructions for nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating), as the below may only work on Linux/Mac - which can install nvm with

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Finally, to install and use the latest version of node.js, do

```bash
nvm install --lts node
nvm use --lts node
```

#### Installing packages

Once you've installed nvm and node.js, the `npm` command should be available in your terminal. Do

```bash
npm install
```

In the downloaded folder to install all required dependences.


### Writing and developing

A few commands are useful for working on the website locally. Firstly, you can preview your **local** copy of the website and whatever it is you're writing/doing with

```bash
npm run dev
```

The local preview works **dynamically** (a server on your local computer runs the site); however, the final website is hosted **statically**, meaning that all files are compiled down to simple self-contained HTML files that live on GitHub pages. You can make sure that any changes you've made to the site won't break the build process with

```bash
npm run build
```

which will build the site, and 

```bash
npm run preview
```

which previews a copy of the built site locally.



## Preparing a post

### Creating the post

New posts (newsletters, PhD theses, etc) live in the **posts** directory, and are written in markdown format. Each new post lives in its own folder; this folder is the **path** the post will live under on the website. A `+page.md` file within that folder is then the content displayed on that page.

### Creating a newsletter

Newsletters are a special case of post. A script is able to automatically download arXiv posts for a given month for you. To run the script, do

```bash
npm run arxiv -- --id=<id>
```

or, as a shorthand,

```bash
npm run arxiv <id>
```

where `<id>` is the id of the SFN to generate. This command also has a number of positional arguments (which MUST be preceded by a `--`, as npm is weird). The supported arguments are:

- `--id` (int): specify the id of the SFN to generate, relative forwards/backwards from SFN 400 (April 2026).
- `--year` (int) and `--month` (int): specify the year and month of the SFN to generate, as an alternative to using `--id`.
- `--force` (flag): force re-download the `arxiv.json` file containing arXiv posts.
- `--dry-run` (flag): will not download metadata from arXiv or create new folders. Useful to check arXiv ID extraction.
- `--extra-months` (int): allows for setting a different number of past months to include. The SFN defaults to 2 (i.e. the current month and prior two are included; a total of three months). 

An example using many of these commands would be:

```bash
npm run arxiv -- --year=2025 --month=4 --force --extra-months=0
```

Make sure to then proceed to filling out the frontmatter, testing your new post on a local environment with `npm run dev`, and choosing an image for your post.

### Filling out the frontmatter

Each markdown file should contain **frontmatter**. These are properties of the post that live at the top of it. The best way to learn is probably to look at the frontmatter of an existing post; a working example for a newsletter is below:

```bash
title: 'Star Formation Newsletter #397'
date: 2026-02-03
authors: ['Emily Hunt']
categories: ['newsletters']
description: 'This is its 397th Star Formation Newsletter, covering new research postings in January of 2026.'
layout: newsletter  # When set, looks for an arxiv.json in this directory and includes those posts.
# hidden: true  # Set as true until you want to publish; when true, the post won't appear on the page, but can be seen on the site if you know the URL.
image: './header.webp'  # When set, can be a path to an image. By convention, call it 'header.webp' and put it in the post's directory.
imageCredit: 'ESO'  # Credit of the image
imageURL: 'https://link.com/to/the/image'  # Link to where the image was sourced from
```

### Images

Please make sure that images are in `.webp` format (this saves on filesize!) and have a maximum size of 2000 pixels in any dimension. You can easily convert images on the command line with ImageMagick, using the commmand:

```bash
convert filename.jpg filename.webp
```

For images **larger than 2000 pixels in any dimension**, you can also resize them with

```bash
convert -resize 2000x2000^ filename.jpg filename.webp
```

### Uploading your new post

Some git/GitHub steps are required here.

1. **Create a new branch for your post and add all new commits to it.** This makes it easier for others to check your post without messing up the real website!
    - Please name branches based on what you're adding, e.g.: `newsletters-401`, `editorials-new-submission-process`, `phds-cameren-swiggum`. The first word of the name should describe what category it goes in; everything else should uniquely describe the post itself.

2. **Create a pull request on GitHub with your new post.**

3. **Ask a maintainer (e.g. Emily) to approve the pull request to publish your post.**

4. The site will then build in the background automatically once your post has been merged into the main branch!


## Getting help

Currently, the best people to ask for help are...

- Emily [@emilyhunt](https://github.com/emilyhunt), who wrote the website's source code

