# Nuco <br>

![image](https://github.com/user-attachments/assets/98c5b75c-c56b-436a-94a8-0970e1acad99)



Nuco (Numbers + Colors) is a casual mobile friendly game that stacks and subtracts numbers to get as low as 1.
It was developed and designed as part of the midterm project "Casual Games" at Köln International School of Design by Samia Rachid.

## Table of Contents:
[Nuco](#Nuco)<br>
[Game Design Document](#Game-design-document)<br> 
[How To Play](#How-to-play)<br>
[Game Rules](#Game-rules)<br>
[Build information](#Build-information)

## Game Design Document
A full and detailed description (GDD) of the game is published on the following site: [nuco Game Design Document](https://woolly-calf-705.notion.site/nuco-11ecb3271f528081b18cfce9caded762)

## How To Play

nuco is a puzzle game where players aim to manipulate the values of tiles on a 3x3 grid to achieve a the  lowest score possible. The objective is to make the sum of all tile values equal to or less than 9. Players can drag and drop tiles to either add or subtract their values based on specific conditions.
### Game Rules

1. **Initial Setup:**
    
    The game starts with a 3x3 grid of tiles. Each tile is initialized with a random number between 90 and 99.
    
2. **Gameplay Mechanics:**
    
    Players can drag a tile and drop it onto another tile. If the value of the dragged tile is less than the value of the dropped tile, the values are subtracted. If the value of the dragged tile is greater than or equal to the value of the dropped tile, the values are added.
    
    The resulting value is updated on both the dragged and dropped tiles.

## Build information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
