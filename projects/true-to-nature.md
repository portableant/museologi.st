---
section: projects
date: 2019-10-29T22:51:56+01:00
title: True to Nature digital element
institution: The Fitzwilliam Museum
project_website: https://fitzmuseum.cam.ac.uk/visit-us/exhibitions/true-to-nature-open-air-painting-in-europe-1780-1870
slug: /projects/true-to-nature
featuredImg: ../images/2022/PD_222_1961.jpg
background: ../images/2022/large_pd_11_1997_201701_adn21_dc2.jpg
GitHub_repo: 
  - url: https://github.com/fitzwilliamMuseum/peripleo
    name: Peripleo map
tags:
  - digital
  - fitzwilliam
  - labels
  - laravel 
  - directus
  - museums
  - last minute digital
---
True to Nature was another project which came around without digital outputs specified fully in the 
exhibition planning brief. However, there was a request from the curatorial team to produce a rich set of pages
to augment the exhibition online. 

To do this, I created:

1. Overview of all labels with individual pages for each label
2. IIIF embedded images where available
3. A page for each artist (with biography) with a list of their works in the exhibition
4. A [Peripleo map](https://peripleo.fitzmuseum.cam.ac.uk/#/?/?/?/mode=points) of the exhibition's locations depicted 
5. A set of viewpoint discussion pieces

All very simple and driven off the Directus CMS.

<div class="ratio ratio-1x1">
<iframe src="https://peripleo.fitzmuseum.cam.ac.uk/#/?/?/?/mode=points" title="Mapping True to Nature" allowfullscreen></iframe>
</div>