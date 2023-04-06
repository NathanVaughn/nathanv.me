+++
title = "Linkspring"
website = ""
daterange = "Summer 2020 - March 2023"
subtitle = ""
tags = ["AWS", "Lambda", "DynamoDB", "S3", "CloudFront", "Python", "Flask"]
description = "I developed a severless web app for users to create a page to consolidate all of the links they want to share with other people (Facebook, Twitter, Instagram, GitHub, etc) in one place."
showFullContent = false
weight = 2
+++

I developed a severless web app for users to create a page to consolidate all
of the links they want to share with other people (Facebook, Twitter, Instagram,
GitHub, etc) in one place. I solely did all of the work on it including design,
back-end work, front-end work, and development automation. It was primarily built
with the Python [Flask framework](https://flask.palletsprojects.com/en/1.1.x/)
and runs on [AWS Lambda](https://aws.amazon.com/lambda/) with
[DynamoDB](https://aws.amazon.com/dynamodb/) as a database. The vast majority of
the codebase was covered by unit and integration tests which were automatically
run on every pull request. Every component, including a duplicate development copy,
was hosted within AWS. Billing was handled by [Stripe](https://stripe.com/).

{{< image_gallery >}}

{{< gallery_image src="logo-full.png" >}}
{{< gallery_image src="profile-page.jpg" >}}
{{< gallery_image src="account-profile.jpg" >}}
{{< gallery_image src="account-links.jpg" >}}
{{< gallery_image src="architecture.jpg" >}}

{{< /image_gallery >}}

The old website was [https://lksg.me/](https://lksg.me/).
