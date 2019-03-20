---
templateKey: blog-post
title: A beginners guide to Infrastructure as Code
date: 2017-01-04T15:04:10.000Z
image: '/img/automate.jpg'
description: >-
  Infrastructure as code (IaC) is the process of managing and provisioning
  computing resources through machine-readable definition files, rather than
  physical hardware configuration or interactive configuration tools. The
  definitions are intended to be managed just like software in a version control
  system. It can use either scripts or declarative definitions, rather than
  manual processes, but the term is more often used to promote declarative
  approaches. IaC approaches are highly promoted for cloud computing.
tags:
  - Infrastructure as Code
---
![Infrastructure as Code](/img/iac.png)

Infrastructure and operations as code is an essential practice for realizing the advantages of modern clouds.  For enterprises looking to migrate to Amazon Web Services, Azure, or Google Cloud Platform, scripted infrastructure and automation are the key first steps through which other devops practices become accessible.  This post will enumerate some key benefits that become possible once we embrace infrastructure as code practices.

By codifying our infrastructure, we enable better testing and quality control, more efficient and predictable deployments, and decreased recovery times. It provides improved testability and monitoring, lowers the cost of experimentation and innovation, makes deployments more predictable, and decreases the mean time to resolution (MTTR) for issues.

## Automate your deployment and recovery processes

With infrastructure automation, reproducible environments become possible.  We can use the same automation scripts to deploy exact copies of production to development, test, and production environments.  With these consistent deployments, we are able to achieve the ever-elusive development-to-prod parity, finally putting an end to the “it worked on my machine!” problems.

The pinnacle of infrastructure automation is the Blue/Green deployment strategy.  This strategy enables zero downtime deployments and allows us to run live tests before releasing our changes to our users.  Blue/Green Deployments take advantage of our ability to run exact copies of our environments in parallel.  By controlling when traffic is routed to our new copy, we can defer a release until we are 100% confident that our new environment is ready.
