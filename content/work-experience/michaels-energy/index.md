+++
title = "Michaels Energy"
website = "https://michaelsenergy.com/"
logo = "michaels_energy_logo.png"
daterange = "May 2018 - July 2018"
subtitle = "Residential Direct Load Control Intern"
address = "201 1st Avenue SE, Suite 200, Cedar Rapids, Iowa 52401"
phoneNumber = "319-531-6177"
tags = []
keywords = []
description = """
- Inspected power supply control units at customer sites across Southeast Iowa
- Provided remote support and traveled independently to customer sites representing the power company
- Developed new software independently to generate GPS coordinates from a list of customer addresses to reduce time spent driving
"""
showFullContent = false
weight = 6
+++

At Michaels Energy, I was responsible for inspecting equipment for Alliant Energy's
residential load control program. Customers could have a device installed on their
air conditioner and/or water heater that allowed Alliant Energy to remotely shut
them off for short periods of time to reduce load on the grid during
times of high demand. In exchange for this, customers would receive credit on their
bill, so Alliant Energy wanted to ensure that the devices were still present
and functioning. As these devices were simple radio receivers, they had
no way to phone home, and each device needed to be manually inspected individually.

I was assigned approximately 3600 devices in southeast Iowa to inspect. I was totally
on my own the entire summer. At every single house, I would knock on the door to let
the customer know why I was there, then find the device(s) and ensure that their status
lights showed they were operating correctly, and log this in a database.

As most of my job was the
[traveling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem),
I did use some of my programming knowledge to help me. I wrote a Python script
to take the list of addresses Alliant Energy gave me and ran them through the Google
Maps API to turn these into GPS coordinates. Then, I generated a `.gpx` file
that I could load into my Garmin car GPS to easily see and navigate to customers.

{{< gallery_image src="20180712_111033.jpg" >}}
