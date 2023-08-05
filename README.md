## Creating micro-frontend architecture using angular element

Created a workspace using `ng new angular-elememt-micro-frontend --createApplication="false"`

Or else we can create seperate separate applications also to implement this architecture

## Under the workspace, created three project for three applications

navigate to workspace folde by `cd angular-elememt-micro-frontend` then
run command `ng generate application <project_name>` to create project

1. Base Application
2. Micro-Frontend-One
3. Micro-frontend-two

## Installed angular element package

run commad `ng add @angular/elements`

## make as micro-front application for Micro-Frontend-One & Micro-frontend-two and build that file to serve

run this two application thorugh http-server
step1: `cd dist/<project-name>`
step2: `http-server -p <diff-port>`
