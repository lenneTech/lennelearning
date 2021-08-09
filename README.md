# academy

## Dependencies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.  
Libraries used:  
[Nebular](https://akveo.github.io/nebular/) version 7.0.0  
[Bootstrap](https://getbootstrap.com/) version 5.0.1  
[Bootstrap Icons](https://icons.getbootstrap.com/) version 1.5.0  
[Ngx-HighlightJS](https://www.npmjs.com/package/ngx-highlightjs) version 4.1.4  
[Ngx-Lottie](https://www.npmjs.com/package/ngx-lottie) version 7.0.3

---

## Setup

```
# Clone the project
$ git clone https://github.com/lenneTech/academy.git

# Navigate to the created folder
$ cd academy

# Install all dependencies
$ npm install
```

## Running the project

```
# development
$ ng serve

# server-side rendering
$ npm run dev:ssr
```

## Formatting the project

We are using [eslint](https://www.npmjs.com/package/eslint) to check our code for potential mistakes.
As a formatting-tool we are using [prettier](https://www.npmjs.com/package/prettier) to get a good formatted look of our code and to prevent trivial merge-conflicts.

```
# linting
npm run lint

# formatting
npm run format:fix
```

This commands gets automatically executed, when you commit your changes

## Submit Changes / Content

To submit changes you need to push them into created branch and then to request a review.

```
# Create a new branch
$ git checkout -b <branchName>
```

Now you can change things or add new [sections](#How-to-add-Sections) or [tasks](#How-to-add-Tasks) to the project

```
# Push your changes
$ git add .
$ git commit -m"message"
$ git push
```

Now you need to create a "pull request" in GitHub to merge your edit into the main branch and request a review.
When everything is fine, your code will be in the next version of the project. Otherwise you need to change something on your content.

---

## How to add Sections

To add a section to the academy you need to follow these steps:

1. Generate a new component with the name of your section.
2. Declarate the new component inside the academy.module.ts file.
3. Add the sectionname to the \_section-array in the section.service.ts file.
4. Add the sectionname to each \_entryPoints-Object in the entry-point.service.ts file.
5. Add a path to the new component in the academy-routing.module.ts file.
6. Inside the new generated component.html file you remove everything and start by adding a section with some directives:
   `<section [pageTitle]="'Sectionname'" [seoTitle]="'ltacademy - Sectionname'" [seoDescription]="'Lerne Sectionname mithilfe der ltacademy.'" [seoKeywords]="'sectionname, academy, online, learning, platform'" > `
7. The Section is ready to get filled with tasks.

---

## How to add Tasks

All task-components have the same layout:

`<task id="task-1" section="sectionname"> <div title>Titletext</div> <div description></div> <task-type> ... </task-type> </task>`

1. An id `<task id="task-1">` to navigate between each task in one section.
2. A sectionname `<task section="sectionname">` to save your progress in the local storage.

3. A title `<div title>Titletext</div>` which is also displayed in the sidemenu (if the title is too long for the sidebar you can add `<div sidebarTitle>Tasktitle</div>`. This will only be visible inside the sidemenu and your title will only be visible on the task itself).
4. And a description `<div description>Descriptiontext</div>`.
5. Every Task gets the option of three types of tips as directives:
   `videoReference="Video 1"`,
   `hint="Here is my very helpful hint"`,
   `solutionLink="linkToTheSolution.com" `. These will be accessed by clicking on a questionmark in the top-right corner of the component. Inside the upcoming modal the tips are displayed.
6. There is also an optional directive for an image `[image]="{ url: 'imageUrl', alt: 'altText' }"`, which will be displayed on the right of the Task-Content.
7. Inside those task-components you can specify what type of task you want to generate. There are 4 types for now:

### Task-Video

`<task-video [link]="'videoplaylist.com'" [videoPreview]="'imageUrl'"> <div videolist>Video 1: Exampletext</div> <div videolist>Video 2: Exampletext</div> </task-video>`

1. With `<task-video [link]="'videoplaylist.com'" [videoPreview]="'imageUrl'">` you can generate a component with a clickable videoimage.
2. If it is a youtube-video, you can swap those two directives with one youtubelink-directive `[youtubelink]="'https://www.youtube.com/embed/abcdefghij'"` to embed the video on the page. You need the embed-link to get the wanted result.
3. The videolist-directive `<div videolist>Video 1: Exampletext</div>` visualizes each item as an ordered list item.

### Task-Questions

`<task-questions> <div questionlist>Question 1</div> <div questionlist>Question 2</div> </task-questions>`

1. With `<task-questions>` you can generate a default component with questions inside.
2. The questionlist-directive `<div questionlist>Question 1</div>` visualizes each item as an ordered list item which can be crossed out when answered. This is just for the user and will not be saved in some kind of storage.
3. There is the option to add an extraquestion `<div extraquestion>Questiontext</div>` which will be will get visualized as a special question.

### Task-Text

`<task-text> <div exercise>Exercisetext</div> <div exerciselist>Exercise 1</div> <div exerciselist>Exercise 2</div> </task-text>`

1. With `<task-text>` you can generate a default component with exercises inside.
2. The exercise-directive `<div exercise>Exercisetext</div>` visualizes the main exercise of the component.
3. The exerciselist-directive `<div exerciselist>Exercise 1</div>` visualizes each item as an ordered list item which can be crossed out when answered. This is just for the user and will not be saved in some kind of storage.
4. There are the info-directive `<div info>Infotext</div>`and the infolist-directive `<div infolist>Infolisttext</div>` to replace the other directives if the "cross-out-feature" is unnecessary in your usecase.

### Task-Code

`<task-code [url]="'/assets/snippets/codesnippet.js'"></task-code>`

1. With `<task-code>` you can visualize a codesnippet in a highlighted way.
2. With the url-directive `[url]="'/assets/snippets/codesnippet.js'"` you can link a code file wich will be displayed in the component.

#### Other directives

1. The pagelink-directive `<a href="/academy/section#task-3" pageLink>Some clickable text</a>` links to another task on the same page.
2. The tasklink-directive `<a href="link" taskLink>Some clickable text</a>` is for external navigation.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
