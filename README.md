This projet is small HTML/JavaScript page which gives graphical charts of the traffic
("unique cloners" and "unique visitors") on the Etat de Geneve's GitHub projects.

This project heavily resorted to Tutorial Point's 
[primer](https://www.tutorialspoint.com/d3js/index.htm).

# Technical facts

The project consists of three parts:

- A small HTML file
- A JavaScript file which stores the traffic values, for a set of GitHub projects
- A JavaScript file which plots the traffic values. 
It is based on the [D3](d3js-org) library.

# Usage

In order to view the charts, simply open a browser on file `charts.html`.

# Customization 

In order to accommodate this project to your GitHub page:

1. Clone this project

2. Edit file `data/XXX.js` and replace the values with you own traffic values

On the community version of GitHub, the traffic values cna be found, for each project, at tab `Insights`, option
`Traffic`. 
Note that GitHub provides values on a 2-week time range only. 
This implies that you have to pick and store these value quite regularly, e.g., every month.
As far as we know, values older than two weeks are lost for ever. 
