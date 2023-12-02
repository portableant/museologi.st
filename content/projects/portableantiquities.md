---
section: projects
title: The Portable Antiquities Scheme
description: "A crowdsourced database of archaeological finds"
institution: The British Museum
featuredImg: ../images/backgrounds/4202540707_1eee311017_o.jpg
date: 2003-04-29T22:51:56+01:00
last_modified_at: 2023-12-02T08:34:10
geo_lat: 51.519400
geo_lon: -0.126924
funders:
  - DCMS 
  - Museums, Libraries and Archives Council
  - Heritage Lottery Fund
  - The Headley Trust
  - The British Museum Research Fund
role: ICT Advisor
collaborators:
  - Roger Bland
  - Mary Chester-Kadwell
  - Tyler Bell (OAD)
  - Andrew Larcombe (OAD)
  - Vuk Trifkovic (OAD)
  - Jocke Selin (OAD)
  - Sam Moorhead
  - Ethan Gruber
tags:
  - foss
  - open data
  - open source
  - archaeology
  - numismatics
  - portable antiquities scheme
  - citizen science
  - MLA
slug: /projects/the-portable-antiquities-scheme
status: active
background: ../images/backgrounds/3040949218_e8ba0e87b2_k.jpg
project_website: https://finds.org.uk
github_repo: 
  - url: https://github.com/findsorguk/findsorguk
    name: Finds.org.uk source code
  - url: https://github.com/findsorguk
    name: GitHub Organisation profile
  - url: https://github.com/findsorguk/findsorguk-geodata
    name: Geodata split out to json
zenodo_doi: 10.5281/zenodo.56497
publications:
  - "Pett, D.E.J. (2018) The Treasure Act and Portable Antiquities Scheme in England and Wales in Key Concepts in Public Archaeology (Moshenska, G. Ed) DOI: 10.2307/j.ctt1vxm8r7.12"
  - "Pett, D.E.J. (2014) ‘Linking Portable Antiquities to a wider web’ in Thomas Elliott, T., Heath, S., and Muccigrosso, J. (eds) Current Practice in Linked Open Data for the Ancient World"
  - "Pett, D.E.J. (2011) ‘Distributing the wealth’ in Cooke, B. (ed.) The British Museum and the future of Numismatics. London: British Museum Press."
  - "Pett, D.E.J. (2010) ‘Meeting public interest in the Staffordshire Hoard.‘ British Archaeology 110"
  - "Pett, D.E.J. (2010) ‘The Portable Antiquities Schemes Database: its development for research since 1998’ in Lewis, M. et al (ed.) Proceedings of the PAS conference David Brown Book Company"
  - "Bland, R., Moorhead, S., & Pett, D.E.J. (2010) ‘Hoarding in ancient Britain.’ Current Archaeology Volume 248"
  - "Gruber, E., Heath, S., Meadows, A., Pett, D., Tolle, K. and Wigg-Wolf, D. (2014) ‘Semantic Web Technologies Applied to Numismatic Collections in Archaeology in the Digital Era’ Papers from the 40th Annual Conference of Computer Applications and Quantitative Methods in Archaeology (CAA), Southampton, 26-29 March 2012’"
---
> Every year many thousands of archaeological objects are discovered, many of these by metal detector users, but also by people whilst out walking, gardening or going about their daily work. Finds recorded with the Scheme help advance knowledge of the history and archaeology of England and Wales.

The Portable Antiquities Scheme is run by the British Museum and Amgueddfa Cymru - National Museum Wales to 
encourage the voluntary recording of archaeological objects and the mandatory recording of Treasure cases, 
found by members of the public in England and Wales. In 1996, Roger Bland established a pilot network of Finds Liaison
Officers (FLO) in 6 areas of the UK, and then in 2003 via funding from the Heritage Lottery Fund, the PAS was
made into a national network with over 60 partners and the creation of a unified database. 

![Coins from the Frome Hoard](../images/backgrounds/7549072406_5b6746cc4f_h.jpg)

The PAS database came under my purview as ICT Advisor, and from 2003 to 2006, I project and product managed
the software that was developed by Oxford ArchDigital (a spin out from Oxford University, led by Tyler Bell.) In 2006, 
OAD unfortunately went into administration, and the PAS database was at substantial risk of being lost. 
I learnt to programme in PHP and MySQL and took over the development of the PAS database, and in 2007, I released my 
first version of the database, which was a complete rewrite of the original OAD software, but used their underlying structure.

I then released new versions of the database every year, and in 2011, I released the first version of the database that was 
fully open source (winning the Best of the Web award at Museums and the Web), 
and the final version in 2016 when I was transferred to the new Digital and Publishing team of the British Museum.

![The Museums and the web award 2011](../images/2017/museumsAndTheWeb.jpg)

The PAS database records thousands of data points annually, massive amounts of geospatial data that provides a picture 
or sampling of the archaeological landscape of England and Wales, and the database is used by researchers worldwide. 

![A map of the PAS database's coverage from 2003 to 2010](../images/2017/mapCoins.jpg)

The PAS database is now in its 20th year of national operation, and has grown substantially from its 2003 first iteration. 
Back then, 33,000 records were recorded, and in 2022 there are over 1.6 million records - the majority released under Creative Commons By Attribution
license and. The database is written as open source software, but sits on outdated PHP frameworks from Zend and probably 
out of date MySQL and Solr versions. 

## Technical data

* Zend Framework 1.21 
* MySQL 5.5 + 
* Solr 4+ 
* Ubuntu 14.04 LTS
* Tomcat
* Java 8
* Fuseki 2 (Jena) for a triplestore (this has been removed since I left)

The system was set up across 4 servers - a master and three slaves (MySQL and Solr) on Ubuntu OS. 
Instant replication was set up for the MySQL database and Solr instances, a software load balancing system was in place, which 
enabled uptime to be _epic_, servers rarely went down.

## Unique features for heritage systems

* Only unified and national system for recording archaeological objects worldwide at the time of construction
* Completely open source 
* Open data - all data released under Creative Commons Attribution license
* Linked Open Data - all data is available as RDF triples modelled using CIDOC CRM
* Integration with Nomisma for numismatic data
* Integration with Ordnance Survey for geospatial data (using RDF)