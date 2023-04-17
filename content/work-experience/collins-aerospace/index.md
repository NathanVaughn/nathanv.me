+++
title = "Collins Aerospace"
website = "https://www.collinsaerospace.com/"
logo = "collins_aerospace_logo.png"
daterange = "May 2019 - Jan 2020"
subtitle = "Systems/Software Engineering Co-op"
address = "400 Collins Road NE, Cedar Rapids, Iowa 52498"
phoneNumber = "319-295-1000"
tags = ["Ada", "DO-178B", "test procedures"]
keywords = []
description = """
- Collaborated on a diverse Agile scrum team as part of the software design process for Military Avionics Fusion Flight Management Systems
- Developed and maintained tests for Ada avionics software to ensure DO-178B certification conformity
- Worked with requirements and traceability from high-level system functionality down to software code
- Prototyped improvements to the KC-46 Remote Vision System, including developing a working air-to-air refueling scale model with a 5-axis robot
- Co-invented a laser projection system to calibrate stereoscopic cameras ([US11360375B1](https://patents.google.com/patent/US11360375B1/))
"""
showFullContent = false
weight = 5
+++

At Collins Aerospace, I mostly worked on a team that developed the
[Fusion Flight Management System](https://www.collinsaerospace.com/what-we-do/industries/business-aviation/flight-deck/pro-line-fusion)
for military customers. This went into aircraft such as the
[Embraer KC-390](https://en.wikipedia.org/wiki/Embraer_C-390_Millennium)
and [Airbus C-95](https://en.wikipedia.org/wiki/EADS_CASA_C-295). On this team,
I contributed to all parts of the engineering "V", including requirements and
traceability, writing unit and integration tests, and actual flight software written in
Ada. All of this fell under [DO-178B](https://en.wikipedia.org/wiki/DO-178B)
certification requirements.

{{< gallery_image src="IMG_20190709_161635.jpg" caption="Me taking a tour of the company jet with ProLine Fusion avionics installed" >}}

Towards the end of my co-op, I worked directly under a principal engineer on
the [KC-46](https://en.wikipedia.org/wiki/Boeing_KC-46_Pegasus) Remote Vision System.

{{< gallery_image src="kc-46a.jpg" caption="An example of two operators controlling the air-to-air refueling boom" >}}

This system allowed operators to control the air-to-air refueling boom of the KC-46
while sitting comfortably at the front of the aircraft with more situational awareness.
The operators wore 3D glasses with the primary display being 3D to get depth perception.

I was able to build a small mockup of this system in our lab with 2 Logitech joysticks,
a [desktop 5-axis robot](https://dorna.ai/), and some Python code. This proved
invaluable for small-scale tests without needing to use the facilities at the
Air Force Research Lab.

Finally, at the end of my co-op, I co-invented a system with the aforementioned
principal engineer to facilitate the calibration of two stereoscopic cameras
by using a single laser projected on a surface. This was awarded as patent
[US11360375B1](https://patents.google.com/patent/US11360375B1/). I wrote the original
description of the invention and prepared all the diagrams when it was originally
submitted internally for review.

{{< gallery_image src="patent_images.png" caption="A selection of images from patent US11360375B1" >}}
