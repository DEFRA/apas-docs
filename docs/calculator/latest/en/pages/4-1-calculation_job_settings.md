<div id='top'></div>

# Calculation Job Settings

- [Scenario overview](#section1)
- [Calculation job](#section2)
    - [Calculation job type](#section2a)
    - [Calculation method](#section2b)
    - [Other calculation job settings](#section2c)

<div id='section1'></div>

## Scenario overview

The scenario overview shows all of the scenarios you've uploaded, as well as some summary information, such as the:
- calculation year
- number of emission sources
- emissions for oxides of nitrogen (NO<sub>x</sub>) and ammonia (NH<sub>3</sub>) in kilograms per year
  
Scenarios that are included in the current calculation job are shown with a blue bar on the left.

The calculation method you select determines the area and points for which results will be calculated.

<div id='section2'></div>

## Calculation job

A calculation job is a group of scenarios that will be calculated together as a set. Each calculation job requires at least 1 scenario.

<div id='section2a'></div>

### Calculation job type

The calculation job type determined what is calculated and how the scenarios are used in the calculation. 

- **process contribution** - a project scenario is calculated, optionally in combination with a reference and/or an off site reduction scenario as shown below
> PC = (project scenario results) – (reference scenario results) – (off-site reduction results)
- **maximum temporary effect** - the maximum of one or more temporary scenarios is calculated, optionally in combination with a reference and/or an off site reduction scenario
- **in-combination process contribution** - a project scenario is calculated together with 1 or more in combination scenarios, optionally in combination with a reference and/or an off site reduction scenario
- **single scenario** - the contribution of one scenario is calculated

*Note that in-combination assessments are only valid at the time of calculation and may be subject to change*

<div id='section2b'></div>

### Calculation method

- **quick run** - you can use this method to quickly calculate an indicative set of results, using only a small proportion of the meteorological dataset. This method is recommended to be used in for informal modelling such as indicative testing or when learning to use the tool. 

- **formal assessment** - you can use this calculation method as part of the formal permit or planning process. Results are calculated for the extents of each designated site located within the zone of influence of the emission sources. If you have custom assessment points in your scenario then a formal assessment will calculate custom assessment points and the results for custom assessment points will be included in any exported report.

- **custom assessment points** - this method will calculate results only for the individual assessment points defined using the 'Assessment points' screen. It will not calculate results for the full extents of all designated sites located within the zone of infleunce of the emission sources. Additionally, this calculation method does not provide information on Decision Making Threshold (DMT). This calculation method can be useful for running a fast calculation, using only a few custom assessment points, and sense-checking that the results are generally as expected.

<div id='section2c'></div>

### Other Calculation job settings

Other settings within this tab allow you to select:
- the country
- project category (agriculture, combustion plant, local plan, other or raods)
- zone of influence (this refers to the screening distance of a designated site, beyond this distance, emissions are not calculated)

Additionally, the reference scenario and off-site reduction scenario allows you to select any other scenarios to be included in the calculation. Not all options are available for all calculation job types.

[Return to top](#top)
