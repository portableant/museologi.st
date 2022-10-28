---
title: 'Going static: Jekyll and collections'
date: 2018-10-22T22:04:17+01:00
author: Daniel Pett
slug: /blog/going-static-jekyll-and-collections/
section: blog
featuredImg: ../images/2018/10/Screen-Shot-2018-10-22-at-23.10.04.png
background: ../images/2018/10/Screen-Shot-2018-10-22-at-23.10.04.png
tags:
  - Jekyll
  - Ruby
  - Tutorial
---

![3D instructional website screenshot](../images/2018/10/Screen-Shot-2018-10-22-at-23.10.04.png)

At the Fitzwilliam Museum, we have a large amount of old websites that were built over the last decade. Many of these are now presenting security risks as they are on old WordPress installations, or they are just plain hand coded HTML. To alleviate the burden for supporting these sites, I have been transferring as much as possible to [Jekyll](https://jekyllrb.com/) powered Github Pages instances (although I am also looking at [Gatsby](https://gatsbyjs.com)).

I'm attracted to Jekyll, due to the powerful conversion of very simple**markdown** files. Lightweight, easy to edit, hard to break and easy to run through version control. I'm hoping that we can use this format to stay away from heavily customising content management systems for our research sections at the Fitz. The sheer amount of sites that we have now got makes administering them all a gigantic task. Going this way, with simple text files might make it easier, or it might be a red herring.

### How to generate? Is it hard?

Generating a Jekyll site is pretty straightforward, and this post outlines how I built the [University of Cambridge Museums tutorial site](https://github.com/UniversityofCambridgeMuseums/festivalOfIdeas) for the Festival of Ideas event I ran on Photogrammetry. Having an example to build towards, makes the process easier!

**Remember though, this is a bare bones example.**

### Installing Jekyll

I am assuming in this instance, you, the reader will be on OSX and have homebrew installed, RVM and the lastest Ruby and can use terminal. If you have all of those set up, you will now need to install the Jekyll gem. So go to terminal and issue this command:

```bash
gem install bundler jekyll
```

Once that has completed (if your permissions are all set correctly) you should have Jekyll ready to go.

### Generating the site skeleton

You're now ready to create the basic outline for the site. In terminal again run the following command, replacing {sitename} with the folder you want to create:

```bash
jekyll new {sitename}
```

This creates a new folder with the base skeleton for a Jekyll app. Change directory to this:

```bash
cd {sitename}
```

You will find the following structure after the &#8216;Running bundle install in &#8216; response has finished running.

```bash
404.html
Gemfile
Gemfile.lock
_config.yml
_posts
about.md
index.md
```

For the site I built, I was not interested in having the default post format that you will find in the majority of examples. If you change directory into _posts:

```bash
cd _posts
```

You will find a file with the name in this format below:

```bash
2018-10-22-welcome-to-jekyll.markdown
```

We are going to generate a site with custom page structure and to do this we're going to use collections and delete the posts structure. To do this, we'll edit the _config.yml file and set up some extra folder structure; in this case we want a folder called tutorials.

Remove \_posts, make folder and then edit the \_config file:

```bash
rm -R _posts
mkdir _tutorials
nano _config.yml
```

Now upon entering the edit screen you will need to edit the config file to have an entry for collections. Look for the line below which starts collections and how this is output.

```markdown
# Welcome to Jekyll!
# You can create any custom variable you would like, and they will be accessible# in the templates via {{ site.myvariable }}.
title: Cambridge Festival of Ideas Photogrammetry workshop
email: dejp3@cam.ac.uk
description: >- # This site will provide training material for the Museum of Classical Archaeology's workshop on photogrammetry.
baseurl: "/festivalOfIdeas" 
url: "https://UniversityofCambridgeMuseums.github.io/" 
twitter_username: dejpett
github_username:  portableant
logo: images/festivalLogo.jpg
# Build settings
markdown: kramdown
theme: jekyll-theme-minimal<br />
plugins:  
    - jekyll-feed
    - jekyll-sitemap
    - jekyll-seo-tag
    - jemoji  
    - jekyll-mentions
# Custom structure
collections:  
    tutorials:   
        output: true
```

This config file also has:

  * some extra plugins
  * a specified theme style
  * the base url
  * the url I intend to serve from
  * the markdown type
  * the plugins I want to use on gh-pages

If you look at the plugins section, you will see I have asked for feed, sitemap, seo, emoji and git hub mentions to also be included. Now create a page inside the _tutorials folder:

```bash
touch _tutorials/introduction.md
```

Now edit this file and add the following at the top:

```bash
--- 
author: your name 
url: tutorials/introduction
---
```

Save the file and then you can test to see if this has worked:

```bash
jekyll serve
```

Go to

```bash
http://127.0.0.1:4000/tutorials/introduction
```

and you will see a page with the title of the file and your name. Jekyll parses the markdown file name to give the page a title by default. How clever is that? When you run the serve command, a static file is compiled into the _site folder.

Now you can create the page files that you need. Edit the index.md file, 404.html and about.md file as much as you want. You can find more examples of logic for rendering page lists and ordering of these in the repo referred to above.

So that is the basics of getting a Jekyll site running with custom page structure. You now probably want to know how to deploy to Github.

### Github pages

Git scares people, Github is the friendlier face. Still scary for most. So how do you get your Jekyll site running off there. Follow these steps (assuming you have a Github profile):

  1. Create a new empty repository
  2. Look for the instructions on how to add data
  3. Go back to your local folder in which you have been developing and run the following

```bash
git init
echo "# teachmephotogrammetry" >> README.md
git add 
git commit -m "Added the base layout"
git remote add origin path/to/gitrepo
git push -u origin master
```

You now should have your jekyll code on github if all went well. Now you need to create the branch that will auto-render on [gh-pages](https://pages.github.com/). Follow these steps:

  1. Go to the github repository
  2. click on the branches button
  3. click add new branch and type gh-pages

If you wait for a few minutes and then go to:

```bash
https://yourusername.github.io/repositoryname
```

You should see a jekyll powered website.