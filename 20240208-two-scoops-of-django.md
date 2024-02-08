---
date: 2024-02-08
topic: two scoops of django
tags: technical, book, django, python
---

# Brief

Today is a holiday. I spent some time to read a book about Django framework because I was having this book for more than a year but never took time to read it. The book is titled "Two Scoops of Django" by Audrey Roy Greenfeld and Daniel Roy Greenfeld.

# What I Learned

## Settings File should be Committed to VCS

I learned that we can (and encouraged) to have our settings file commited to VCS. This is because we want to avoid discrepancy between our development and our colleagues' development environment. But remember to separate the sensitive information like API keys, database password, etc. into a separate file that is not commited to VCS. The book mentioned about 12factor app, which also mention about separating the settings into environment variables.

The settings file should have some kind of inheritance, it recommends to have a base settings file that contains the common settings for all environment, and then have a separate settings file for each environment (development, production, etc.) that inherits from the base settings file.

## Custom Migration File and Logic

When Django's auto generated migration file is not enough to cover our needs, we can add logic to the migration file. We can use RunPython operation to add custom logic to the migration file. For example, we can use RunPython to add a new column to a table and populate the column with some default value.

When RunPython is not enough, we can resort to using RunSQL operation. This operation allows us to run raw SQL queries in the migration file.

## Multiple Small Apps is Better than One Big App

When using Django, it is better to have multiple small apps than one big app. The book uses term `Fat Model, Thin View, Stupid Template` to describe the best practice of Django. This means that the model should contain the business logic, the view should contain the logic to handle the request and response, and the template should contain the logic to display the data.

## Model Inheritance

There are 3 types of model inheritance in Django:
1. Abstract Base Class
2. Multi-table Inheritance
3. Proxy Model
(and also you can always resort to no inheritance)

It explains the pros and cons of each type of inheritance. It advocates to avoid using Multi-table Inheritance because there will be multiple tables created and will have multiple JOIN operations when querying the data. Instead, it recommends to use Abstract Base Class or Proxy Model.

## About Table Denormalization

The author strongly recommends to explore about caching first before trying to denormalize the database. Most of the time, caching is enough to speed up the query. But if the query is still slow, then we can consider denormalizing the database.

## About Database Query

It emphasizes to be careful about query that throws an exception, for example `get_object_or_404`, which will return 404 if the object is not found. You need to handle the exception properly, because if you don't, the server will crash.

# Ideas to Explore in the Future
