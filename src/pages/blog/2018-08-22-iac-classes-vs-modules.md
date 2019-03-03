---
templateKey: blog-post
title: 'Infrastructure as Code: Classes vs Modules'
date: 2018-08-22T12:00:10.000Z
description: >-
  A new form of Infrastructure as Code building Blocks is starting to be used
  within Enterprise CI/CD development
tags:
  - Infrastructure as Code
  - Classes
---
![Piles of Lego Brick Colors](/img/legocolorpiles.jpg)

The use of infrastructure as code (IaC) now dominates modern application design. Terraform provides the ability to encapsulate Terraform code into modules that can be reused. However, the use of Terraform code in CI/CD pipelines for sophisticated deployments poses new challenges.

## What IaC Classes mean to you

* Better handling of multi-region cloud deployments
* Clear dependencies between sequences of deployment steps
