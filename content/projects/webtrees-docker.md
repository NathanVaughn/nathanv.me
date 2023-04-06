+++
title = "Webtrees Docker Image"
website = "https://github.com/NathanVaughn/webtrees-docker"
daterange = "Summer 2019 - Present"
subtitle = ""
cover = ""
tags = ["Docker", "GitHub", "Python"]
description = "I have created and maintain a Docker image for popular web-based genealogy software [Webtrees](https://webtrees.net/)."
showFullContent = false
weight = 5
+++

I have created and maintain a Docker image for popular web-based genealogy software
[Webtrees](https://webtrees.net/).
Every day, an automated task checks for new versions of the upstream Webtrees software,
and automatically generates and builds the subsequent Dockerfiles.
Multi-architecture builds are also enabled via
[Docker Buildx](https://docs.docker.com/buildx/working-with-buildx) and QEMU.
The image has over 200,000 pulls on Docker Hub.
