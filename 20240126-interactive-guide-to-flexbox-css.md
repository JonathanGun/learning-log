---
date: 2024-01-26
topic: interactive guide to flexbox
tags: technical, flexbox, css
---

# Brief

I was reading this article https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/ and I learned a lot about flexbox.

# What I Learned

In the article, it showcases a dynamic layout without using media / container queries, only using flexbox. Even I have learned about flexbox before, I still don't truly understand at the point where I could use it to create a dynamic layout. My goal is to understand flexbox and be able to use it to create dynamic layout.

## Contents vs Items

The article explains about the difference between `contents` and `items` in flexbox. Think of `contents` like a "kebab", while `items` is like a "cocktail wieners". `contents` is lined up on the primary axis. We can't have a fine grained control upon a single kebab piece. On the other side, `items` is lined up on the cross axis. We can have a fine grained control upon every single "cocktail wiener" without interfering with the other items. That's why there's no `justify-self`. Quoting from the article:
* `justify` — to position something along the primary axis.
* `align` — to position something along the cross axis.
* `content` — a group of “stuff” that can be distributed.
* `items` — single items that can be positioned individually.

## Hypothetical Size, Flex Grow, Flex Shrink, and Flex Basis

Flexbox also has "hypothetical size". For example when we set an item width to be `10000px`, where our screen is only `1920px`, then the item will be shrinked to fit the parent box. When there are more than one item, each item might need to share the limited space. Flexbox has algorithm to calculate how each item shared the space. Luckily, we can control the algorithm using `flex-grow`, `flex-shrink`, and `flex-basis`.

`flex-basis` is the initial size of the item. In Flex row, it acts like `width`, while in Flex column, it acts like `height`. `flex-grow` is the ratio of how much the item will grow compared to other items. For example, if we have 2 items with `flex-grow: 1` and `flex-grow: 2`, then the second item will grow twice as much as the first item. `flex-shrink` is the ratio of how much the item will shrink compared to other items. For example, if we have 2 items with `flex-shrink: 1` and `flex-shrink: 2`, then the second item will shrink twice as much as the first item. You can try interactive example in the article.

## Trying to replicate the example

First I notice there is 3 items in the flexbox. Name textbox, Email textbox, then a Submit button. 

```html
<div class="container">
    <div class="name">
        <span>Name:</span>
        <input type="text" class="input" placeholder="JoeGun">
    </div>
    <div class="email">
        <span>Email:</span>
        <input type="text" class="input" placeholder="jonathanyudigun@gmail.com">
    </div>
    <div class="submit child">
        <button>Submit</button>
    </div>
</div>
```

Then apply flexbox to the container

```css
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: 1em;
}
```

Now you can add the `flex-basis` and `flex-grow` properties to each child with different values. To achieve similar effect, you need to specify the button to have the smallest `flex-basis`, then followed by `name`, then `email`. To make the `name` and `submit` button doesn't look like 'grows', we can give small value compared to the `email`. For example:

```css
.name {
    flex-basis: 10em;
    flex-grow: 1;
}

.email {
    flex-basis: 20em;
    flex-grow: 10;
}

.submit {
    flex-basis: 2em;
    flex-grow: 1;
}
```

# Ideas to Explore in the Future

* apply this to real project
