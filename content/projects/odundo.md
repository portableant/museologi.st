---
section: projects
date: 2019-10-29T22:51:56+01:00
last_modified_at: 2023-12-09T23:48:22
title: Magdalene Odundo in Cambridge - a digital archive
description: "A digital archive of the work of Magdalene Odundo in Cambridge"
institution: The Fitzwilliam Museum
geo_lat: 52.199722
geo_lon: 0.119167
project_website: https://fitzmuseum.cam.ac.uk/visit-us/exhibitions/magdalene-odundo-in-cambridge/
slug: /projects/odundo/
featuredImg: ../images/2022/gal_26_odundo_016_202110_mfj22_mas.jpg
background: ../images/2021/gal_26_odundo_021_202110_mfj22_mas.jpeg
collaborators:
  - George Doji
  - Helen Ritchie
status: active
tags:
  - audio
  - digital
  - odundo
  - fitzwilliam
  - cases 
  - labels
  - laravel 
  - directus
  - museums
  - last minute digital
---
A very simple and again last minute Fitzwilliam Museum digital intervention. The Director requested 
the labels, text and audio for the exhibition to be put online a few days before opening. The problem was simple:

1. 15 cases
2. Multiple objects in each case
3. Cases had label text for example [Case 2](https://fitzmuseum.cam.ac.uk/visit-us/exhibitions/magdalene-odundo-in-cambridge/cases/case-2)
4. Objects had [label text](https://fitzmuseum.cam.ac.uk/visit-us/exhibitions/labels/teapot-with-cane-handle) and [audio files](https://fitzmuseum.cam.ac.uk/conversations/podcasts/magdalene-odundo-audio-series)

Pull these together! 

To do this, a custom table was created in Directus and content uploaded and pulled back through the API. This provided 
reusable content structure for any other exhibitions that might be created in the future that had many-to-many 
relationships for cases, object and labels.  