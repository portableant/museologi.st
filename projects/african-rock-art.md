---
section: projects
date: 2019-10-29T22:51:56+01:00
title: African Rock Art - digital archive
institution: The British Museum
role: Museum tech consultancy
project_website: https://africanrockart.britishmuseum.org/
slug: /projects/african-rock-art
featuredImg: ../images/2018/rockart.jpg
background: ../images/2017/rockart.jpg
geo_lat: 51.519400
geo_lon: -0.126924
github_repo: 
  - 
    url: https://github.com/kingsdigitallab/african-rock-art/
    name: Source code for the website
collaborators:
  - Lisa Galvin (British Museum)
  - Jennifer Wexler (British Museum)
  - Miguel Vieira (King's Digital Lab)
  - Ginestra Ferraro (King's Digital Lab)
  - Helen Anderson
  - Jorges De Torres
  - Neil Jakeman (King's Digital Lab)
  - Steve Dey (ThinkSee3D)
  - Steve Colmer (Soluis Heritage)
publications: 
  - "Elizabeth Galvin and Jennifer Wexler (2022) Hacking the Collections: Digital Objects and Museum Engagement in Watrall, E. & Goldstein, L. (eds) (2022) Digital Heritage and Archaeology in Practice: Presentation, Teaching, and Engagement"
funders:
  - The Arcadia Fund
  - Trust for African Rock Art (TARA)
tags:
  - digital transformation
  - museums
  - archaeology
  - digital humanities
  - digital heritage
  - digital archaeology

---
Whilst at the British Museum, I helped Lisa Galvin's team deliver their African Rock Art with my 
wonderful colleague Jennifer Wexler. There were several elements I helped with on this project:

> Africa’s rock art is as diverse as the continent itself. The African rock art image project team has catalogued c. 23,000 digital photographs of rock art from across Africa – originally from the Trust for African Rock Art (TARA) – through generous support from the Arcadia Fund.

## Rock Art website 

The original website was a rapid prototype built in  2015 using a single-page JavaScript application (AngularJS), 
which made multiple high bandwidth, real time requests to Contentful, bringing back a heavyweight JSON object (2-3MB in 
size before caching). 

The site was created using the Yeoman framework, which enabled a website to be developed within a tight 
time-frame but the resulting HTML pages were not search engine friendly, as all content is created client side. AngularJS 
was employed for the Rock Art website as part of the testing for the technology to be used more widely in the rebuilding 
of the British Museum’s main website (which ultimately did not happen.) 

For the final production version of the website, the team proposed taking the website off the CMS/Contentful to reduce 
load times and page size, creating a series of connected static pages representing the final content of the project. 
A static snapshot of the web’s content was extracted from Contentful, where the Rock Art Project content was originally 
stored, and edited/stored on [GitHub](https://github.com/kingsdigitallab/african-rock-art) to generate a static Jekyll site. 

The Jekyll-based static site is hosted on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) server (t2 medium instance) 
which will eventually become part of the BM Microsoft Azure cloud solution currently being set-up.

Recap of key features: 

1. [Jekyll](https://jekyllrb.com/) - a static site generator
2. Contentful - a headless CMS that had been used for building the [British Museum's website](https://www.britishmuseum.org/) which never came to be.
3. [Netlify](https://www.netlify.com/) - a static site hosting service
4. AWS for final delivery with 3 years of reserved instance. 

The Jekyll site pulled data from Contentful into nodes and created static pages for each rock art image and topic; this created
a sustainable and preservable digital resource - low band width, fast and easy to maintain.

## 3d Models 

With Jennifer and Steve Dey at ThinkSee3D, we generated 3D models from archive images using photogrammetry methodologies, which
were hosted on SketchFab under the British Museum profile, this enabled the physical objects that were still in situ to be 
visualised. These models were then embedded into the website and some were printed, in digital and 
in light weight handling materials for use in workshops and events. 

<div class="ratio ratio-16x9 my-3">
    <iframe src="https://sketchfab.com/playlists/embed?collection=3348c986a05d423d850f66ac5500b65a&autostart=0"
            title="African Rock Art"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
        ></iframe>
</div>

## Rock Art VR

In conjunction with Soluis Heritage (who created the BM Bronze Age roundhouse experience), the African Conservation Trust, a VR/XR product 
was created to enable a [virtual visit](https://africanrockart.britishmuseum.org/vr/) to a rock art site (Game Pass Shelter, South Africa) using Google Cardboard. This famous site 
is located within the foothills of the Drakensberg mountains (a rich Rock Art area) on a sandstone recess found at the top of a steep slope. This recess 
holds  paintings made by people from the San|Bushman who lived (and are still present) as hunter-gatherers and fishers throughout southern Africa.

The product was launched in November 2016 in the BM Great Court, receiving circa 150 visitors who tried the app on one of 6 dedicated Google 
Cardboard headsets. Visitor flow was constricted by the available devices; these products take time to use so a simple figure is achieved: 

> 30 visitors per hour at 5 minutes per experience over the course of the total event running for 5 hours. 

## Green Sahara

The Rock Art collection holds a large amount of Saharan rock art providing one of the best pictorial records of hominids 
and fauna found in the Sahara. Earth and life science research has shown that the Sahara has undergone major climatic changes 
over the last 12-10,000 years. 

Shifts in the Earth’s tilt and orbital rotation changed regional climatic patterns, shifting the monsoon rains in Africa 
further north, with the increased water bringing the fertile soil to life and greening the desert (the Green Sahara period). 

For this project, we combined rock art data, 3D models and landscape photos from our archive with satellite imagery to 
create an interactive film entitled Rock Art in the Green Sahara.

<div class="ratio-16x9 ratio my-3">
<iframe src="https://www.youtube.com/embed/HD_Ot2GaCXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

This was developed in collaboration with the [Peopling the Green Sahara Project](https://www.greensahara-leverhulme.com/) 
at Kings College London and the University of Bristol, and incorporates satellite visualisations of climate change in 
the Sahara over the last 11,000 years with information about the rock art sites. 