# academy

## Dependencies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.
Libraries used:
[Nebular](https://akveo.github.io/nebular/) version 7.0.0
[Bootstrap](https://getbootstrap.com/) version 5.0.1
[Bootstrap Icons](https://icons.getbootstrap.com/) version 1.5.0
[Ngx-HighlightJS](https://www.npmjs.com/package/ngx-highlightjs) version 4.1.4

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

`<task id="task-1"> <div title>Titletext</div> <div description></div> <task-type> ... </task-type> </task>`

1. An id `<task id="task-1">` to navigate between each task in one section.
2. A title `<div title>Titletext</div>` which is also displayed in the sidemenu (if the title is too long for the sidebar you can add `<div sidebarTitle>Tasktitle</div>`. This will only be visible inside the sidemenu and your title will only be visible on the task itself).
3. And a description `<div description>Descriptiontext</div>`.
4. Every Task gets the option of three types of tips as directives:
   `videoReference="Video 1"`,
   `hint="Here is my very helpful hint"`,
   `solutionLink="linkToTheSolution.com" `. These will be accessed by clicking on a questionmark in the top-right corner of the component. Inside the upcoming modal the tips are displayed.
5. Inside those task-components you can specify what type of task you want to generate. There are 4 types for now:

### Task-Video

`<task-video [link]="'videoplaylist.com'"> <div videolist>Video 1: Exampletext</div> <div videolist>Video 2: Exampletext</div> </task-video>`

1. With `<task-video [link]="'videoplaylist.com'">` you can generate a component with a clickable videoimage.
2. The videolist-directive `<div videolist>Video 1: Exampletext</div>` visualizes each item as an ordered list item.

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

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
