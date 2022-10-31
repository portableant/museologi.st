---
title: "Archiving twitter via open source software"
date: 2011-05-12T15:04:00+01:00
author: Daniel Pett
featuredImg: ../images/british-museum.jpg
background: ../images/british-museum.jpg
section: blog
slug: /blog/archiving-twitter-via-open-source-software/
tags:
  - archives
  - twitter
---
Over the last few months I've been helping [Lorna Richardson](http://twitter.com/lornarichardson "Lorna's twitter account"), 
PhD student at the [Centre for Digital Humanities at UCL](http://www.ucl.ac.uk/dh/ "Digital humanities at UCL").

Her research is centred around the use of Twitter and social media by archaeologists and others who have an interest in 
the subject. I've been using the platform for around 3 years (starting in January 2008) and I've been collecting data via 
several methods for several reasons; for a backup of what I have said, to analyse the retweeting of what I've said and to 
see what I've passed on. To do this, I've been using several open source software packages. These are Thinkupapp, Twapperkeeper 
(open source own install) and Tweetnest. Below, I'll run through how I've found these platforms and what problems I've had 
getting them to run. I won't go into the Twitter terms and conditions conversation and how it has affected academic research, 
just be aware of it&#8230;..

Just so you know the server environment that I'm running all this on is as follows, the [Portable Antiquities Scheme](http://finds.org.uk "Scheme's website")&#8216;s 
dedicated Dell machine located at the excellent Dedipower facility in Reading, running a Linux O/S (Ubuntu server), Apache 2, 
PHP 5.2.4, MySql 5.04 and with the following mods that you might find useful curl, gd, imagemagick, exif, json and simplexml. 
I have root access, so I can pretty much do what I want (as long as I know what I'm doing, but Google teaches me what I need to know!) 

To install these software packages you don't need to know too much about programming or server admin unless you want to 
customise scripts etc. for your own use (I did&#8230;.) You can probably install all this stuff onto Amazon cloud based 
services if you can be bothered. I've no doubt made some mistakes below, so correct me if I am wrong!

Several factors that you must remember with Twitter:

  1. The system only lets you retrieve 3200 of your tweets. If you chatter a lot your archive 🙂
  2. Search only goes back 7 days (pretty useless, hey what!)
  3. Twitter change their [T&C](https://twitter.com/tos "Twitter's terms"), so what is below might be banned under these in the future!
  4. Thinkupapp and Twapperkeeper use oauth to connect your Twitter account so that no passwords are compromised.
  5. You'll need to set up your Twitter account with application settings &#8211; secrets and tokens are the magic here &#8211; to do this go to [https://dev.twitter.com/apps](https://dev.twitter.com/apps "Twitter developer section") and register a new app and follow the steps that are outlined in the documentation for each app (if you run a blog and have connected your Twitter account, this is old hat!)

## Tweetnest

[Tweetnest](http://pongsocket.com/tweetnest/ "Tweetnest website and how to get it") is open source software from Andy Graulund at Pongsocket. This is the most lightweight of the software that I've been using. It provides a basic archive of your own tweets, no responses or conversation threading, but it does allow for customisation of the interface via editing of the config file. Installing this is pretty simple, you need a server with PHP 5.2 or greater and also the JSON extension. You don't need to be the owner of the Twitter account to mine the Tweets, but each install can only handle one person's archive. You could have an installation for multiple members of your team, if you wanted to&#8230;..

Source code is available on [GitHub](https://github.com/graulund/tweetnest "Github repository for tweetnest") and the code is pretty easy to hack around if you are that way inclined. The interface also allows for basic graphs of when you tweeted, search of your tweet stream and has .htaccess protection of the update tweets functionality (or you can cron job if you know how to do this.) My instance of this can be found at [http://finds.org.uk/tweetnest](http://finds.org.uk/tweetnest "My instance of tweetnest") Below are a few screenshots of the interfaces and updating functions. The only issue I had with installing this was changing the rewriteBase directive due to other things I am up to.

![Monthly archive of tweets](../images/2011/05/montharchive.png)


## Thinkupapp

[Thinkupapp](http://thinkupapp.com/ "The thinkupapp website - go get it!") has been through a couple of name changes 
since I first started to use it (I think it was Thinktank when I first started), and has been updated regularly with new 
β releases and patches released frequently. I know of a couple of other people in the heritage sector that use this 
software ([Tom Goskar](http://twitter.com/tag "Tom's most excellent contributions to the twittersphere") at Wessex and 
Seb Chan of Sydney's Powerhouse Museum mentioned he was using it this morning on Twitter.)

This is originally a project by Gina Trapani (started in 2009), and it now has a group of contributors who enhance the 
software via [GitHub](https://github.com/ginatrapani/ThinkUp "Thinkup app on github") and is labelled as an [Expertlabs](http://expertlabs.org/ "Expert labs website") 
project and is used by the Whitehouse (they had [impressive results](http://thinktank01.aaas.org/thinkup01/index.php?v=tweets-all&u=whitehouse&n=twitter "Whitehouse data mined!") 
around the time of the State of the Union speech). This open source platform allows you to archive your tweets (again 
within the limits) and their responses, retweets and conversations (it also has a bonus of being able to mine Facebook 
for pages or your own data, and it can have multiple user accounts). It also has graphical interfaces that allow you to 
visualise how many followers you have gathered over time, number of tweets, geocoding of tweets onto a map (you'll need an 
api key for googlemaps), export to excel friendly format and search facility. You can also publish your tweets out onto 
your own site or blog via the api and the system will also allow you to view images and links that your virtual (or maybe real) 
friends have published on their stream of conciousness. You can also turn on or off the ability for other users to register 
on your instance and have multiple people archiving their Tweet stream.

This is slightly trickier than tweetnest to install, but anyone can manage this if they follow the [good instructions](http://thinkupapp.com/docs/ "Documentation RTFM!") 
and if you run into problems read their [Google group](http://groups.google.com/group/thinkupapp "get help or read others thoughts"). 

One thing that might present as an issue if you have a large amount of tweets is a memory error &#8211; solve this by 
setting:

```bash 
ini_set('memory_limit','32M'); 
``` 

in the config file that throws this exception, or you might time out as a 
script takes longer than 30 seconds to run. Again this can be solved by adding:

```bash 
set_time_limit ( 500 ); 
```

to your config file. Other things that went wrong on my installation included the SQL upgrades (but you can do these 
manually via phpmyadmin or terminal if you are confident) or the Twitter api error count needed to be increased. All 
easy to solve.

Things that I would have preferred on this are clean urls from mod_rewrite as an option and that maybe it was coded using 
one of the major frameworks like Symfony or Zend. No big deal though. Maybe there will also be a solr type search interface 
at some point as well, but as it is open source, fork it and create plugins like this visualisation.

You can see my public instance at [http://finds.org.uk/social](http://finds.org.uk/social "My Thinkupapp instance") and 
there's some screenshots of interfaces below.

![My thinkup app at finds.org.uk](../images/2011/05/thinkupapp.png)

![Staffordshire hoard retweets](../images/2011/05/staffshoard.png)

![Embed interface](../images/2011/05/embed.png)

Script to embed your tweet thread into another application

![Graphs of followers etc](../images/2011/05/graphs.png)

## Twapperkeeper

The [Twapperkeeper](http://twapperkeeper.com/index.php "Twapperkeeper") archiving system has been around for a while now, and has been widely used to archive hashtags from conferences and events. Out of the software that I've been using, this is the ugliest, but perhaps the most useful for trend analysis. However, it has recently fallen foul of the changes in Twitter's T&C, so the functionality of the original site has had the really useful features expunged &#8211; namely data export for analysis. However, the creator of this excellent software created an opensource version you can download and install on your own instance; this has been called [yourTwapperkeeper](http://your.twapperkeeper.com/ "Yourtwapperkeeper").

I've set this up for the [Day of Archaeology](http://dayofarchaeology.com "Day of Archaeology sign up!") project and added a variety of hashtags to the instance so that we can monitor what is going on around the day (I won't be sharing this url I am afraid&#8230;.) Code for this can be downloaded from the [Google code repository](http://code.google.com/p/yourtwapperkeeper/ "Download yourtwapperkeeper") and again this is an easy install, and you just need to follow the instructions. Important things to remember here include setting up the admin users and who is allowed to register archives, working out whether you want to associate this with your primary account in case you get pinged for violation of the terms of service, setting up your account with the correct tokens etc. by registering your app with twitter in the first place.

Once everything is set up, and you start the crawler process, your archive will begin to fill with tweets (from the date at which archiving started) and you can filter texts for retweets, dates created, terms etc. With your own installation of twapperkeeper, you can still export data, but at your own risk so be warned!
