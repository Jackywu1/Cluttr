# Cluttr API Gateway

## Introduction

The Cluttr API Gateway acts as a reverse proxy that redirects incoming requests to their respective services.

## How are requests handled

Each request has its url parsed and extracted to identify which service the request should be redirected to.

## Why is this needed

The Cluttr API Gateway is created using Go, which offers support for concurrency using Goroutines. This feature allows users to query from multiple data sources in parallel, which reduces the overall response time. Users also do not need to request from multiple services manually, since the Gateway acts as a reverse proxy integrating the individual services.
