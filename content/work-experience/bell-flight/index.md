+++
title = "Bell Flight"
website = "https://www.bellflight.com/"
logo = "bell_flight_logo.png"
daterange = "Jan 2021 - Aug 2022"
subtitle = "Software Engineer"
address = "3255 Bell Flight Boulevard, Fort Worth, Texas 76118"
phoneNumber = "817-280-2011"
tags = ["Azure", "Azure DevOps", "PX4", "Python", "Docker", "SQL"]
description = """
I worked as a Python developer within [Bell's Innovation group](https://www.bellflight.com/experience/innovation), primarily focusing on fleet simulation and DevOps.

- Rearchitected a SQL server data analysis workflow with Databricks and Azure Batch to save over $30k annually
- Automated testing, static code analysis, and deployments with Azure Pipelines
- Developed a process for repeatable mass deployments of mission software onto air-launched drones
- Participated in test events and provided on-site customer support for mission-critical software
- Simplified Python code distribution and re-usability using JFrog Artifactory
- Volunteered with the Bell Advanced Vertical Robotics competition for high-school students as the lead software engineer writing control software, documentation, and answering student questions
  """
  showFullContent = false
  weight = 2
  +++

At Bell, I was primarily a Python developer within the
[Innovation group](https://www.bellflight.com/experience/innovation).

Initially, I worked with [Microsoft AirSim](https://github.com/microsoft/AirSim)
to create training data for object recognition machine learning.
Some of this work was featured in the Microsoft Ignite 2021 conference
during the segment on AI:

{{< youtube mM7_zFAIJ9A >}}

Later on, I was one of the initial customers for Project AirSim, Microsoft's successor
to this project. I met with Microsoft engineers weekly to discuss the product and
provide feedback. A lot of this work is mentioned in this article:

[https://news.microsoft.com/source/features/innovation/microsoft-launches-project-airsim-an-end-to-end-platform-to-accelerate-autonomous-flight/](https://news.microsoft.com/source/features/innovation/microsoft-launches-project-airsim-an-end-to-end-platform-to-accelerate-autonomous-flight/)

I began to work more on business modeling and fleet simulation and was the scrum
master of the team. With the help of Azure engineers, we were able to re-architect a
data analysis workflow that had been set up before I joined. We had a multi-terabyte
SQL database in Azure that was extremely expensive and our queries were painfully slow.
By leveraging
[Parquet files](https://parquet.apache.org/), [Databricks](https://www.databricks.com/),
and [Azure Batch](https://azure.microsoft.com/en-us/products/batch), we were able
to analyze data much more quickly at a fraction of the cost.
The monthly data storage cost became negligible and we were able to spin up
servers automatically on-demand to process data in parallel, and then shut them down
when not in use. This reduced our annual Azure bill by over $30,000.

Additionally, I implemented and managed nearly all of Innovation's CI/CD with
Azure Pipelines and on-premises build agents. When I started, automated testing,
deployment, and static analysis of Python code were nonexistent. I was able to create
a set of standard development tools and settings to use on every project to
keep code consistent and high-quality. As the need for sharing Python code
increased, I was able to develop and deploy many internal packages to our
JFrog Artifactory server. This became an efficient way to deploy software within
our team and to other internal customers while maintaining export compliance.

I was heavily involved in Bell's Advanced Vertical Robotics competition. This is a
high school drone competition where teams are sent a kit of parts and follow
instructions on how to assemble, test, and fly their drone from scratch. Once they
get their drone flying, they're expected to modify the drone to complete the challenges
given in the game.

{{< gallery_image src="PXL_20211026_211558556.jpg" >}}

I worked on the flight software of the drones, wrote some
documentation, and helped support students on the forums. From a software perspective,
there are a ton of moving parts. As everything is done indoors, we wrote our
own software to take data from a stereoscopic tracking camera, convert this into
fake GPS data, and then feed it directly to the flight controller. We had custom
firmware for the [PX4](https://px4.io/) flight controller to facilitate this,
firmware for the onboard Arduino to manage LEDs and servos, a Python ground control
station, and all of the flight software. The flight software was made up of about 6
different software modules that all had to work together correctly. This included
code to get data from the tracking camera, code to process video data looking
for [AprilTags](https://april.eecs.umich.edu/software/apriltag) placed on the game
court, sensor fusion code, code to interact with the flight controller, code
to interact with the Arduino, and more. We ended up with pub/sub architecture
built on [MQTT](https://mqtt.org/) where software modules were independent Docker
containers that could subscribe to, or publish, JSON data. This allowed for a very
testable design, and plug-and-play architecture that easily allowed students
to write their own autonomy code.

Finally, for seven weeks, I was a subcontractor for Raytheon, brought in to compile,
configure, and deploy their mission software to a large number of
real and virtual [air-launched effects](https://www.anduril.com/hardware/altius/).
This was challenging, as the network connecting all of the devices was
completely isolated from the outside world. I developed a system to bundle
Raytheon's software in a Docker container and utilized
[Ansible](https://www.ansible.com/) to deploy it. This involved spending three
weeks in two separate trips to the US Army Yuma Proving Grounds for live tests.

{{< gallery_image src="PXL_20220310_000151703.jpg" >}}

A later test at Dugway Proving Grounds was covered in this article:

[https://www.thedrive.com/the-war-zone/28-drone-swarm-just-paved-way-for-simulated-army-air-assault-mission](https://www.thedrive.com/the-war-zone/28-drone-swarm-just-paved-way-for-simulated-army-air-assault-mission)
