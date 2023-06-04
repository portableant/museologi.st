# Personal website

This is a personal website created using [GatsbyJS](https://www.gatsbyjs.com) (current) and React. I have a blog that is updated very sporadically,
and a portfolio on research and work projects.

It is a pretty simple system,
powered off markdown files, pulling remote images occasionally and using a few plugins to render maps and 
iframed content.

I use:

* LeafletJS for maps
* Sketchfab embeds for 3d models
* Bootstrap 5.3 for styling
* Graphql for querying the markdown files

Text and image content is stored within the `content` folder, with each section having its own folder. 
Images are stored in the `content/images` folder, with each year having its own folder. Some video is rendered
directly, but most is embedded from YouTube.

## Development and deployment

Testing and building for this system is pretty easy, just follow the instructions below.

### :wrench: Development
To run this system locally for development, you will need to have NodeJS installed. 

Once you have that, you can run:

```shell
npm install
gatsby develop
```

### :hammer: Building

To build for production, run:

```shell
gatsby build
```

To test the build locally, run:

```shell
gatsby serve
```

### :rocket: Deployment

To deploy to github pages, I use the following command:

```shell
npm run deploy
```
This aliases to `gh-pages -d public` and will deploy the site to the `gh-pages` branch of the repository.


## License

The code for this site is licensed under the MIT license, which you can find in the LICENSE file.
The content for this site is CC0 licensed, unless otherwise stated (some images will have stronger licenses, but I will try to make this clear in the post itself).
