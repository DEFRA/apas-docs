<div id='top'></div>

# Calculation job settings

- [Scenario overview](#section1)
- [Calculation job](#section2)
    - [Calculation job type](#section2a)
    - [Calculation method](#section2b)
    - [Other calculation job settings](#section2c)
- [Exporting a calculation job good practice](#section3)

<div id='section1'></div>

## Scenario overview

The scenario overview shows all of the available scenarios, as well as some summary information, such as the:
- calculation year
- number of emission sources
- total emissions for oxides of nitrogen (NO<sub>x</sub>) and ammonia (NH<sub>3</sub>) in kilograms per year (kg/y)
  
Scenarios that are included in the current calculation job are shown with a blue bar on the left.

<div id='section2'></div>

## Calculation job

A calculation job is a group of scenarios that will be calculated together as a set. Each calculation job requires at least one scenario.

<div id='section2a'></div>

### Calculation job type

The calculation job type determines what is calculated and how the scenarios are used in the calculation. Different calculation job types use different scenario types. For more detail about the scenario and calculation job types, [watch this video](https://www.youtube.com/watch?v=-8B3_9F_pYU).

The different calculation job types are:
- **process contribution** - a project scenario is calculated, optionally with a reference and/or an off-site reduction scenario according to the equation shown below
> PC = (project scenario results) – (reference scenario results) – (off-site reduction results)
- **maximum temporary effect** - the maximum of one or more temporary scenarios is calculated, optionally with a reference and/or an off-site reduction scenario
- **in-combination process contribution** - a project scenario is calculated together with one or more in combination scenarios, optionally with a reference and/or an off-site reduction scenario
- **single scenario** - the contribution of one scenario is calculated

*Note that in-combination assessment results are valid at the time of calculation but may be subject to change as additional projects are added to the archive*

<div id='section2b'></div>

### Calculation method

- **quick run** - you can use this method to quickly calculate an indicative set of results, using small representative proportion of the meteorological dataset, but is otherwise the same as the formal assessment method. This method is recommended for informal modelling such as indicative testing or when learning to use the tool. 

- **formal assessment** - you can use this calculation method as part of the formal permit or planning process. Results are automatically calculated for the extents of each designated site located within the zone of influence of the emission sources. If you have included custom assessment points then these will also be calculated and the results for custom assessment points will be included in any exported report.

- **custom assessment points** - this method will calculate results only for the individual assessment points defined using the 'Assessment points' screen. It will not calculate results for the full extents of all designated sites located within the zone of infleunce of the emission sources. Additionally, this calculation method does not provide information on Decision Making Threshold (DMT).

<div id='section2c'></div>

### Other calculation job settings

Other settings within this tab allow you to select:
- the country
- project category (agriculture, combustion plant, local plan, other or roads)
- zone of influence (this refers to the extent you want sites to be included, beyond this distance, emissions are not calculated)
- the scenarios to be included in your calculation job

<div id='section3'></div>

## Exporting a calculation job good practice

The calculator does not save your work as you go and you may lose your progress if the tab is closed. For this reason, it is recommended that you export your calculation job after setting it up rather than calculating the results in the browser. A link will be sent to your email to download your calculation job file when it is ready and it can be reimported at any time to view the results. 

[Return to top](#top)
